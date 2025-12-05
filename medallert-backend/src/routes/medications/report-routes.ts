import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { ReportService } from "../../services/report-service.js";
import { defaultTreatmentRepository } from "../../repositories/treatments.js";

export const reportRoute = new Hono();
const reportService = new ReportService(defaultTreatmentRepository);

reportRoute.get(
  "/:id/report",
  describeRoute({
    tags: ["Report"],
    description: "Gerar relatório PDF",
    responses: {
      200: { description: "PDF generated" },
      400: { description: "Error" },
    },
  }),
  async (c) => {
    try {
      const id = c.req.param("id");
      if (!id) return c.json({ error: "Missing id" }, 400);

      const pdfBuffer = await reportService.generatePDF(id);

      return new Response(new Uint8Array(pdfBuffer), {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="relatorio.pdf"`,
        },
      });

    } catch (err) {
      console.error(err);
      return c.json({ error: "Error generating PDF" }, 400);
    }
  }
);
