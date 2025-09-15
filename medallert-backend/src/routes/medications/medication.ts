import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { defaultMedicationRepository } from "../../repositories/medications.js";
import { defaultSoundTypesRepository } from "../../repositories/sound_types.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import { defaultVisualTypesRepository } from "../../repositories/visual_types.js";
import { MedicationService, MedicationSchema } from "../../services/medication-service.js";

export const medication = new Hono();

const medicationService = new MedicationService(
    defaultUsersRepository,
    defaultMedicationRepository,
    defaultVisualTypesRepository,
    defaultSoundTypesRepository
);

medication.post(
    '/',
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
        const [ok, error, medication] = await medicationService.create(userId, medicationCandidate);

        if (!ok || !medication) {
            return c.json({ success: false, error }, 400);
        }
        return c.json({ success: true, medication }, 201);
    }

);
medication.get(
    '/',
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
    }
);
medication.get('/:id');
medication.put('/:id');
medication.delete('/:id');