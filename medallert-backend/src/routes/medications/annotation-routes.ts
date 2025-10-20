import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { z } from "zod";
import { defaultAnnotationRepository } from "../../repositories/annotations.js";
import {
  AnnotationIdParamSchema,
  AnnotationService,
  MedicationIdParamSchema,
} from "../../services/annotation-service.js";

export const annotation = new Hono();
const annotationService = new AnnotationService(defaultAnnotationRepository);

const createAnnotationSchema = z.object({
  medicationId: z.string().min(1, "Conteúdo é obrigatório"),
  content: z.string().min(1, "Conteúdo é obrigatório"),
});

const updateAnnotationSchema = z.object({
  id: z.string().min(1, "ID da anotação é obrigatório"),
  content: z.string().min(1, "Conteúdo é obrigatório"),
});

annotation.post(
  "/",
  validator("json", createAnnotationSchema),
  describeRoute({
    tags: ["Annotations"],
    summary: "Criar uma nova anotação",
  }),
  async (c) => {
    const data = c.req.valid("json");
    try {
      const newAnnotation = await annotationService.create_annotation(data);
      return c.json(newAnnotation, 201);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 400);
    }
  },
);

annotation.put(
  "/",
  validator("json", updateAnnotationSchema),
  describeRoute({
    tags: ["Annotations"],
    summary: "Atualizar anotação existente",
  }),
  async (c) => {
    const data = c.req.valid("json");
    try {
      const updatedAnnotation = await annotationService.update_annotation(data);
      return c.json(updatedAnnotation);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 400);
    }
  },
);

annotation.get(
  "/medication/:medicationId",
  validator("param", MedicationIdParamSchema),
  describeRoute({
    tags: ["Annotations"],
    summary: "Listar anotações de um medicamento",
  }),
  async (c) => {
    const { medicationId } = c.req.valid("param");

    try {
      const annotations =
        await annotationService.get_annotations_by_medication(medicationId);
      return c.json(annotations);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 400);
    }
  },
);

annotation.get(
  "/:id",
  validator("param", AnnotationIdParamSchema),
  describeRoute({
    tags: ["Annotations"],
    summary: "Buscar anotação por ID",
  }),
  async (c) => {
    const { id } = c.req.valid("param");

    try {
      const annotation = await annotationService.get_annotation_by_id(id);
      return c.json(annotation);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 404);
    }
  },
);

annotation.delete(
  "/:id",
  validator("param", AnnotationIdParamSchema),
  describeRoute({
    tags: ["Annotations"],
    summary: "Deletar anotação por ID",
  }),
  async (c) => {
    const { id } = c.req.valid("param");

    try {
      await annotationService.delete_annotation(id);
      return c.body(null, 204);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 404);
    }
  },
);
export default annotation;
