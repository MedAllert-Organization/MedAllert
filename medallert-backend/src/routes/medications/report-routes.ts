import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { ReportService } from "../../services/report-service.js";
import { defaultTreatmentRepository } from "../../repositories/treatments.js";
import { error } from "node:console";

export const reportRoute = new Hono();
const reportService = new ReportService(defaultTreatmentRepository);

reportRoute.get(
  ":id/report",
  describeRoute({
    tags: ["Report"],
    description: "Gerar relatório sobre tratamento",
    responses:{
      200:{
        description:"Successful in generate report"
      },
      400:{
        description:"Failed in generate report"
      },
    },
  }),
  async(c)=>{
    try{
      const id = c.req.param("id");
      const pdfStream = await reportService.generatePDF(id);
      
      if(!id) return c.json({error:"Invalid or Missing id"},400);

      return new Response(pdfStream as any,{
        status: 200,
        headers:{
          "Content-type":"application/pdf",
          "Content-Disposition":`attachment; filename="relatorio.pdf"`
        }
      });
    }catch(error){
      console.error(error);
      return c.json({error:"It's not possible to generate pdf file"},400);
    }   
  }
);