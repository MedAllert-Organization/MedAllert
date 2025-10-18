import { z } from "zod";
import type { Annotation, AnnotationRepository } from "../repositories/annotations.js";

const createAnnotationSchema = z.object({
  medicationId: z.string().min(1, "Id é obrigatório"),
  content: z.string().min(1, "Conteúdo é obrigatório"),
});

const updateAnnotationSchema = z.object({
    id: z.string().min(1, "ID da anotação é obrigatório"),
    content: z.string().min(1, "Conteúdo é obrigatório"),
});

export const MedicationIdParamSchema = z.object({
  medicationId: z.string().min(1, "ID da medicação é obrigatório"),
});

export const AnnotationIdParamSchema = z.object({
  id: z.string().min(1, "ID da anotação é obrigatório"),
});

export class AnnotationService {
  constructor(private readonly annotationRepository: AnnotationRepository) {}

  async create_annotation(data: {
    medicationId: string; 
    content: string;
  }): Promise<Annotation | null> {
    const validatedData = createAnnotationSchema.parse(data);
    const annotation = await this.annotationRepository.createAnnotation(validatedData);
    
    if (!annotation) {
      throw new Error("Falha ao criar anotação");
    }
    return annotation;
  }

  async delete_annotation(id: string): Promise<boolean> {
    if (!id) {
      throw new Error("ID da anotação é obrigatório");
    }

    const deleted = await this.annotationRepository.deleteAnnotation(id);
    if (!deleted) {
      throw new Error("Anotação não encontrada para exclusão");
    }
    return true;
  }

  async update_annotation(data: { 
    id: string;
    content: string;
  }): Promise<Annotation | null> {
    const validatedData = updateAnnotationSchema.parse(data);
    
    const updatedAnnotation = await this.annotationRepository.updateAnnotation(validatedData);
    
    if (!updatedAnnotation) {
      throw new Error("Anotação não encontrada para atualização");
    }
    return updatedAnnotation;
  }

  async get_annotation_by_id(id: string): Promise<Annotation> {
    if (!id) {
      throw new Error("ID da anotação é obrigatório");
    }

    const annotation = await this.annotationRepository.findById(id);
    if (!annotation) {
      throw new Error("Anotação não encontrada");
    }
    return annotation;
  }

  async get_annotations_by_medication(medicationId: string): Promise<Annotation[]> {
    if (!medicationId) {
      throw new Error("ID da medicação é obrigatório");
    }
    return await this.annotationRepository.findByMedicationId(medicationId);
  }
}