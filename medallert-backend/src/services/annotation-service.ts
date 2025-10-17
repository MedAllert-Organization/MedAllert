import { z } from "zod";
import type { Annotation, AnnotationRepository } from "../repositories/annotations.js";

const createAnnotationSchema = z.object({
    content: z.string().min(1, "Conteúdo é obrigatório"),
});

const updateAnnotationSchema = z.object({
    content: z.string().min(1, "Conteúdo é obrigatório").optional(),
});

export class AnnotationService {
    constructor(
        private readonly annotationRepository: AnnotationRepository
    ) {}

    async create_annotation(
        medicationId: string,
        data: {
            content: string;
        }
    ): Promise<Annotation> {
        if (!medicationId) {
            throw new Error("Não foi possível encontrar a medicação");
        }

        const validatedData = createAnnotationSchema.parse(data);

        const annotation = await this.annotationRepository.createAnnotation({
            medicationId,
            content: validatedData.content,
        });

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

    async update_annotation(
        id: string,
        data: {
            content?: string;
        }
    ): Promise<Annotation> {
        if (!id) {
            throw new Error("ID da anotação é obrigatório");
        }

        const validatedData = updateAnnotationSchema.parse(data);

        const updatedAnnotation = await this.annotationRepository.updateAnnotation(
            id,
            validatedData
        );

        if (!updatedAnnotation) {
            throw new Error("Anotação não encontrada para atualização");
        }

        return updatedAnnotation;
    }

    async get_annotation_by_id(id: string): Promise<Annotation> {
        if (!id) {
            throw new Error("ID da anotação é obrigatório");
        }

        const annotation = await (this.annotationRepository as any).findById?.(id);
        if (!annotation) {
            throw new Error("Anotação não encontrada");
        }

        return annotation;
    }

    async get_annotations_by_medication(medicationId: string): Promise<Annotation[]> {
        if (!medicationId) {
            throw new Error("ID da medicação é obrigatório");
        }

        return await (this.annotationRepository as any).findByMedicationId?.(medicationId) || [];
    }
}