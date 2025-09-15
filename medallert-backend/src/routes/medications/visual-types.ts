import { Hono } from "hono";
import { defaultUsersRepository } from "../../repositories/users.js";
import { VisualTypesSchema, VisualTypesService } from "../../services/visual_type-service.js";
import { defaultVisualTypesRepository } from "../../repositories/visual_types.js";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";

export const visualTypes = new Hono();

const visualTypesService = new VisualTypesService(
    defaultUsersRepository,
    defaultVisualTypesRepository,
);

 visualTypes.post(
     '/',
     describeRoute({
        tags: ["Visual Types"],
         description: "Add a new visual",
         responses: {
             201: {
                 description: "Successful visual registration",
             },
             400: {
                 description: "failed to create visual",
             },
         },
     }),
     validator("json", VisualTypesSchema),
     async (c) => {
         const userId = c.get("userId" as any);
         const visualTypeCandidate = c.req.valid("json");
         const [ok, error, visualType] = await visualTypesService.create(visualTypeCandidate);
 
         if (!ok || !visualType) {
             return c.json({ success: false, error }, 400);
         }
         return c.json({ success: true, visualType: visualType }, 201);
     }
 );
 
 visualTypes.get(
     '/',
     describeRoute({
        tags: ["Visual Types"],
         description: "List visuals",
         responses: {
             201: {
                 description: "Successful visual list",
             },
             400: {
                 description: "failed list visual",
             },
         },
     }),
     validator("json", VisualTypesSchema),
     async (c) => {
         const [ok, error, visualType] = await visualTypesService.getAll();
 
         if (!ok || !visualType) {
             return c.json({ success: false, error }, 400);
         }
         return c.json({ success: true, visualType }, 201);
     }
 );