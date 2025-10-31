import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";
import { prisma } from "../infra/prisma/client.js";

export type TreatmentMedication = {
  treatmentId: string;
  medicationId: string;
  dose: string;
  alertPeriodInHours: number;
  lastTaken?: Date | null;
  takenQuantity: number;
  totalQuantity: number;
};

export interface TreatmentMedicationRepository {
  addTreatmentMedications(data: TreatmentMedication[]): Promise<void>;
  getByTreatment(treatmentId: string): Promise<TreatmentMedication[]>;
  updateTreatmentMedication(
    treatmentId: string,
    medicationId: string,
    updateData: Partial<Omit<TreatmentMedication, "treatmentId" | "medicationId">>
  ): Promise<TreatmentMedication | null>;
  deleteTreatmentMedications(treatmentId: string): Promise<void>;
  deleteTreatmentMedication(treatmentId: string, medicationId: string): Promise<void>;
  getByMedication(
  medicationId: string
): Promise<{ id: string; name: string; description: string | null }[]>;

}

class PrismaTreatmentMedicationRepository implements TreatmentMedicationRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async addTreatmentMedications(data: TreatmentMedication[]): Promise<void> {
    if (!data.length) return;

    await this.prisma.treatmentMedication.createMany({
      data: data.map(d => ({
        treatmentId: d.treatmentId,
        medicationId: d.medicationId,
        dose: d.dose,
        alertPeriodInHours: d.alertPeriodInHours,
        lastTaken: d.lastTaken ?? null,
        takenQuantity: d.takenQuantity ?? 0,
        totalQuantity: d.totalQuantity ?? 0,
      })),
    });
  }

  async getByTreatment(treatmentId: string): Promise<TreatmentMedication[]> {
    const records = await this.prisma.treatmentMedication.findMany({
      where: { treatmentId },
    });

    return records.map(r => ({
      treatmentId: r.treatmentId,
      medicationId: r.medicationId,
      dose: r.dose,
      alertPeriodInHours: r.alertPeriodInHours,
      lastTaken: r.lastTaken,
      takenQuantity: r.takenQuantity,
      totalQuantity: r.totalQuantity,
    }));
  }

  async updateTreatmentMedication(
    treatmentId: string,
    medicationId: string,
    updateData: Partial<Omit<TreatmentMedication, "treatmentId" | "medicationId">>
  ): Promise<TreatmentMedication | null> {
    const updated = await this.prisma.treatmentMedication.update({
      where: { treatmentId_medicationId: { treatmentId, medicationId } },
      data: updateData,
    });

    return {
      treatmentId: updated.treatmentId,
      medicationId: updated.medicationId,
      dose: updated.dose,
      alertPeriodInHours: updated.alertPeriodInHours,
      lastTaken: updated.lastTaken,
      takenQuantity: updated.takenQuantity,
      totalQuantity: updated.totalQuantity,
    };
  }

  async deleteTreatmentMedications(treatmentId: string): Promise<void> {
    await this.prisma.treatmentMedication.deleteMany({
      where: { treatmentId },
    });
  }

  async deleteTreatmentMedication(treatmentId: string, medicationId: string): Promise<void> {
    await this.prisma.treatmentMedication.delete({
      where: { treatmentId_medicationId: { treatmentId, medicationId } },
    });
  }

  async getByMedication(medicationId: string): Promise<{ id: string; name: string; description: string | null }[]> {
  const treatments = await this.prisma.treatmentMedication.findMany({
    where: { medicationId },
    select: {
      treatment: {
        select: {
          treatmentId: true,
          name: true,
          description: true,
        },
      },
    },
  });

  return treatments.map(t => ({
    id: t.treatment.treatmentId,
    name: t.treatment.name,
    description: t.treatment.description ?? null,
  }));
}

}

export const defaultTreatmentMedicationRepository = new PrismaTreatmentMedicationRepository(prisma);
