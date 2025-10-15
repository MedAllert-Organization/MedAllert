import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "@prisma/client";

export type Annotation = {
    annotationId: string;
    medicationId: string;
    content: string | null;
    alertAt: Date
}

export interface AnnotationRepository{
    createAnnotation(newAnnotation: {
        medicationId: string,
        content: string,
        alertAt: Date
    }): Promise<Annotation|null>;
    deleteAnnotation(id: string): Promise<Annotation|null>;
    updateAnnotation(id: string,updateAnnotation:{
        content: string | null;
    }): Promise<Annotation|null>;
}

export class PrismaAnnotationRepository implements AnnotationRepository{
    constructor(private readonly prisma: PrismaClient){}

    createAnnotation(newAnnotation: { medicationId: string; content: string; alertAt: Date; }): Promise<Annotation | null> {
        return this.prisma.annotations.create({
            data:{
                ...newAnnotation
            }
        })
    }

    deleteAnnotation(id: string): Promise<Annotation | null> {
        return this.prisma.annotations.delete({
            where:{ annotationId: id }
        })
    }

    updateAnnotation(id: string, updateAnnotation: { content: string | null; }): Promise<Annotation | null> {
        const { ...data } = updateAnnotation;
        const updateData = Object.fromEntries(
            Object.entries(data)
        );

        return this.prisma.annotations.update({
            where: { annotationId: id },
            data: updateData
        });
    }
}

export const defaultAnnotationRepository = new PrismaAnnotationRepository(prisma);