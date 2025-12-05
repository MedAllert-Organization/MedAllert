import { jest } from "@jest/globals";
import type { Treatment, TreatmentRepository } from "../../repositories/treatments.js";
import type { VisualPatternEnum, VisualSizeEnum } from "../../infra/prisma/generated/prisma/index.js";
import type { VisualTypeEnum, VisualTypes } from "../../repositories/visual_types.js";

export class MockTreatmentRepository implements TreatmentRepository {
  treatments: Treatment[] = [];

  findTreatment = jest.fn(async (id: string): Promise<Treatment | null> => {
    return this.treatments.find((t) => t.treatmentId === id) || null;
  });

  findAllTreatments = jest.fn(async (userId: string): Promise<Treatment[]> => {
    return this.treatments.filter((t) => t.userId === userId);
  });

  addTreatment = jest.fn(async (newTreatment: {
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
  }): Promise<Treatment | null> => {
    const treatment: Treatment = {
      treatmentId: `treatment-${this.treatments.length + 1}`,
      userId: newTreatment.userId,
      name: newTreatment.name,
      description: newTreatment.description,
      startAt: newTreatment.startAt,
      endAt: newTreatment.endAt,
      medications: newTreatment.medications.map(m => ({
          medicationId: m.medicationId,
          name: `medication-name-${m.medicationId}`,
          dose: m.dose,
          alertPeriodInMinutes: m.alertPeriodInMinutes,
          lastTaken: m.lastTaken ?? null,
          takenQuantity: m.takenQuantity ?? 0,
          totalQuantity: 0,
          visualType: m.visualType ? {
            visualId: `visual-${Math.random()}`,
            createdAt: new Date(),
            updatedAt: new Date(),
            ...m.visualType,
          } as VisualTypes : null,
      })),
    };
    this.treatments.push(treatment);
    return treatment;
  });

  updateTreatment = jest.fn(async (
    id: string,
    updateData: {
      name?: string | null;
      description?: string | null;
      startAt?: Date | null;
      endAt?: Date | null;
    },
  ): Promise<Treatment | null> => {
    const treatmentIndex = this.treatments.findIndex((t) => t.treatmentId === id);
    if (treatmentIndex === -1) {
      return null;
    }
    
    const cleanUpdateData = Object.fromEntries(
      Object.entries(updateData).filter(([, v]) => v !== undefined),
    );

    this.treatments[treatmentIndex] = { ...this.treatments[treatmentIndex], ...cleanUpdateData };
    return this.treatments[treatmentIndex];
  });

  deleteTreatment = jest.fn(async (id: string): Promise<Treatment | null> => {
    const treatmentIndex = this.treatments.findIndex((t) => t.treatmentId === id);
    if (treatmentIndex === -1) {
      return null;
    }
    const [deletedTreatment] = this.treatments.splice(treatmentIndex, 1);
    return deletedTreatment;
  });
}