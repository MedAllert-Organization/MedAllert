import { Hono } from "hono";
import { SoundTypesSchema, SoundTypesService } from "../../services/sound_type-service.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import { defaultSoundTypesRepository } from "../../repositories/sound_types.js";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";


export const soundTypes = new Hono();

const soundTypesService = new SoundTypesService(
    defaultUsersRepository,
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
    validator("json", SoundTypesSchema),
    async (c) => {
        const [ok, error, soundType] = await soundTypesService.getAll();

        if (!ok || !soundType) {
            return c.json({ success: false, error }, 400);
        }
        return c.json({ success: true, soundType }, 201);
    }
);