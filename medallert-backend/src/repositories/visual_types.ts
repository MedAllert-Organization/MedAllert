import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";

export type VisualTypes = {
    visual: string;
}

export interface VisualTypesRepository {
    findVisualType(id: string): Promise<VisualTypes | null>;
    findAllVisuals(): Promise<VisualTypes[] | null>
    addVisualType(newVisualType: {
        visual: string;
    }
    ): Promise<VisualTypes | null>;
    updateVisualType(id: string, updateVisualType: {
        visual?: string | null
    }): Promise<VisualTypes | null>;
    deleteVisualType(id: string): Promise<VisualTypes | null>;
}

class PrismaVisualTypesRepository implements VisualTypesRepository {
    constructor(private readonly prisma: PrismaClient) { }

    async findVisualType(id: string): Promise<VisualTypes | null> {
        return prisma.visualTypes.findUnique({
            where: { visualId: id },
        });
    }

    async findAllVisuals(): Promise<VisualTypes[] | null> {
        return this.prisma.visualTypes.findMany();
    }

    async addVisualType(newVisualType: {
        visual: string;
    }): Promise<VisualTypes | null> {
        return await this.prisma.visualTypes.create({
            data: {
                ...newVisualType
            }
        })
    }

    async updateVisualType(id: string, updateVisualType: {
        visual?: string | null;
    }): Promise<VisualTypes | null> {
        const { ...data } = updateVisualType;
        const updateData = Object.fromEntries(
            Object.entries(data).filter(([_, v]) => v !== undefined)
        );
        return this.prisma.visualTypes.update({
            where: { visualId: id },
            data: updateData,
        });
    }

      async deleteVisualType(id: string): Promise<VisualTypes | null> {
            return this.prisma.visualTypes.delete({
                where: { visualId: id }
            })
        }
}

export const defaultVisualTypesRepository = new PrismaVisualTypesRepository(prisma);