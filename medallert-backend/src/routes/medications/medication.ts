import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { defaultMedicationRepository } from "../../repositories/medications.js";
import { defaultSoundTypesRepository } from "../../repositories/sound_types.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import { defaultVisualTypesRepository } from "../../repositories/visual_types.js";
import {
  MedicationIdParamSchema,
  MedicationSchema,
  MedicationService,
  MedicationUpdateSchema,
} from "../../services/medication-service.js";

export const medication = new Hono();

const medicationService = new MedicationService(
  defaultUsersRepository,
  defaultMedicationRepository,
  defaultVisualTypesRepository,
  defaultSoundTypesRepository,
);

medication.post(
  "/",
  describeRoute({
    tags: ["Medication"],
    description: "Add a new medication",
    responses: {
      201: {
        description: "Successful medication registration",
      },
      400: {
        description: "failed to create medication",
      },
    },
  }),
  validator("json", MedicationSchema),
  async (c) => {
    const userId = c.get("userId" as any);
    const medicationCandidate = c.req.valid("json");
    const [ok, error, medication] = await medicationService.create(
      userId,
      medicationCandidate,
    );

    if (!ok || !medication) {
      return c.json({ success: false, error }, 400);
    }
    return c.json({ success: true, medication }, 201);
  },
);

medication.get(
  "/",
  describeRoute({
    tags: ["Medication"],
    description: "Get all user medications",
    responses: {
      201: {
        description: "Successful getting medications",
      },
      400: {
        description: "failed to get medications",
      },
    },
  }),
  async (c) => {
    const userId = c.get("userId" as any);
    const [ok, error, medications] = await medicationService.getAll(userId);

    if (!ok) {
      return c.json({ success: false, error }, 400);
    }
    return c.json({ success: true, medications }, 200);
  },
);

medication.get(
  "/today",
  describeRoute({
    tags: ["Medication"],
    description: "Get medications that need to be taken today",
    responses: {
      200: { description: "Successful getting today's medications" },
      400: { description: "Failed to get today's medications" },
    },
  }),
  async (c) => {
    const userId = c.get("userId" as any);
    const [ok, error, medications] =
      await medicationService.getTodayMedications(userId);

    if (!ok) {
      return c.json({ success: false, error }, 400);
    }

    return c.json({ success: true, medications }, 200);
  },
);

medication.get(
  "/:id",
  describeRoute({
    tags: ["Medication"],
    description: "Get a medication",
    responses: {
      201: {
        description: "Successful getting medication",
      },
      400: {
        description: "failed to get medication",
      },
    },
  }),
  validator("param", MedicationIdParamSchema),
  async (c) => {
    const medicationId = c.req.param("id");
    const [ok, error, medication] = await medicationService.get(medicationId);

    if (!ok || !medication) {
      return c.json({ success: false, error }, 404);
    }

    return c.json({ success: true, medication }, 200);
  },
);

medication.put(
  "/:id",
  describeRoute({
    tags: ["Medication"],
    description: "Update a medication",
    responses: {
      200: { description: "Medication updated successfully" },
      400: { description: "Failed to update medication" },
      404: { description: "Medication not found" },
    },
  }),
  validator("param", MedicationIdParamSchema),
  validator("json", MedicationUpdateSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const updateData = c.req.valid("json");

    const [ok, error, updatedMedication] = await medicationService.update(
      id,
      updateData,
    );

    if (!ok || !updatedMedication) {
      return c.json({ success: false, error }, 404);
    }

    return c.json({ success: true, medication: updatedMedication }, 200);
  },
);

medication.delete(
  "/:id",
  describeRoute({
    tags: ["Medication"],
    description: "Delete a medication",
    responses: {
      204: { description: "Medication deleted successfully" },
      400: { description: "Failed to delete medication" },
      404: { description: "Medication not found" },
    },
  }),
  validator("param", MedicationIdParamSchema),
  async (c) => {
    const { id } = c.req.valid("param");

    const [ok, error] = await medicationService.delete(id);

    if (!ok) {
      return c.json({ success: false, error }, 404);
    }

    return c.body(null, 204);
  },
);
