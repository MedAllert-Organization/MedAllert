import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";

export type Treatment = {
  treatmentId: string;
  userId: string;
  name: string;
  description: string | null;
  startAt: Date;
  endAt: Date | null;
  medications: {
    medicationId: string;
    name: string;
    dose: string;
    alertPeriodInMinutes: number;
    lastTaken: Date | null;
    takenQuantity: number;
    totalQuantity: number;
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
    medications: {
      medicationId: string;
      dose: string;
      alertPeriodInMinutes: number;
      lastTaken?: Date | null;
      takenQuantity?: number;
      totalQuantity?: number;
    }[];
  }): Promise<Treatment | null>;
  updateTreatment(
    id: string,
    updateTreatment: {
      name?: string | null;
      description?: string | null;
      startAt?: Date | null;
      endAt?: Date | null;
    }
  ): Promise<Treatment | null>;
  deleteTreatment(id: string): Promise<Treatment | null>;
  
}

class PrismaTreatmentRepository implements TreatmentRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findTreatment(id: string): Promise<Treatment | null> {
    const treatment = await this.prisma.treatments.findUnique({
      where: { treatmentId: id },
      include: { medications: { include: { medication: true } } },
    });

    if (!treatment) return null;

    return {
      ...treatment,
      medications:
        treatment.medications?.map(tm => ({
          medicationId: tm.medicationId,
          name: tm.medication.name,
          dose: tm.dose,
          alertPeriodInMinutes: tm.alertPeriodInMinutes,
          lastTaken: tm.lastTaken,
          takenQuantity: tm.takenQuantity,
          totalQuantity: tm.totalQuantity,
        })) ?? [],
    };
  }

  async findAllTreatments(userId: string): Promise<Treatment[]> {
    const treatments = await this.prisma.treatments.findMany({
      where: { userId },
      include: { medications: { include: { medication: true } } },
    });

    return treatments.map(treatment => ({
      ...treatment,
      medications:
        treatment.medications?.map(tm => ({
          medicationId: tm.medicationId,
          name: tm.medication.name,
          dose: tm.dose,
          alertPeriodInMinutes: tm.alertPeriodInMinutes,
          lastTaken: tm.lastTaken,
          takenQuantity: tm.takenQuantity,
          totalQuantity: tm.totalQuantity,
        })) ?? [],
    }));
  }

  async addTreatment(newTreatment: {
    userId: string;
    name: string;
    description: string | null;
    startAt: Date;
    endAt: Date | null;
    medications: {
      medicationId: string;
      dose: string;
      alertPeriodInMinutes: number;
      lastTaken?: Date | null;
      takenQuantity?: number;
      totalQuantity?: number;
    }[];
  }): Promise<Treatment | null> {
    if (!newTreatment.medications || newTreatment.medications.length === 0) {
      throw new Error("Um tratamento precisa ter pelo menos um medicamento.");
    }

    const treatment = await this.prisma.treatments.create({
      data: {
        userId: newTreatment.userId,
        name: newTreatment.name,
        description: newTreatment.description,
        startAt: newTreatment.startAt,
        endAt: newTreatment.endAt,
      },
    });

    const treatmentMedsData = newTreatment.medications.map(med => ({
      treatmentId: treatment.treatmentId,
      medicationId: med.medicationId,
      dose: med.dose,
      alertPeriodInMinutes: med.alertPeriodInMinutes,
      lastTaken: med.lastTaken ?? null,
      takenQuantity: med.takenQuantity ?? 0,
      totalQuantity: med.totalQuantity ?? 0,
    }));

    await this.prisma.treatmentMedication.createMany({ data: treatmentMedsData });

    return this.findTreatment(treatment.treatmentId);
  }

  async updateTreatment(
    id: string,
    updateTreatment: {
      name?: string | null;
      description?: string | null;
      startAt?: Date | null;
      endAt?: Date | null;
    }
  ): Promise<Treatment | null> {
    const updateData = Object.fromEntries(
      Object.entries(updateTreatment).filter(([_, v]) => v !== undefined)
    );

    await this.prisma.treatments.update({
      where: { treatmentId: id },
      data: updateData,
    });

    return this.findTreatment(id);
  }

  async deleteTreatment(id: string): Promise<Treatment | null> {
    const treatment = await this.findTreatment(id);
    if (!treatment) return null;

    await this.prisma.treatmentMedication.deleteMany({ where: { treatmentId: id } });
    await this.prisma.treatments.delete({ where: { treatmentId: id } });

    return treatment;
  }
}

export const defaultTreatmentRepository = new PrismaTreatmentRepository(prisma);
