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
    alertAt: z.string().datetime({ message: "alertAt deve ser uma data ISO válida" })
    .transform(str => new Date(str)),
})

const updateAnnotationSchema = z.object({
  content: z.string().min(1, "Conteúdo é obrigatório").optional(),
  alertAt: z.string().datetime({ message: "alertAt deve ser uma data ISO válida" })
    .transform(str => new Date(str)).optional(),
});

annotation.get(
  '/medication/:medicationId',
  describeRoute({
    tags: ['Annotations'],
    summary: 'Listar anotações de um medicamento',
    description: 'Retorna todas as anotações de um medicamento específico',
    responses: {
      200: {
        description: 'Lista de anotações',
      },
      400: {
        description: 'Erro na requisição',
      }
    }
  }),
  async (c) => {
    const medicationId = c.req.param('medicationId');
    
    try {
      const annotations = await annotationService.get_annotations_by_medication(medicationId);
      return c.json(annotations);
    } catch (error) {
      return c.json({ 
        error: (error as Error).message 
      }, 400);
    }
  }
);

annotation.get(
  '/:id',
  describeRoute({
    tags: ['Annotations'],
    summary: 'Buscar anotação por ID',
    description: 'Retorna uma anotação específica pelo seu ID',
    responses: {
      200: {
        description: 'Anotação encontrada',
      },
      404: {
        description: 'Anotação não encontrada',
      }
    }
  }),
  async (c) => {
    const id = c.req.param('id');
    
    try {
      const annotation = await annotationService.get_annotation_by_id(id);
      return c.json(annotation);
    } catch (error) {
      return c.json({ 
        error: (error as Error).message 
      }, 404);
    }
  }
);

annotation.post(
  '/medication/:medicationId',
  validator('json', createAnnotationSchema),
  describeRoute({
    tags: ['Annotations'],
    summary: 'Criar nova anotação',
    description: 'Cria uma nova anotação para um medicamento',
    responses: {
      201: {
        description: 'Anotação criada com sucesso',
      },
      400: {
        description: 'Dados inválidos',
      }
    }
  }),
  async (c) => {
    const medicationId = c.req.param('medicationId');
    const data = c.req.valid('json');
    
    try {
      const newAnnotation = await annotationService.create_annotation(medicationId, data);
      return c.json(newAnnotation, 201);
    } catch (error) {
      return c.json({ 
        error: (error as Error).message 
      }, 400);
    }
  }
);

annotation.put(
  '/:id',
  validator('json', updateAnnotationSchema),
  describeRoute({
    tags: ['Annotations'],
    summary: 'Atualizar anotação',
    description: 'Atualiza uma anotação existente',
    responses: {
      200: {
        description: 'Anotação atualizada com sucesso',
      },
      400: {
        description: 'Dados inválidos ou anotação não encontrada',
      }
    }
  }),
  async (c) => {
    const id = c.req.param('id');
    const data = c.req.valid('json');
    
    try {
      const updatedAnnotation = await annotationService.update_annotation(id, data);
      return c.json(updatedAnnotation);
    } catch (error) {
      return c.json({ 
        error: (error as Error).message 
      }, 400);
    }
  }
);

annotation.delete(
  '/:id',
  describeRoute({
    tags: ['Annotations'],
    summary: 'Deletar anotação',
    description: 'Remove uma anotação pelo seu ID',
    responses: {
      204: {
        description: 'Anotação deletada com sucesso',
      },
      404: {
        description: 'Anotação não encontrada',
      }
    }
  }),
  async (c) => {
    const id = c.req.param('id');
    
    try {
      await annotationService.delete_annotation(id);
      return c.body(null, 204);
    } catch (error) {
      return c.json({ 
        error: (error as Error).message 
      }, 404);
    }
  }
);
export default annotation;