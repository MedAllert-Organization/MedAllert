import { Hono } from "hono";
import { SoundTypesIdParamSchema, SoundTypesSchema, SoundTypesService, SoundTypesUpdateSchema } from "../../services/sound_type-service.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import { defaultSoundTypesRepository } from "../../repositories/sound_types.js";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";


export const soundTypes = new Hono();

const soundTypesService = new SoundTypesService(
    defaultSoundTypesRepository,
);

soundTypes.post(
    '/',
    describeRoute({
        tags: ["Sound Types"],
        description: "Add a new sound",
        responses: {
            201: {
                description: "Successful sound registration",
            },
            400: {
                description: "failed to create sound",
            },
        },
    }),
    validator("json", SoundTypesSchema),
    async (c) => {
        const userId = c.get("userId" as any);
        const soundTypeCandidate = c.req.valid("json");
        const [ok, error, soundType] = await soundTypesService.create(soundTypeCandidate);

        if (!ok || !soundType) {
            return c.json({ success: false, error }, 400);
        }
        return c.json({ success: true, soundType }, 201);
    }
);

soundTypes.get(
    '/',
    describeRoute({
        tags: ["Sound Types"],
        description: "List sounds",
        responses: {
            201: {
                description: "Successful sound list",
            },
            400: {
                description: "failed list sound",
            },
        },
    }),
    async (c) => {
        const [ok, error, soundType] = await soundTypesService.getAll();

        if (!ok || !soundType) {
            return c.json({ success: false, error }, 400);
        }
        return c.json({ success: true, soundType }, 201);
    }
);

soundTypes.get(
    '/:id',
    describeRoute({
        tags: ["Sound Types"],
        description: "Get a sound type",
        responses: {
            201: { description: "Successful getting sound type", },
            400: { description: "failed to get sound type", },
        },
    }),
    validator("param", SoundTypesIdParamSchema),
    async (c) => {
        const soundTypeId = c.req.param("id");
        const [ok, error, soundType] = await soundTypesService.get(soundTypeId);

        if (!ok || !soundType) {
            return c.json({ success: false, error }, 404);
        }

        return c.json({ success: true, soundType }, 200);
    }
);

soundTypes.put(
    '/:id',
    describeRoute({
        tags: ["Sound Types"],
        description: "Update a Sound Type",
        responses: {
            200: { description: "Sound type updated successfully" },
            400: { description: "Failed to update sound type" },
            404: { description: "Sound type not found" },
        },
    }),
    validator("param", SoundTypesIdParamSchema),
    validator("json", SoundTypesUpdateSchema),
    async (c) => {
        const { id } = c.req.valid("param");
        const updateData = c.req.valid("json");

        const [ok, error, updatedSoundType] = await soundTypesService.update(id, updateData);

        if (!ok || !updatedSoundType) {
            return c.json({ success: false, error }, 404);
        }

        return c.json({ success: true, soundTypes: updatedSoundType }, 200);
    }
);

soundTypes.delete(
    '/:id',
    describeRoute({
        tags: ["Sound Types"],
        description: "Delete a sound type",
        responses: {
            204: { description: "Sound type deleted successfully" },
            400: { description: "Failed to delete sound type" },
            404: { description: "Sound type not found" },
        },
    }),
    validator("param", SoundTypesIdParamSchema),
    async (c) => {
        const { id } = c.req.valid("param");
        const [ok, error] = await soundTypesService.delete(id);

        if (!ok) return c.json({ success: false, error }, 404);

        return c.body(null, 204);
    }
);