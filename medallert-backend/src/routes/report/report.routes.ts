import { Hono } from "hono";
import { reportService } from "../../services/report.service.js";
import { file } from "pdfkit";

const reportRoute = new Hono();
const ReportService = new reportService();

reportRoute.get("/:period/:userId",async (c)=> {
    try{
        const {period,userId} = c.req.param();
        if(period !== "weekly" && period !== "mouthly"){
            return c.json({error: "Período inválido! Use 'weekly' ou 'mouthly'. "},400);
        }
        const filePath = await reportService.generateReport(userId,period);
        return c.json({
            message: "relatório gerado com sucesso!",
            file: filePath
        });
    }catch(error){
        console.error("Erro ao gerar relatório:",error);
        return c.json({error: "Erro interno na tentativa de gerar relatório"},500);
    }
});
export default reportRoute;