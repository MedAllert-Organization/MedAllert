import { Hono } from "hono";
import { notification } from "./notification.js";
import { describeRoute } from "hono-openapi";
import { MedicationSchema, MedicationService } from "../../services/medication-service.js";
import { validator } from "hono-openapi/zod";
import { defaultUsersRepository } from "../../repositories/users.js";
import { defaultMedicationRepository } from "../../repositories/medications.js";
import { strict } from "node:assert";
import { verifyWithJwks } from "hono/jwt";
import { defaultVisualTypesRepository } from "../../repositories/visual_types.js";
import { defaultSoundTypesRepository } from "../../repositories/sound_types.js";

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
            // Retorna a mensagem de erro para o cliente
            return c.json({ success: false, error }, 400);
        }

        return c.json({ success: true, medication }, 201);

    }

);
medication.get(
    '/',
    describeRoute({
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
medication.route('/notifications', notification);
