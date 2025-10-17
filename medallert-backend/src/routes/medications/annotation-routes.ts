import z from "zod";
import { Hono } from "hono";
import { validator } from "hono-openapi/zod";
import { describeRoute } from "hono-openapi";
import { AnnotationService } from "../../services/annotation-service.js";
import { defaultAnnotationRepository } from "../../repositories/annotations.js";

export const annotation = new Hono();
const annotationService = new AnnotationService(defaultAnnotationRepository);

const createAnnotationSchema = z.object({
  content: z.string().min(1, "Conteúdo é obrigatório"),
});

const updateAnnotationSchema = z.object({
  content: z.string().min(1, "Conteúdo é obrigatório").optional(),
});

annotation.get(
  '/medication/:medicationId',
  describeRoute({
    tags: ['Annotations'],
    summary: 'Listar anotações de um medicamento',
    description: 'Retorna todas as anotações de um medicamento específico',
  }),
  async (c) => {
    const medicationId = c.req.param('medicationId');
    
    try {
      const annotations = await annotationService.get_annotations_by_medication(medicationId);
      return c.json(annotations);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 400);
    }
  }
);

annotation.get(
  '/:id',
  describeRoute({
    tags: ['Annotations'],
    summary: 'Buscar anotação por ID',
  }),
  async (c) => {
    const id = c.req.param('id');
    
    try {
      const annotation = await annotationService.get_annotation_by_id(id);
      return c.json(annotation);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 404);
    }
  }
);

annotation.post(
  '/medication/:medicationId',
  validator('json', createAnnotationSchema),
  describeRoute({
    tags: ['Annotations'],
    summary: 'Criar nova anotação',
  }),
  async (c) => {
    const medicationId = c.req.param('medicationId');
    const data = c.req.valid('json');

    try {
      const newAnnotation = await annotationService.create_annotation(medicationId, data);
      return c.json(newAnnotation, 201);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 400);
    }
  }
);

annotation.put(
  '/:id',
  validator('json', updateAnnotationSchema),
  describeRoute({
    tags: ['Annotations'],
    summary: 'Atualizar anotação existente',
  }),
  async (c) => {
    const id = c.req.param('id');
    const data = c.req.valid('json');

    try {
      const updatedAnnotation = await annotationService.update_annotation(id, data);
      return c.json(updatedAnnotation);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 400);
    }
  }
);

annotation.delete(
  '/:id',
  describeRoute({
    tags: ['Annotations'],
    summary: 'Deletar anotação por ID',
  }),
  async (c) => {
    const id = c.req.param('id');

    try {
      await annotationService.delete_annotation(id);
      return c.body(null, 204);
    } catch (error) {
      return c.json({ error: (error as Error).message }, 404);
    }
  }
);
export default annotation;