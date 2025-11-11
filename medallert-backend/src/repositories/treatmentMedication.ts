import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";
import { prisma } from "../infra/prisma/client.js";
import { addHours, endOfDay, startOfDay } from "date-fns";

export type TreatmentMedication = {
  updatedAt: Date | null | undefined;
  createdAt: Date | null | undefined;
  treatmentId: string;
  medicationId: string;
  dose: string;
  alertPeriodInHours: number;
  lastTaken?: Date | null;
  nextTakeAt?: Date | null;
  takenQuantity: number;
  totalQuantity: number;
};

export type MedicationProgress = {
  lastTaken?: Date | null;
  takenQuantity: number;
}

export interface TreatmentMedicationRepository {
  findTodayMedicationsByUser(userId: string): Promise<any[]>;
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
  updateProgress(
    treatmentId: string,
    medicationId: string,
    progress: MedicationProgress
  ): Promise<TreatmentMedication | null>;
}

class PrismaTreatmentMedicationRepository implements TreatmentMedicationRepository {
  constructor(private readonly prisma: PrismaClient) { }

  async addTreatmentMedications(data: TreatmentMedication[]): Promise<void> {
    if (!data.length) return;

    await this.prisma.treatmentMedication.createMany({
      data: data.map(d => ({
        treatmentId: d.treatmentId,
        medicationId: d.medicationId,
        dose: d.dose,
        alertPeriodInHours: d.alertPeriodInHours,
        lastTaken: null,
        nextTakeAt: null,
        takenQuantity: 0,
        totalQuantity: d.totalQuantity,
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
      nextTakeAt: r.nextTakeAt,
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
      nextTakeAt: updated.nextTakeAt,
      takenQuantity: updated.takenQuantity,
      totalQuantity: updated.totalQuantity,
    };
  }

  async updateProgress(
    treatmentId: string,
    medicationId: string,
    progress: MedicationProgress
  ): Promise<TreatmentMedication | null> {
    const record = await this.prisma.treatmentMedication.findUnique({
      where: { treatmentId_medicationId: { treatmentId, medicationId } },
    });

    if (!record) return null;

    const nextTakeAt =
      progress.lastTaken && record.alertPeriodInHours
        ? addHours(progress.lastTaken, record.alertPeriodInHours)
        : record.nextTakeAt;

    const updated = await this.prisma.treatmentMedication.update({
      where: { treatmentId_medicationId: { treatmentId, medicationId } },
      data: {
        ...progress,
        nextTakeAt,
      },
    });

    return {
      treatmentId: updated.treatmentId,
      medicationId: updated.medicationId,
      dose: updated.dose,
      alertPeriodInHours: updated.alertPeriodInHours,
      lastTaken: updated.lastTaken,
      nextTakeAt: updated.nextTakeAt,
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

  async findTodayMedicationsByUser(userId: string): Promise<any[]> {
    const now = new Date();
    const todayStart = startOfDay(now);
    const todayEnd = endOfDay(now);

    const treatments = await this.prisma.treatments.findMany({
      where: {
        userId,
        startAt: { lte: todayEnd },
        OR: [{ endAt: null }, { endAt: { gte: todayStart } }],
      },
      include: {
        medications: {
          include: { medication: true },
        },
      },
    });

    return treatments.flatMap(treatment =>
      treatment.medications.map(tm => ({
        treatmentId: tm.treatmentId,
        medicationId: tm.medicationId,
        name: tm.medication.name,
        dose: tm.dose,
        nextTakeAt: tm.nextTakeAt,
        lastTaken: tm.lastTaken,
        totalQuantity: tm.totalQuantity,
        takenQuantity: tm.takenQuantity,
      }))
    );
  }
}

export const defaultTreatmentMedicationRepository = new PrismaTreatmentMedicationRepository(prisma);
