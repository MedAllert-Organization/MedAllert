import PDFDocument from "pdfkit";
import type { TreatmentRepository } from "../repositories/treatments.js";
import type { TreatmentMedicationRepository } from "../repositories/treatmentMedication.js";

export class ReportService {
  constructor(
    private readonly treatmentRepository: TreatmentRepository,
    private readonly treatmentMedicationRepository: TreatmentMedicationRepository
  ) {}

  async generatePDF(id: string, period: "Weekly" | "Monthly"): Promise<Uint8Array> {
    const findTreatment = await this.treatmentMedicationRepository.getByTreatment(id);
    if(!findTreatment){ 
      throw new Error("Cannot find any treatment")
    };

    const treatment = await this.treatmentRepository.findTreatment(id);
    if(!treatment){ 
      throw new Error("Cannot find treatment")
    };

    const now = new Date();
    const startDate = new Date();
    if(period === "Weekly"){ 
      startDate.setDate(now.getDate() - 7);
    }else if(period === "Monthly"){
     startDate.setMonth(now.getMonth() - 1);
    }

    const findMedication = findTreatment.filter((med) => {
      const medicationDate = med.lastTaken || med.medicationId;
      return medicationDate >= startDate && medicationDate <= now;
    });
    const medicationsToUse = findMedication.length > 0 ? findMedication : findTreatment;

    return await this.generateTreatmentDocument(
      treatment,
      medicationsToUse,
      period,
      startDate,
      now
    );
  }

  private async generateTreatmentDocument(
    treatment: any,
    treatmentMedication: any[],
    period: "Weekly" | "Monthly",
    startDate: Date,
    endDate: Date
  ): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument();
        const chunks: Uint8Array[] = [];

        doc.on("data", (chunk) => chunks.push(new Uint8Array(chunk)));
        doc.on("end", () => {
          const totalLength = chunks.reduce((acc, c) => acc + c.length, 0);
          const result = new Uint8Array(totalLength);
          let offset = 0;
          for (const chunk of chunks) {
            result.set(chunk, offset);
            offset += chunk.length;
          }
          resolve(result);
        });
        doc.on("error", reject);

        doc.fontSize(20).text(`Treatment Report - ${period}`, 100, 100);
        doc.fontSize(12).text(`Generated on: ${new Date().toLocaleDateString()}`, 100, 130);
        doc.text(
          `Period: ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`,
          100,
          150
        );

        doc.fontSize(16).text(`Treatment: ${treatment.name}`, 100, 180);
        if (treatment.description)
          doc.fontSize(12).text(`Description: ${treatment.description}`, 100, 200);

        let y = 240;

        if (treatmentMedication.length === 0) {
          doc.text("No medications found for this period.", 100, y);
          doc.end();
          return;
        }

        doc.fontSize(14).text("Medications:", 100, y);
        y += 30;

        treatmentMedication.forEach((m, i) => {
          const compliance =
            m.totalQuantity > 0
              ? ((m.takenQuantity / m.totalQuantity) * 100).toFixed(1) + "%"
              : "N/A";

          doc
            .fontSize(12)
            .text(`${i + 1}. ${m.medication?.name || "Unknown"}`, 120, y)
            .text(`Dose: ${m.dose}`, 300, y)
            .text(
              `Taken: ${m.takenQuantity}/${m.totalQuantity} (${compliance})`,
              450,
              y
            );

          y += 25;

          if (m.lastTaken) {
            doc.text(`Last taken: ${m.lastTaken.toLocaleDateString()}`, 140, y);
            y += 20;
          }

          y += 10;
          if (y > 700) {
            doc.addPage();
            y = 100;
          }
        });
        doc.end();
      } catch (err) {
        reject(err);
      }
    });
  }
}