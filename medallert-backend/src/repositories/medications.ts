import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";

export type Medication = {
  medicationId: string;
  userId: string;
  name: string;
  dose: string | null;
  description: string | null;
  visualTypeId: string | null;
  soundTypeId: string | null;
  alertPeriodInHours: number;
  createdAt: Date;
  updatedAt: Date;
};

export interface MedicationRepository {
  findMedication(id: string): Promise<Medication | null>;
  findAllMedications(userId: string): Promise<Medication[]>;
  addMedication(newMedication: {
    userId: string;
    name: string;
    dose: string | null;
    description: string | null;
    visualTypeId: string | null;
    soundTypeId: string | null;
    alertPeriodInHours: number;
  }): Promise<Medication | null>;
  updateMedication(
    id: string,
    updateMedication: {
      name?: string | null;
      dose?: string | null;
      description?: string | null;
      visualTypeId?: string | null;
      soundTypeId?: string | null;
      alertPeriodInHours?: number | null;
      endTreatmentAt?: Date | null;
    },
  ): Promise<Medication | null>;
  deleteMedication(id: string): Promise<Medication | null>;
}

class PrismaMedicationRepository implements MedicationRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findMedication(id: string): Promise<Medication | null> {
    return this.prisma.medications.findUnique({
      where: { medicationId: id },
    });
  }

  async findAllMedications(userId: string): Promise<Medication[]> {
    return this.prisma.medications.findMany({
      where: { userId },
    });
  }

  async addMedication(newMedication: {
    userId: string;
    name: string;
    dose: string | null;
    description: string | null;
    visualTypeId: string | null;
    soundTypeId: string | null;
    alertPeriodInHours: number;
    endTreatmentAt: Date | null;
  }): Promise<Medication | null> {
    return this.prisma.medications.create({
      data: { ...newMedication },
    });
  }

  async updateMedication(
    id: string,
    updateMedication: {
      name?: string | null;
      dose?: string | null;
      description?: string | null;
      visualTypeId?: string | null;
      soundTypeId?: string | null;
      alertPeriodInHours?: number | null;
      endTreatmentAt?: Date | null;
    },
  ): Promise<Medication | null> {
    const updateData = Object.fromEntries(
      Object.entries(updateMedication).filter(([_, v]) => v !== undefined)
    );

    return this.prisma.medications.update({
      where: { medicationId: id },
      data: updateData,
    });
  }

  async deleteMedication(id: string): Promise<Medication | null> {
    return this.prisma.medications.delete({
      where: { medicationId: id },
    });
  }
}

export const defaultMedicationRepository = new PrismaMedicationRepository(prisma);
