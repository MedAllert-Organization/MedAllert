import { error, ok, t } from "try";
import z from "zod";
import type { PromiseResult } from "../common/type-helpers.js";
import type { MedicationRepository } from "../repositories/medications.js";
import type {TreatmentRepository,Treatment} from "../repositories/treatments.js";
import type { UsersRepository } from "../repositories/users.js";
import type { TreatmentMedicationRepository } from "../repositories/treatmentMedication.js";
import { VisualPatternEnum, VisualSizeEnum, VisualTypeEnum } from "../repositories/visual_types.ts";


export const VisualTypeEnumZod = z.nativeEnum(VisualTypeEnum);
export const VisualSizeEnumZod = z.nativeEnum(VisualSizeEnum);
export const VisualPatternEnumZod = z.nativeEnum(VisualPatternEnum);

export const TreatmentSchema = z.object({
  name: z.string(),
  description: z.string().nullable().optional(),
  startAt: z.string().transform((s) => new Date(s)),
  endAt: z.string().transform((s) => new Date(s)).nullable().optional(),
  medications: z
    .array(
      z.object({
        medicationId: z.string(),
        dose: z.string(),
        alertPeriodInMinutes: z.number(),
        totalQuantity: z.number(),
        visualType: z
          .object({
            visualType: VisualTypeEnumZod,
            size: VisualSizeEnumZod,
            color1: z.string(),
            color2: z.string().optional(),
            pattern: VisualPatternEnumZod,
          })
          .nullable(),
      })
    )
    .min(1, "Um tratamento precisa ter pelo menos um medicamento"),
});


export const TreatmentIdParamSchema = z.object({
  id: z.string().min(1, "ID is required"),
});

export const TreatmentUpdateSchema = TreatmentSchema.partial();

export type TreatmentType = z.infer<typeof TreatmentSchema>;

export class TreatmentService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly treatmentRepository: TreatmentRepository,
    private readonly medicationRepository: MedicationRepository,
    private readonly treatmentMedicationRepository: TreatmentMedicationRepository,
  ) { }

  async getAll(userId: string): PromiseResult<Treatment[]> {
    const treatments = await this.treatmentRepository.findAllTreatments(userId);
    return ok(treatments);
  }

  async get(treatmentId: string): PromiseResult<Treatment> {
    const treatment = await this.treatmentRepository.findTreatment(treatmentId);
    if (!treatment) return error("Treatment not found");

    return ok(treatment);
  }

 async create(
  userId: string,
  {
    name,
    description,
    startAt,
    endAt,
    medications,
  }: {
    name: string;
    description?: string | null;
    startAt: Date;
    endAt?: Date | null;
    medications: {
      medicationId: string;
      dose: string;
      alertPeriodInMinutes: number;
      totalQuantity: number;
      visualType: {
        visualType: string;
        size: string;
        color1: string;
        color2?: string;
        pattern: string;
      } | null;
    }[];
  },
) {
  const user = await this.usersRepository.findUser(userId);
  if (!user) return error("User not found!");

  const meds = await this.medicationRepository.findMedications(
    medications.map((m) => m.medicationId),
  );

  if (meds.length !== medications.length)
    return error("Um ou mais medicamentos não foram encontrados.");

  const medsWithDefaults = medications.map((m) => ({
    ...m,
    lastTaken: null,
    takenQuantity: 0,
  }));

  try {
    const createdTreatment = await this.treatmentRepository.addTreatment({
      userId,
      name,
      description: description ?? null,
      startAt,
      endAt: endAt ?? null,
      medications: medsWithDefaults,
    });

    if (!createdTreatment) {
      return error("Failed to create treatment");
    }

    return ok(createdTreatment);
  } catch (err: any) {
    // Aqui você pode mapear erros específicos do Prisma se quiser
    console.error("Erro Prisma:", err);
    return error(err.message || "Failed to create treatment");
  }
}

  async update(
    treatmentId: string,
    updateData: Partial<TreatmentType>,
  ): PromiseResult<Treatment> {
    const treatment = await this.treatmentRepository.findTreatment(treatmentId);
    if (!treatment) return error("Treatment not found");

    const [updatedOk, _, updatedTreatment] = await t(
      this.treatmentRepository.updateTreatment(treatmentId, { ...updateData }),
    );

    if (!updatedOk || !updatedTreatment)
      return error("Failed to update treatment");

    return ok(updatedTreatment);
  }

  async reset(treatmentId: string) {
    const treatment = await this.treatmentRepository.findTreatment(treatmentId);
    if (!treatment) return error("Treatment not found");

    const [okReset, errReset] = await t(
      this.treatmentMedicationRepository.resetAll(treatmentId),
    );

    if (!okReset) return error("Failed to reset treatment");
    const updated = await this.treatmentRepository.findTreatment(treatmentId);

    return ok(updated);
  }

  async delete(treatmentId: string): PromiseResult<Treatment> {
    const treatment = await this.treatmentRepository.findTreatment(treatmentId);
    if (!treatment) return error("Treatment not found");

    const [deletedOk, _, deletedTreatment] = await t(
      this.treatmentRepository.deleteTreatment(treatmentId),
    );

    if (!deletedOk || !deletedTreatment)
      return error("Failed to delete treatment");

    return ok(deletedTreatment);
  }
}
