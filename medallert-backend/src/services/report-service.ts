import PDFDocument from "pdfkit";
import type { TreatmentRepository } from "../repositories/treatments.js";

export class ReportService {
  constructor(private readonly treatmentRepository: TreatmentRepository) { }

  async generatePDF(id: string): Promise<Buffer> {
    const treatment = await this.treatmentRepository.findTreatment(id);
    if (!treatment) throw new Error("Treatment not found");

    const doc = new PDFDocument();
    const chunks: Uint8Array[] = [];

    return await new Promise((resolve, reject) => {
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      doc.fontSize(20).text("Relatório do Tratamento", { align: "center" });
      doc.moveDown().text("---------------------------------------------");

      doc.fontSize(14.5).text("Informações: ");
      doc.moveDown().text("---------------------------------------------");
      doc.text(`Nome: ${treatment.name}`);
      if (treatment.description) doc.text(`Descrição: ${treatment.description}`);
      doc.text(`Início: ${treatment.startAt.toLocaleDateString()}`);
      if (treatment.endAt) doc.text(`Fim: ${treatment.endAt.toLocaleDateString()}`);
      doc.moveDown().text("---------------------------------------------");

      doc.text("Medicações");
      treatment.medications.forEach((med) => {
        doc.text(`Nome: ${med.name}`);
        doc.text(`Dose: ${med.dose}`);
        doc.text(`Tomadas: ${med.takenQuantity}/${med.totalQuantity}`);
        if (med.lastTaken) doc.text(`Última tomada: ${med.lastTaken}`);
        doc.moveDown();
      });

      doc.end();
    });
  }
}
