import { Hono } from "hono";
import { z } from "zod";
import { validator } from "hono-openapi/zod";
import { ProgressMedicationSchema, TreatmentMedicationService } from "../../services/treatmentMedication-service.js";
import { defaultTreatmentMedicationRepository } from "../../repositories/treatmentMedication.js";
import { describeRoute } from "hono-openapi";
import { describe } from "node:test";

export const treatmentMedication = new Hono();
const treatmentMedicationService = new TreatmentMedicationService(defaultTreatmentMedicationRepository);

treatmentMedication.get(
  "/today",
  describeRoute({
    tags: ["Treatment Medication"],
    description: "Get medications that need to be taken today",
    responses: {
      200: { description: "Successful getting today's medications" },
      400: { description: "Failed to get today's medications" },
    },
  }),
  async (c) => {
    const userId = c.get("userId" as any);
    const [ok, error, medications] =
      await treatmentMedicationService.getTodayMedications(userId);

    if (!ok) {
      return c.json({ success: false, error }, 400);
    }

    return c.json({ success: true, medications }, 200);
  },
);

treatmentMedication.patch(
  "/update-progress",
  describeRoute({
    tags: ["Treatment Medication"],
    description: "Update the medication progress",
    responses: {
      200: { description: "Successful updated the progress of the medication" },
      400: { description: "Failed to update the progress of the medication" },
    }
  }),
  validator("json", ProgressMedicationSchema),
  async (c) => {
    const userId = c.get("userId" as any);
    const progressCandidate = c.req.valid("json");
    const [ok, error, progress] = await treatmentMedicationService.updateProgress(progressCandidate)
    
    if (!ok || !progress) return c.json({ success: false, error }, 400);

    return c.json({ success: true, progress }, 201);
  }
);
