import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";

export type Medication = {
    medicationId: string;
    userId: string;
    name: string;
    dose: string | null;
    description: string | null;
    visualTypeId: string;
    soundTypeId: string;
    alertPeriodInHours: number;
    endTreatmentAt: Date | null;
}

export interface MedicationRepository {
    findMedication(id: string): Promise<Medication | null>;
    findAllMedications(userId: string): Promise<Medication[]>;
    addMedication(newMedication: {
        userId: string;
        name: string;
        dose: string | null;
        description: string | null;
        visualTypeId: string;
        soundTypeId: string;
        alertPeriodInHours: number;
        endTreatmentAt: Date | null;}
    ): Promise<Medication | null>;
}

class PrismaMedicationRepository implements MedicationRepository {
    constructor(private readonly prisma: PrismaClient) {}
   
    async findMedication(id: string): Promise<Medication | null> {
        return this.prisma.medications.findUnique({
            where: { 
                medicationId:id 
            },
        });
    }

    async findAllMedications(userId: string): Promise<Medication[]> {
        return this.prisma.medications.findMany({
            where: {
                userId: userId
            }
        });
    }

    async addMedication(newMedication: {
        userId: string;
        name: string;
        dose: string | null;
        description: string | null;
        visualTypeId: string;
        soundTypeId: string;
        alertPeriodInHours: number;
        endTreatmentAt: Date | null;
    }): Promise<Medication | null> {
        return await this.prisma.medications.create({ data: { 
            ...newMedication 
        } })
    }
}

export const defaultMedicationRepository = new PrismaMedicationRepository(prisma);