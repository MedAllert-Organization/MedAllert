import PDFDocument, { end, moveDown } from "pdfkit";
import { prisma } from "../infra/prisma/client.js";
import { treatment } from "../routes/medications/treatment.js";
import { medication } from "../routes/medications/medication.js";
import fs from "fs";
import path from "path";

export class reportService{
  static generateReport: any;
  async generateReport(userId: string,period: "Weakly"|"Mouthly"): Promise<string>{
    const now = new Date();
    const startDate = new Date();
    const doc = new PDFDocument();

    if(period ==="Weakly"){
      startDate.setDate(now.getDate()-7);
    }else if(period === "Mouthly"){
      startDate.setDate(now.getDate()-1);
    }

    // View in DataBase
    const treatments = await prisma.treatments.findMany({
      where:{
        userId,
        OR:[
          {startAt:{lte: now},endAt:{gte: startDate}},
          {startAt:{gte: startDate,lte: now}}
        ]
      },
      include:{
        medication: true
      },
    });
    const medicationIds = treatments.flapMap(t => t.medications.map(m=>m.medicationIds));
    const notifications = await prisma.notifications({
      where:{
        medicationId: {in: medicationIds},
        alertAt:{
          gte: startDate,
          lte: now
        },
      },
      orderBy: {alertAt: "asc"},
    });

    // Document
    const reportsDir = path.resolve("reports");
    if(!fs.existsSync(reportsDir)){
      fs.mkdirSync(reportsDir);
    }
    const filePath = path.join(reportsDir,`treatment-report-${userId}-${period}.pdf`);

    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(20).text("Relatório do Tratamento", {align: "center"});
    doc.moveDown()

    doc.fontSize(14).text(`Usuário: ${userId}`);
    doc.text(`Período: ${startDate.toLocaleDateString()} - ${now.toLocaleDateString()}`);
    doc.moveDown();

    treatments.forEach((treatment) => {
        doc.fontSize(14).text(`Tratamento: ${treatment.treatmentId}`);
        doc.fontSize(12).text(`Início: ${treatment.startAt}`);
        doc.text(`Fim: ${treatment.endAt}`);
        doc.text(`Status: ${treatment.isActive ? "Ativo" : "Finalizado"}`);
        doc.moveDown();

        treatment.medications.forEach((med) => {
          doc.fontSize(12).text(`- Medicamento: ${med.name}`);
          doc.text(`  Dose: ${med.dose ?? "Não informado"}`);
          doc.text(`  Descrição: ${med.description ?? "Não informada"}`);

          const medNotifications = notifications.filter(n => n.medicationId === med.medicationId);
          if (medNotifications.length > 0) {
            doc.moveDown(0.5).text("  Ocorrências:");
            medNotifications.forEach(n => {
              doc.text(`   • ${new Date(n.alertAt).toLocaleString()}`);
            });
          }

          doc.moveDown();
        });

        doc.moveDown();
      });
    doc.end();
    return filePath;
  }
}