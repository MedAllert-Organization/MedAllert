import PDFDocument from "pdfkit";
import type { TreatmentRepository } from "../repositories/treatments.js";
import type { TreatmentMedicationRepository } from "../repositories/treatmentMedication.js";
import { resolve } from "node:path";

export class ReportService {
  constructor(private readonly treatmentRepository: TreatmentRepository) {}

  async generatePDF(id: string): Promise<PDFKit.PDFDocument> {
    
    const doc = new PDFDocument();
    const treatment_repository = await this.treatmentRepository.findTreatment(id);
    if(!treatment_repository) throw new Error("It's no possible find treatment");

    doc.fontSize(20).text("Relatório do Tratamento",{align:"center"});
    doc.moveDown().text("---------------------------------------------");

    doc.fontSize(14.5).text("Informações: ");
    doc.moveDown().text("---------------------------------------------")
    doc.text(`Nome do Tratamento: ${treatment_repository.name}`);
    if(treatment_repository.description) doc.text(`Descrição do Tratamento: ${treatment_repository.description}`);
    doc.text(`Inicio do tratamento: ${treatment_repository.startAt.toLocaleDateString()}`);
    if(treatment_repository.endAt)doc.text(`Fim do Tratamento: ${treatment_repository.endAt.toLocaleDateString()}`);
    doc.moveDown().text("---------------------------------------------");

    doc.fontSize(14.5).text("Medicações");
    treatment_repository.medications.forEach((med)=>{
      doc.text(`Nome: ${med.name}`);
      doc.text(`Dose: ${med.dose}`);
      doc.text(`Quantidade tomadas:${med.takenQuantity}`);
      doc.text(`Quantidade Total prevista:${med.totalQuantity}`);
      doc.text(`Ultima medicação tomada: ${med.lastTaken}`);
    });
    doc.end
    return doc;    
  }
}