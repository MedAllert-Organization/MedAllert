import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { defaultTreatmentRepository } from "../../repositories/treatments.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import { TreatmentIdParamSchema, TreatmentSchema, TreatmentService, TreatmentUpdateSchema } from "../../services/treatment-serivce.js";
import { defaultMedicationRepository } from "../../repositories/medications.js";
export const treatment = new Hono();

const treatmentService = new TreatmentService(
    defaultUsersRepository,
    defaultTreatmentRepository,
    defaultMedicationRepository
);

treatment.post(
    '/',
    describeRoute({
        tags: ["Treatment"],
        description: "Add a new treatment",
        responses: {
            201: { description: "Successful treatment registration" },
            400: { description: "Failed to create treatment" },
        },
    }),
    validator("json", TreatmentSchema),
    async (c) => {
        const userId = c.get("userId" as any);
        const treatmentCandidate = c.req.valid("json");
        const [ok, error, treatment] = await treatmentService.create(userId, treatmentCandidate);

        if (!ok || !treatment) {
            return c.json({ success: false, error }, 400);
        }
        return c.json({ success: true, treatment }, 201);
    }
);

treatment.get(
    '/',
    describeRoute({
        tags: ["Treatment"],
        description: "Get all user treatments",
        responses: {
            200: { description: "Successful getting treatments" },
            400: { description: "Failed to get treatments" },
        },
    }),
    async (c) => {
        const userId = c.get("userId" as any);
        const [ok, error, treatments] = await treatmentService.getAll(userId);

        if (!ok) {
            return c.json({ success: false, error }, 400);
        }
        return c.json({ success: true, treatments }, 200);
    }
);

treatment.get(
    '/:id',
    describeRoute({
        tags: ["Treatment"],
        description: "Get a treatment",
        responses: {
            200: { description: "Successful getting treatment" },
            404: { description: "Treatment not found" },
        },
    }),
    validator("param", TreatmentIdParamSchema),
    async (c) => {
        const treatmentId = c.req.param("id");
        const [ok, error, treatment] = await treatmentService.get(treatmentId);

        if (!ok || !treatment) {
            return c.json({ success: false, error }, 404);
        }

        return c.json({ success: true, treatment }, 200);
    }
);

treatment.put(
    '/:id',
    describeRoute({
        tags: ["Treatment"],
        description: "Update a treatment",
        responses: {
            200: { description: "Treatment updated successfully" },
            400: { description: "Failed to update treatment" },
            404: { description: "Treatment not found" },
        },
    }),
    validator("param", TreatmentIdParamSchema),
    validator("json", TreatmentUpdateSchema),
    async (c) => {
        const { id } = c.req.valid("param");
        const updateData = c.req.valid("json");

        const [ok, error, updatedTreatment] = await treatmentService.update(id, updateData);

        if (!ok || !updatedTreatment) {
            return c.json({ success: false, error }, 404);
        }

        return c.json({ success: true, treatment: updatedTreatment }, 200);
    }
);

treatment.delete(
    '/:id',
    describeRoute({
        tags: ["Treatment"],
        description: "Delete a treatment",
        responses: {
            204: { description: "Treatment deleted successfully" },
            400: { description: "Failed to delete treatment" },
            404: { description: "Treatment not found" },
        },
    }),
    validator("param", TreatmentIdParamSchema),
    async (c) => {
        const { id } = c.req.valid("param");

        const [ok, error] = await treatmentService.delete(id);

        if (!ok) {
            return c.json({ success: false, error }, 404);
        }

        return c.body(null, 204);
    }
);
