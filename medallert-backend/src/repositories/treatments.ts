import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient, VisualPatternEnum, VisualSizeEnum } from "../infra/prisma/generated/prisma/index.js";
import type { VisualTypeEnum, VisualTypes } from "./visual_types.js";

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
    visualType: VisualTypes | null;
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
      visualType: {
        visualType: VisualTypeEnum;
        size: VisualSizeEnum;
        color1: string;
        color2?: string;
        pattern: VisualPatternEnum;
      } | null;
    }[];
  }): Promise<Treatment | null>;
  updateTreatment(
    id: string,
    updateTreatment: {
      name?: string | null;
      description?: string | null;
      startAt?: Date | null;
      endAt?: Date | null;
    },
  ): Promise<Treatment | null>;
  deleteTreatment(id: string): Promise<Treatment | null>;
}

export class PrismaTreatmentRepository implements TreatmentRepository {
  constructor(private readonly prisma: PrismaClient) { }

  async findTreatment(id: string): Promise<Treatment | null> {
    const treatment = await this.prisma.treatments.findUnique({
      where: { treatmentId: id },
      include: {
        medications: { include: { medication: true, visualType: true } },
      },
    });

    if (!treatment) return null;

    return {
      ...treatment,
      medications:
        treatment.medications?.map((tm) => ({
          medicationId: tm.medicationId,
          name: tm.medication.name,
          dose: tm.dose,
          alertPeriodInMinutes: tm.alertPeriodInMinutes,
          lastTaken: tm.lastTaken,
          takenQuantity: tm.takenQuantity,
          totalQuantity: tm.totalQuantity,
          visualType: tm.visualType,
        })) ?? [],
    } as Treatment;
  }

  async findAllTreatments(userId: string): Promise<Treatment[]> {
    const treatments = await this.prisma.treatments.findMany({
      where: { userId },
      include: {
        medications: { include: { medication: true, visualType: true } },
      },
    });

    return treatments.map((treatment) => ({
      ...treatment,
      medications:
        treatment.medications?.map((tm) => ({
          medicationId: tm.medicationId,
          name: tm.medication.name,
          dose: tm.dose,
          alertPeriodInMinutes: tm.alertPeriodInMinutes,
          lastTaken: tm.lastTaken,
          takenQuantity: tm.takenQuantity,
          totalQuantity: tm.totalQuantity,
          visualType: tm.visualType,
        })) ?? [],
    })) as Treatment[];
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
    visualType: {
      visualType: VisualTypeEnum;
      size: VisualSizeEnum;
      color1: string;
      color2?: string;
      pattern: VisualPatternEnum;
    } | null;
  }[];
}): Promise<Treatment | null> {
  const treatmentId = await this.prisma.$transaction(async (tx) => {
    const treatment = await tx.treatments.create({
      data: {
        userId: newTreatment.userId,
        name: newTreatment.name,
        description: newTreatment.description,
        startAt: newTreatment.startAt,
        endAt: newTreatment.endAt,
      },
    });

    for (const med of newTreatment.medications) {
      let visualTypeId: string | undefined = undefined;

      if (med.visualType) {
        const newVisualType = await tx.visualTypes.create({
          data: {
            visualType: med.visualType.visualType,
            size: med.visualType.size,
            color1: med.visualType.color1,
            color2: med.visualType.color2,
            pattern: med.visualType.pattern,
          },
        });

        visualTypeId = newVisualType.visualId;
      }

      await tx.treatmentMedication.create({
        data: {
          treatmentId: treatment.treatmentId,
          medicationId: med.medicationId,
          dose: med.dose,
          alertPeriodInMinutes: med.alertPeriodInMinutes,
          lastTaken: med.lastTaken ?? null,
          takenQuantity: med.takenQuantity ?? 0,
          totalQuantity: med.totalQuantity ?? 0,
          visualTypeId: visualTypeId ?? null,
        },
      });
    }

    return treatment.treatmentId;
  });

  return this.findTreatment(treatmentId);
}



  async updateTreatment(
    id: string,
    updateTreatment: {
      name?: string | null;
      description?: string | null;
      startAt?: Date | null;
      endAt?: Date | null;
    },
  ): Promise<Treatment | null> {
    const updateData = Object.fromEntries(
      Object.entries(updateTreatment).filter(([_, v]) => v !== undefined),
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

    await this.prisma.treatmentMedication.deleteMany({
      where: { treatmentId: id },
    });
    await this.prisma.treatments.delete({ where: { treatmentId: id } });

    return treatment;
  }
}

export const defaultTreatmentRepository = new PrismaTreatmentRepository(prisma);