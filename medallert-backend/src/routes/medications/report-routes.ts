import { Hono } from "hono";
import { ReportService } from "../../services/report-service.js";
import fs from "fs";
import path from "path";
import { defaultTreatmentRepository } from "../../repositories/treatments.js";

const reportRoute = new Hono();
const reportService = new ReportService(defaultTreatmentRepository);

reportRoute.get("/:period/:userId", async (c) => {
    
    try {
        const { period, userId } = c.req.param();
        
        if (period !== "Weekly" && period !== "Monthly") {
            return c.json({ 
                error: "Período inválido! Use 'Weekly' ou 'Monthly'." 
            }, 400);
        }

        const filePath = await reportService.generateReport(userId, period);
        
        if (!fs.existsSync(filePath)) {
            return c.json({ error: "Erro ao gerar arquivo PDF" }, 500);
        }

        const fileBuffer = fs.readFileSync(filePath);
        const fileName = `relatorio_tratamentos_${period}_${userId}.pdf`;
        
        const uint8Array = new Uint8Array(fileBuffer);
        
        return c.body(uint8Array, 200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${fileName}"`,
            'Content-Length': fileBuffer.length.toString()
        });
    } catch (error) {
        console.error("Erro ao gerar relatório:", error);
        return c.json({ 
            error: "Erro interno na tentativa de gerar relatório" 
        }, 500);
    }
});
export default reportRoute;