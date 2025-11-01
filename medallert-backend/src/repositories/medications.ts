import { endOfDay, startOfDay } from "date-fns";
import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";

export type Medication = {
  medicationId: string;
  userId: string;
  name: string;
  description: string | null;
  visualTypeId: string | null;
  soundTypeId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export interface MedicationRepository {
  findMedications(medicationIds: string[]): Promise<Medication[]>;
  findMedication(id: string): Promise<Medication | null>;
  findTodayMedication(id: string): Promise<Medication[]>;
  findAllMedications(userId: string): Promise<Medication[]>;
  addMedication(newMedication: {
    userId: string;
    name: string;
    description: string | null;
    visualTypeId: string | null;
    soundTypeId: string | null;
  }): Promise<Medication | null>;
  updateMedication(
    id: string,
    updateMedication: {
      name?: string | null;
      description?: string | null;
      visualTypeId?: string | null;
      soundTypeId?: string | null;
      endTreatmentAt?: Date | null;
    },
  ): Promise<Medication | null>;
  deleteMedication(id: string): Promise<Medication | null>;
}

class PrismaMedicationRepository implements MedicationRepository {
  constructor(private readonly prisma: PrismaClient) { }

  async findTodayMedication(userId: string): Promise<any[]> {
    const now = new Date();
    const todayStart = startOfDay(now);
    const todayEnd = endOfDay(now);

    const treatments = await this.prisma.treatments.findMany({
      where: {
        userId,
        startAt: { lte: todayEnd },
        OR: [{ endAt: null }, { endAt: { lte: todayStart } }],
      },
      include: {
        medications: {
          include: {
            medication: true,
          },
        },
      },
    });

    const medications = treatments.flatMap((treatment) =>
      treatment.medications.map((tm) => ({
        medicationId: tm.medication.medicationId,
        treatmentId: tm.treatmentId,
        userId: tm.medication.userId,
        name: tm.medication.name,
        description: tm.medication.description,
        visualTypeId: tm.medication.visualTypeId,
        soundTypeId: tm.medication.soundTypeId,
        dose: tm.dose,
        alertPeriodInHours: tm.alertPeriodInHours,
        lastTaken: tm.lastTaken,
        takenQuantity: tm.takenQuantity,
        totalQuantity: tm.totalQuantity,
        createdAt: tm.medication.createdAt,
        updatedAt: tm.medication.updatedAt,
      }))
    );

    return medications;
  }

  findMedications(medicationIds: string[]): Promise<Medication[]> {
    return this.prisma.medications.findMany({
      where: { medicationId: { in: medicationIds } },
    });
  }

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
    description: string | null;
    visualTypeId: string | null;
    soundTypeId: string | null;
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
      description?: string | null;
      visualTypeId?: string | null;
      soundTypeId?: string | null;
    },
  ): Promise<Medication | null> {
    const updateData = Object.fromEntries(
      Object.entries(updateMedication).filter(([_, v]) => v !== undefined),
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

export const defaultMedicationRepository = new PrismaMedicationRepository(
  prisma,
);
