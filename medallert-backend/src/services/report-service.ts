import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

import type {
  Treatment,
  TreatmentRepository,
} from "../repositories/treatments.js";

export class ReportService {
  constructor(private readonly treatmentRepository: TreatmentRepository) {}

  async generateReport(
    userId: string,
    period: "Weekly" | "Monthly",
  ): Promise<string> {
    const now = new Date();
    const startDate = new Date();

    if (period === "Weekly") {
      startDate.setDate(now.getDate() - 7);
    } else if (period === "Monthly") {
      startDate.setMonth(now.getMonth() - 1);
    }

    const UserTreatment =
      await this.treatmentRepository.findAllTreatments(userId);

    const treatmentPeriod = UserTreatment.filter((treatment) => {
      const treatmentStart = treatment.startAt;
      const treatmentEnd = treatment.endAt || new Date();
      return treatmentStart <= now && treatmentEnd >= startDate;
    });

    return this.generatePDF(userId, period, startDate, now, treatmentPeriod);
  }

  private async generatePDF(
    userId: string,
    period: "Weekly" | "Monthly",
    startDate: Date,
    endDate: Date,
    treatments: Treatment[],
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument();
        const reportDir = path.resolve("reports");

        if (!fs.existsSync(reportDir)) {
          fs.mkdirSync(reportDir, { recursive: true });
        }

        const fileName = `treatment_report_${userId}_${period}_${Date.now()}.pdf`;
        const filePath = path.join(reportDir, fileName);
        const stream = fs.createWriteStream(filePath);

        doc.pipe(stream);

        doc.fontSize(20).text("Relatório de Tratamentos", { align: "center" });
        doc.moveDown();
        doc
          .fontSize(12)
          .text(`Período: ${period === "Weekly" ? "Semanal" : "Mensal"}`)
          .text(`De: ${startDate.toLocaleDateString("pt-BR")}`)
          .text(`Até: ${endDate.toLocaleDateString("pt-BR")}`);
        doc.moveDown();

        if (treatments.length > 0) {
          doc.fontSize(16).text("Tratamentos:");
          doc.moveDown(0.5);

          treatments.forEach((treatment, index) => {
            doc
              .fontSize(10)
              .text(`${index + 1}. ${treatment.name}`)
              .text(
                `   Descrição: ${treatment.description || "Nenhuma descrição"}`,
              )
              .text(
                `   Início: ${treatment.startAt.toLocaleDateString("pt-BR")}`,
              )
              .text(
                `   Término: ${treatment.endAt ? treatment.endAt.toLocaleDateString("pt-BR") : "Em andamento"}`,
              )
              .text(`   Status: ${this.getTreatmentStatus(treatment)}`);
            doc.moveDown(0.5);
          });

          doc.moveDown();
          doc.fontSize(14).text("Resumo:");
          doc
            .fontSize(10)
            .text(`Total de tratamentos: ${treatments.length}`)
            .text(
              `Tratamentos em andamento: ${treatments.filter((t) => !t.endAt).length}`,
            )
            .text(
              `Tratamentos concluídos: ${treatments.filter((t) => t.endAt && t.endAt <= endDate).length}`,
            );
        } else {
          doc
            .fontSize(12)
            .text("Nenhum tratamento encontrado para o período selecionado.");
        }

        doc.moveDown(2);
        doc
          .fontSize(8)
          .text(`Relatório gerado em: ${new Date().toLocaleString("pt-BR")}`, {
            align: "center",
          });

        doc.end();

        stream.on("finish", () => resolve(filePath));
        stream.on("error", reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  private getTreatmentStatus(treatment: Treatment): string {
    const now = new Date();

    if (!treatment.endAt) {
      return "Em andamento";
    }

    if (treatment.endAt < now) {
      return "Concluído";
    }
    return "Ativo";
  }
}
