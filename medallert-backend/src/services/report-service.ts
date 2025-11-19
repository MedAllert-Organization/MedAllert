import PDFDocument from "pdfkit";
import type { TreatmentRepository } from "../repositories/treatments.js";
import type { TreatmentMedicationRepository } from "../repositories/treatmentMedication.js";

export class ReportService {
  constructor(private readonly treatmentRepository: TreatmentRepository) {}

  async generatePDF(id: string): Promise<Uint8Array> {
    const treatment = await this.treatmentRepository.findTreatment(id);
    if (!treatment) {
      throw new Error("Tratamento não encontrado");
    }

    const doc = new PDFDocument();
    const buffers: Uint8Array[] = [];

    doc.on("data", (chunk: Uint8Array) => buffers.push(chunk));
    doc.on("end", () => {});

    doc.fontSize(18).text(`Relatório de Tratamento`, { align: "center" });
    doc.moveDown();
    
    doc.fontSize(14).text(`Nome do Tratamento: ${treatment.name}`);
    if (treatment.description) doc.text(`Descrição: ${treatment.description}`);
    doc.text(`Início: ${treatment.startAt.toLocaleDateString("pt-BR")}`);
    if (treatment.endAt) {
      doc.text(`Término: ${treatment.endAt.toLocaleDateString("pt-BR")}`);
    }

    doc.moveDown().fontSize(16).text("Medicamentos:", { underline: true });
    doc.moveDown(0.5);

    treatment.medications.forEach((med, index) => {
      doc.fontSize(14).text(`${index + 1}. ${med.name}`);
      doc.fontSize(12)
        .text(`Dose: ${med.dose}`)
        //.text(`Intervalo entre doses (h): ${med.alertPeriodInHours}`)
        .text(`Última dose tomada: ${med.lastTaken ? med.lastTaken.toLocaleString("pt-BR") : "Nunca"}`)
        .text(`Quantidade tomada: ${med.takenQuantity}`)
        .text(`Total previsto: ${med.totalQuantity}`)
        .moveDown();
    })
    doc.end();
    const pdfBuffer = Buffer.concat(buffers);
    return new Uint8Array(pdfBuffer);
  }
}