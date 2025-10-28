import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";
import { medication } from "../routes/medications/medication.js";

export type Treatment = {
    treatmentId: string;
    userId: string;
    name: string;
    description: string | null;
    startAt: Date;
    endAt: Date | null;
    medications?: {
        medicationId: string;
        name: string;
        dose: string | null;
    }[];
};


export interface TreatmentRepository {
    findTreatment(id: string): Promise<Treatment | null>;
    findAllTreatments(userId: string): Promise<Treatment[]>;
    addTreatment(newTreatment: {
        userId: string;
        name: string;
        description: string | null;
        startAt: Date;
        endAt: Date | null;
        medicationIds: string[];
    }): Promise<Treatment | null>;
    updateTreatment(id: string, updateTreatment: {
        name?: string | null;
        description?: string | null;
        startAt?: Date | null;
        endAt?: Date | null;
    }): Promise<Treatment | null>;
    deleteTreatment(id: string): Promise<Treatment | null>;
}

class PrismaTreatmentRepository implements TreatmentRepository {
    constructor(private readonly prisma: PrismaClient) { }

    async findTreatment(id: string): Promise<Treatment | null> {
        return this.prisma.treatments.findUnique({
            where: { treatmentId: id },
            include: { medications: true,} 
        });
    }

    async findAllTreatments(userId: string): Promise<Treatment[]> {
        return this.prisma.treatments.findMany({
            where: { userId },

        });
    }

    async addTreatment(newTreatment: {
        userId: string;
        name: string;
        description: string | null;
        startAt: Date;
        endAt: Date | null;
        medicationIds: string[];
    }): Promise<Treatment | null> {
        if (!newTreatment.medicationIds || newTreatment.medicationIds.length === 0) {
            throw new Error("Um tratamento precisa ter pelo menos um medicamento.");
        }

        return this.prisma.treatments.create({
            data: {
                userId: newTreatment.userId,
                name: newTreatment.name,
                description: newTreatment.description,
                startAt: newTreatment.startAt,
                endAt: newTreatment.endAt,
                medications: {
                    connect: newTreatment.medicationIds.map(id => ({ medicationId: id })),
                },
            },
            include: { medications: true },
        });
    }


    async updateTreatment(id: string, updateTreatment: {
        name?: string | null;
        description?: string | null;
        startAt?: Date | null;
        endAt?: Date | null;
    }): Promise<Treatment | null> {
        const updateData = Object.fromEntries(
            Object.entries(updateTreatment).filter(([_, v]) => v !== undefined)
        );

        return this.prisma.treatments.update({
            where: { treatmentId: id },
            data: updateData,
        });
    }

    async deleteTreatment(id: string): Promise<Treatment | null> {
        return this.prisma.treatments.delete({
            where: { treatmentId: id },
        });
    }
}

export const defaultTreatmentRepository = new PrismaTreatmentRepository(prisma);