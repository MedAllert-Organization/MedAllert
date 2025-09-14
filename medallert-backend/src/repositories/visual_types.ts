import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";

export type VisualTypes = {
    visual: string;
}

export interface VisualTypesRepository {
    findVisualType(id: string): Promise<VisualTypes | null>;
    addVisualType(newVisualType: {
        visual: string;
    }
    ): Promise<VisualTypes | null>;
}

class PrismaVisualTypesRepository implements VisualTypesRepository {
    constructor(private readonly prisma: PrismaClient) {}
   
    async findVisualType(id: string): Promise<VisualTypes | null> {
        return prisma.visualTypes.findUnique({
            where: { visualId:id },
        });
    }

    async addVisualType(newVisualType: {
        visual: string;
    }): Promise<VisualTypes | null> {
        return await this.prisma.visualTypes.create({ data: { 
            ...newVisualType 
        } })
    }
}

export const defaultVisualTypesRepository = new PrismaVisualTypesRepository(prisma);