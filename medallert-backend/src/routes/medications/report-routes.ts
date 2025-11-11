import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import type { TreatmentRepository } from "../../repositories/treatments.js";
import type { TreatmentMedicationRepository } from "../../repositories/treatmentMedication.js";
import { ReportService } from "../../services/report-service.js";

export function createReportRoute(
  treatmentRepository: TreatmentRepository,
  treatmentMedicationRepository: TreatmentMedicationRepository
) {
  const reportRoute = new Hono();
  const reportService = new ReportService(
    treatmentRepository,
    treatmentMedicationRepository
  );

  reportRoute.get(
    "/:period",
    describeRoute({
      tags: ["Report"],
      summary: "Gera relatório em PDF dos tratamentos de um usuário",
      description:
        "Gera um relatório em PDF com base no período solicitado (Weekly ou Monthly) para um usuário específico.",
      parameters: [
        {
          name: "period",
          in: "path",
          required: true,
          schema: { type: "string", enum: ["Weekly", "Monthly"] },
          description:
            "Período do relatório: 'Weekly' para semanal ou 'Monthly' para mensal",
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
                  error: {
                    type: "string",
                    example: "Período inválido! Use 'Weekly' ou 'Monthly'.",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Tratamento não encontrado",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: { type: "string", example: "Tratamento não encontrado" },
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
                  error: {
                    type: "string",
                    example: "Erro interno na tentativa de gerar relatório",
                  },
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
          return c.json(
            { error: "Período inválido! Use 'Weekly' ou 'Monthly'." },
            400
          );
        }

        const pdfBytes = await reportService.generatePDF(userId, period);
        const fileName = `relatorio_tratamentos_${period}_${userId}_${Date.now()}.pdf`;

        return c.body(pdfBytes.buffer as ArrayBuffer, 200, {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${fileName}"`,
        });
      } catch (error) {
        console.error("Erro ao gerar relatório:", error);

        const errorMessage =
          error instanceof Error
            ? error.message
            : "Erro interno na tentativa de gerar relatório";

        if (errorMessage.includes("Cannot find")) {
          return c.json({ error: "Tratamento não encontrado" }, 404);
        }

        return c.json({ error: errorMessage }, 500);
      }
    }
  );

  return reportRoute;
}
