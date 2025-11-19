import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { ReportService } from "../../services/report-service.js";
import { defaultTreatmentRepository } from "../../repositories/treatments.js";
import * as fs from "fs";

const reportRoute = new Hono();
const reportService = new ReportService(defaultTreatmentRepository);

reportRoute.get(
  ":/report",
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
      const id = c.get("id" as any);
      const filePath = await reportService.generatePDF(id);    
    }catch(Error){
      console.log("It's not possible to generate pdf file.");
    }   
  }
);