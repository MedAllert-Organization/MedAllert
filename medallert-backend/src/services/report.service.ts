import PDFDocument from "pdfkit";
import { prisma } from "../infra/prisma/client.js";
import fs from "fs";
import path from "path";

export class ReportService {
  static async generateReport(userId: string, period: "Weekly" | "Monthly"): Promise<string> {
    const now = new Date();
    const startDate = new Date();
    const doc = new PDFDocument();

    // Fixed period calculations
    if (period === "Weekly") {
      startDate.setDate(now.getDate() - 7);
    } else if (period === "Monthly") {
      startDate.setMonth(now.getMonth() - 1); // Fixed: was setDate(now.getDate()-1)
    }

    // Fetch treatments from database
    const treatments = await prisma.treatments.findMany({
      where: {
        userId,
        OR: [
          { startAt: { lte: now }, endAt: { gte: startDate } },
          { startAt: { gte: startDate, lte: now } }
        ]
      },
      include: {
        medications: true
      },
    });

    // Fixed: Get medication IDs correctly
    const medicationIds = treatments.flatMap((t: any) => 
      t.medications.map((m: any) => m.medicationId) // Fixed: was medicationIds
    );

    const notifications = await prisma.notifications.findMany({
      where: {
        medicationId: { in: medicationIds },
        alertAt: {
          gte: startDate,
          lte: now
        },
      },
      orderBy: { alertAt: "asc" },
    });

    // Document setup
    const reportsDir = path.resolve("reports");
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    const filePath = path.join(reportsDir, `treatment-report-${userId}-${period}.pdf`);

    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(20).text("Relatório do Tratamento", { align: "center" });
    doc.moveDown();

    doc.fontSize(14).text(`Usuário: ${userId}`);
    doc.text(`Período: ${startDate.toLocaleDateString()} - ${now.toLocaleDateString()}`);
    doc.moveDown();

    // Fixed: Calculate isActive and use proper typing
    treatments.forEach((treatment: any) => {
      // Calculate isActive based on endAt or endTreatmentAt
      const isActive = !treatment.endAt || new Date(treatment.endAt) > new Date();
      
      doc.fontSize(14).text(`Tratamento: ${treatment.id}`); // Fixed: use treatment.id instead of treatmentId
      doc.fontSize(12).text(`Início: ${treatment.startAt.toLocaleDateString()}`);
      doc.text(`Fim: ${treatment.endAt ? treatment.endAt.toLocaleDateString() : 'Em andamento'}`);
      doc.text(`Status: ${isActive ? "Ativo" : "Finalizado"}`);
      doc.moveDown();

      treatment.medications.forEach((med: any) => {
        doc.fontSize(12).text(`- Medicamento: ${med.name}`);
        doc.text(`  Dose: ${med.dose ?? "Não informado"}`);
        doc.text(`  Descrição: ${med.description ?? "Não informada"}`);

        const medNotifications = notifications.filter((n: any) => n.medicationId === med.medicationId);
        if (medNotifications.length > 0) {
          doc.moveDown(0.5).text("  Ocorrências:");
          medNotifications.forEach((n: any) => {
            doc.text(`   • ${new Date(n.alertAt).toLocaleString()}`);
          });
        }

        doc.moveDown();
      });

      doc.moveDown();
    });

    doc.end();
    
    // Wait for the PDF to be fully written
    return new Promise((resolve, reject) => {
      doc.on('end', () => resolve(filePath));
      doc.on('error', reject);
    });
  }
}