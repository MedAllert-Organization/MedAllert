import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { defaultUsersRepository } from "../../repositories/users.js";
import { defaultVisualTypesRepository } from "../../repositories/visual_types.js";
import {
  VisualTypesIdParamSchema,
  VisualTypesSchema,
  VisualTypesService,
} from "../../services/visual_type-service.js";

export const visualTypes = new Hono();

const visualTypesService = new VisualTypesService(defaultVisualTypesRepository);

visualTypes.post(
  "/",
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
    const [ok, error, visualType] =
      await visualTypesService.create(visualTypeCandidate);

    if (!ok || !visualType) {
      return c.json({ success: false, error }, 400);
    }
    return c.json({ success: true, visualType: visualType }, 201);
  },
);

visualTypes.get(
  "/",
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
  async (c) => {
    const [ok, error, visualType] = await visualTypesService.getAll();

    if (!ok || !visualType) {
      return c.json({ success: false, error }, 400);
    }
    return c.json({ success: true, visualType }, 201);
  },
);

visualTypes.get(
  "/:id",
  describeRoute({
    tags: ["Visual Types"],
    description: "Get a visual type",
    responses: {
      201: { description: "Successful getting visual type" },
      400: { description: "failed to get sound type" },
    },
  }),
  validator("param", VisualTypesIdParamSchema),
  async (c) => {
    const visualTypeId = c.req.param("id");
    const [ok, error, visualType] = await visualTypesService.get(visualTypeId);

    if (!ok || !visualType) {
      return c.json({ success: false, error }, 404);
    }

    return c.json({ success: true, visualType: visualType }, 200);
  },
);

visualTypes.put(
  "/:id",
  describeRoute({
    tags: ["Visual Types"],
    description: "Update a Visual Type",
    responses: {
      200: { description: "visual type updated successfully" },
      400: { description: "Failed to update visual type" },
      404: { description: "visual type not found" },
    },
  }),
  validator("param", VisualTypesIdParamSchema),
  validator("json", VisualTypesSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const updateData = c.req.valid("json");

    const [ok, error, updatedVisualType] = await visualTypesService.update(
      id,
      updateData,
    );

    if (!ok || !updatedVisualType) {
      return c.json({ success: false, error }, 404);
    }

    return c.json({ success: true, visualTypes: updatedVisualType }, 200);
  },
);

visualTypes.delete(
  "/:id",
  describeRoute({
    tags: ["Visual Types"],
    description: "Delete a visual type",
    responses: {
      204: { description: "Visual type deleted successfully" },
      400: { description: "Failed to delete visual type" },
      404: { description: "Visual type not found" },
    },
  }),
  validator("param", VisualTypesIdParamSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const [ok, error] = await visualTypesService.delete(id);

    if (!ok) return c.json({ success: false, error }, 404);

    return c.body(null, 204);
  },
);
