import { Hono } from "hono";
import { ReportService } from "../../services/report-service.js";
import fs from "fs";
import path from "path";
import { defaultTreatmentRepository } from "../../repositories/treatments.js";
import { describeRoute } from "hono-openapi";

const reportRoute = new Hono();
const reportService = new ReportService(defaultTreatmentRepository);

reportRoute.get(
  "/:period",
  describeRoute({
    tags: ["Report"],
    summary: "Gera relatório em PDF dos tratamentos de um usuário",
    description: "Gera um relatório em PDF com base no período solicitado (Weekly ou Monthly) para um usuário específico.",
    parameters: [
      {
        name: "period",
        in: "path",
        required: true,
        schema: { type: "string", enum: ["Weekly", "Monthly"] },
        description: "Período do relatório: 'Weekly' para semanal ou 'Monthly' para mensal",
      },
    ],
    responses: {
      200: {
        description: "Relatório PDF gerado com sucesso",
        content: {
          "application/pdf": {
            schema: { type: "string", format: "binary" },
          },
        },
      },
      400: {
        description: "Parâmetro inválido (period inválido)",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: { type: "string", example: "Período inválido! Use 'Weekly' ou 'Monthly'." },
              },
            },
          },
        },
      },
      500: {
        description: "Erro interno ao gerar relatório",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: { type: "string", example: "Erro interno na tentativa de gerar relatório" },
              },
            },
          },
        },
      },
    },
  }),
  async (c) => {

    try {
      const { period } = c.req.param();
      const userId = c.get("userId" as any);

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