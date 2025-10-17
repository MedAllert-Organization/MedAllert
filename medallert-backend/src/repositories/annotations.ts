import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "@prisma/client";

export type Annotation = {
  annotationId: string;
  medicationId: string;
  content: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export interface AnnotationRepository {
  createAnnotation(newAnnotation: {
    medicationId: string;
    content: string;
  }): Promise<Annotation | null>;

  deleteAnnotation(id: string): Promise<Annotation | null>;

  updateAnnotation(id: string, updateAnnotation: {
    content?: string | null;
  }): Promise<Annotation | null>;
}

export class PrismaAnnotationRepository implements AnnotationRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createAnnotation(newAnnotation: {
    medicationId: string;
    content: string;
  }): Promise<Annotation | null> {
    return this.prisma.annotations.create({
      data: {
        medicationId: newAnnotation.medicationId,
        content: newAnnotation.content,
      },
    });
  }

  async deleteAnnotation(id: string): Promise<Annotation | null> {
    try {
      return await this.prisma.annotations.delete({
        where: { annotationId: id },
      });
    } catch (error) {
      console.error("Erro ao deletar anotação:", error);
      return null;
    }
  }

  async updateAnnotation(id: string, updateAnnotation: {
    content?: string | null;
  }): Promise<Annotation | null> {
    try {
      const dataToUpdate: any = {};

      if (updateAnnotation.content !== undefined) {
        dataToUpdate.content = updateAnnotation.content;
      }

      return await this.prisma.annotations.update({
        where: { annotationId: id },
        data: dataToUpdate,
      });
    } catch (error) {
      console.error("Erro ao atualizar anotação:", error);
      return null;
    }
  }

  async findById(id: string): Promise<Annotation | null> {
    return this.prisma.annotations.findUnique({
      where: { annotationId: id },
    });
  }

  async findByMedicationId(medicationId: string): Promise<Annotation[]> {
    return this.prisma.annotations.findMany({
      where: { medicationId },
    });
  }
}
export const defaultAnnotationRepository = new PrismaAnnotationRepository(prisma);