import z from "zod";
import type {
  Medication,
  MedicationRepository,
} from "../repositories/medications.js";
import type { PromiseResult } from "../common/type-helpers.js";
import type { UsersRepository } from "../repositories/users.js";
import { error, ok, t } from "try";
import type { VisualTypesRepository } from "../repositories/visual_types.js";
import type { SoundTypesRepository } from "../repositories/sound_types.js";
import { startOfDay, endOfDay, addHours, isWithinInterval } from "date-fns";

export const MedicationSchema = z.object({
  name: z.string(),
  dose: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  visualTypeId: z.string().nullable().optional(),
  soundTypeId: z.string().nullable().optional(),
  alertPeriodInHours: z.number(),
});

export const MedicationIdParamSchema = z.object({
  id: z.string().min(1, "ID is required"),
});

export const MedicationUpdateSchema = MedicationSchema.partial();

export type MedicationType = z.infer<typeof MedicationSchema>;

export class MedicationService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly medicationRepository: MedicationRepository,
    private readonly visualTypesRepository: VisualTypesRepository,
    private readonly soundTypesRepository: SoundTypesRepository,
  ) {}

  async getAll(userId: string): PromiseResult<Medication[]> {
    const medications = await this.medicationRepository.findAllMedications(userId);
    return ok(medications);
  }

  async getTodayMedications(userId: string): PromiseResult<Medication[]> {
    const now = new Date();
    const start = startOfDay(now);
    const end = endOfDay(now);

    if (!start || !end) return ok([]);

    const medications = await this.medicationRepository.findAllMedications(userId);

    const medsToday = medications.filter((med) => {
      if (!med.alertPeriodInHours) return true; 

      let next = med.createdAt ? new Date(med.createdAt) : null;
      const last = end;

      if (!next) return false;

      while (next <= last && next <= end) {
        if (isWithinInterval(next, { start, end })) return true;
        next = addHours(next, med.alertPeriodInHours);
      }

      return false;
    });

    return ok(medsToday);
  }

  async get(medicationId: string): PromiseResult<Medication> {
    const medication = await this.medicationRepository.findMedication(medicationId);
    if (!medication) return error("Medication not found");
    return ok(medication);
  }

  async create(
    userId: string,
    {
      name,
      dose,
      description,
      visualTypeId,
      soundTypeId,
      alertPeriodInHours,
    }: MedicationType,
  ): PromiseResult<Medication> {
    const user = await this.usersRepository.findUser(userId);
    if (!user) return error("User not found!");

    if (visualTypeId) {
      const visualType = await this.visualTypesRepository.findVisualType(visualTypeId);
      if (!visualType) return error("Visual type not found");
    }

    if (soundTypeId) {
      const soundType = await this.soundTypesRepository.findSoundType(soundTypeId);
      if (!soundType) return error("Sound type not found");
    }

    type OptionalId = string;

    const [createdOk, _, createdMedication] = await t(
      this.medicationRepository.addMedication({
        userId,
        name,
        dose: dose ?? null,
        description: description ?? null,
        visualTypeId: visualTypeId as OptionalId | null,
        soundTypeId: soundTypeId as OptionalId | null,
        alertPeriodInHours,
      }),
    );

    if (!createdOk || !createdMedication)
      return error("Failed to create medication");

    return ok(createdMedication);
  }

  async update(
    medicationId: string,
    updateData: Partial<MedicationType>,
  ): PromiseResult<Medication> {
    const medication = await this.medicationRepository.findMedication(medicationId);
    if (!medication) return error("Medication not found");

    if (updateData.visualTypeId) {
      const visualType = await this.visualTypesRepository.findVisualType(updateData.visualTypeId);
      if (!visualType) return error("Visual type not found");
    }

    if (updateData.soundTypeId) {
      const soundType = await this.soundTypesRepository.findSoundType(updateData.soundTypeId);
      if (!soundType) return error("Sound type not found");
    }

    const [updatedOk, _, updatedMedication] = await t(
      this.medicationRepository.updateMedication(medicationId, {
        ...updateData,
      }),
    );

    if (!updatedOk || !updatedMedication)
      return error("Failed to update medication");

    return ok(updatedMedication);
  }

  async delete(medicationId: string): PromiseResult<Medication> {
    const medication = await this.medicationRepository.findMedication(medicationId);
    if (!medication) return error("Medication not found");

    const [deletedOk, _, deletedMedication] = await t(
      this.medicationRepository.deleteMedication(medicationId),
    );

    if (!deletedOk || !deletedMedication)
      return error("Failed to delete medication");

    return ok(deletedMedication);
  }
}
