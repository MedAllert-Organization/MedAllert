import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "@prisma/client";

export type Annotation = {
    annotationId: string;
    medicationId: string;
    content: string | null;
    alertAt: Date;
}

export interface AnnotationRepository{
    createAnnotation(newAnnotation: {
        medicationId: string,
        content: string,
        alertAt: Date;
    }): Promise<Annotation|null>;
    
    deleteAnnotation(id: string): Promise<Annotation|null>;
    
    updateAnnotation(id: string, updateAnnotation: {
        content?: string | null;
        alertAt?: Date;
    }): Promise<Annotation|null>;
}

export class PrismaAnnotationRepository implements AnnotationRepository{
    constructor(private readonly prisma: PrismaClient){}

    async createAnnotation(newAnnotation: { 
        medicationId: string; 
        content: string; 
        alertAt: Date;
    }): Promise<Annotation | null> {
        return this.prisma.annotation.create({
            data: {
                medicationId: newAnnotation.medicationId,
                content: newAnnotation.content,
                alertAt: newAnnotation.alertAt,
            }
        });
    }

    async deleteAnnotation(id: string): Promise<Annotation | null> {
        try {
            return await this.prisma.annotation.delete({
                where: { annotationId: id }
            });
        } catch (error) {
            console.error("Erro ao deletar anotação:", error);
            return null;
        }
    }

    async updateAnnotation(id: string, updateAnnotation: { 
        content?: string | null;
        alertAt?: Date;
    }): Promise<Annotation | null> {
        try {
            const dataToUpdate: any = {};
            
            if (updateAnnotation.content !== undefined) {
                dataToUpdate.content = updateAnnotation.content;
            }
            
            if (updateAnnotation.alertAt !== undefined) {
                dataToUpdate.alertAt = updateAnnotation.alertAt;
            }

            return await this.prisma.annotation.update({
                where: { annotationId: id },
                data: dataToUpdate
            });
        } catch (error) {
            console.error("Erro ao atualizar anotação:", error);
            return null;
        }
    }

    async findById(id: string): Promise<Annotation | null> {
        return this.prisma.annotation.findUnique({
            where: { annotationId: id }
        });
    }

    async findByMedicationId(medicationId: string): Promise<Annotation[]> {
        return this.prisma.annotation.findMany({
            where: { medicationId }
        });
    }
}
export const defaultAnnotationRepository = new PrismaAnnotationRepository(prisma);