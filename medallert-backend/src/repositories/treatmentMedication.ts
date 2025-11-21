import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";
import { prisma } from "../infra/prisma/client.js";
import { addMinutes, endOfDay, startOfDay } from "date-fns";
import { defaultUsersRepository, type UsersRepository } from "./users.js";
import { th } from "date-fns/locale";
import { defaultTreatmentRepository, type TreatmentRepository } from "./treatments.js";

export type TreatmentMedication = {
  updatedAt: Date | null | undefined;
  createdAt: Date | null | undefined;
  treatmentId: string;
  medicationId: string;
  dose: string;
  alertPeriodInMinutes: number;
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
  resetAll(treatmentId: string): Promise<void>;

}

class PrismaTreatmentMedicationRepository implements TreatmentMedicationRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly userRepository: UsersRepository,
    private readonly treatmentRepository: TreatmentRepository) { }

  async addTreatmentMedications(data: TreatmentMedication[]): Promise<void> {
    if (!data.length) return;

    await this.prisma.treatmentMedication.createMany({
      data: data.map(d => ({
        treatmentId: d.treatmentId,
        medicationId: d.medicationId,
        dose: d.dose,
        alertPeriodInMinutes: d.alertPeriodInMinutes,
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
      alertPeriodInMinutes: r.alertPeriodInMinutes,
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
      alertPeriodInMinutes: updated.alertPeriodInMinutes,
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

    if (progress.takenQuantity > record.totalQuantity) throw new Error("Taken quantity cannot exceed total quantity.");

    const nextTakeAt =
      progress.lastTaken && record.alertPeriodInMinutes
        ? addMinutes(progress.lastTaken, record.alertPeriodInMinutes)
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
      alertPeriodInMinutes: updated.alertPeriodInMinutes,
      lastTaken: updated.lastTaken,
      nextTakeAt: updated.nextTakeAt,
      takenQuantity: updated.takenQuantity,
      totalQuantity: updated.totalQuantity,
    };
  }

  async resetAll(treatmentId: string): Promise<void> {
    await this.prisma.treatmentMedication.updateMany({
      where: { treatmentId },
      data: {
        lastTaken: null,
        nextTakeAt: null,
        takenQuantity: 0,
      },
    });
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

  async findTodayMedicationsByUser(userId: string): Promise<any> {
    const user = await this.userRepository.findUser(userId);
    const timezone = user?.timezoneId
      ? await this.prisma.timezone.findUnique({ where: { id: user.timezoneId } })
      : null;

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

    const medications = treatments.flatMap(treatment =>
      treatment.medications
        .filter(tm => tm.takenQuantity <= tm.totalQuantity)
        .map(tm => ({
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

    return {
      timezone,
      medications,
    };
  }
}

export const defaultTreatmentMedicationRepository = new PrismaTreatmentMedicationRepository(prisma, defaultUsersRepository, defaultTreatmentRepository);
