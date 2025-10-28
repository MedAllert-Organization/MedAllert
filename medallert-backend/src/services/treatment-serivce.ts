import z from "zod";
import type {
  Treatment,
  TreatmentRepository,
} from "../repositories/treatments.js";
import type { PromiseResult } from "../common/type-helpers.js";
import type { UsersRepository } from "../repositories/users.js";
import { error, ok, t } from "try";
import type { MedicationRepository } from "../repositories/medications.js";

export const TreatmentSchema = z.object({
  name: z.string(),
  description: z.string().nullable().optional(),
  startAt: z.string().transform(s => new Date(s)),
  endAt: z.string().transform(s => new Date(s)).nullable().optional(),
  medicationIds: z.array(z.string()).min(1, "Um tratamento precisa ter pelo menos um medicamento"),
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
    { name, description, startAt, endAt, medicationIds }: TreatmentType & { medicationIds: string[] }
  ): PromiseResult<Treatment> {
    const user = await this.usersRepository.findUser(userId);
    if (!user) return error("User not found!");


    const meds = await this.medicationRepository.findMedications(medicationIds)

    if (meds.length !== medicationIds.length) {
      return error("Um ou mais medicamentos não foram encontrados.");
    }

    if (!medicationIds || medicationIds.length === 0) return error("Um tratamento precisa ter pelo menos um medicamento.");

    const [createdOk, createdErr, createdTreatment] = await t(
      this.treatmentRepository.addTreatment({
        userId,
        name,
        description: description ?? null,
        startAt,
        endAt: endAt ?? null,
        medicationIds,
      }),
    );

    if (!createdOk || !createdTreatment) {
      console.error("Erro Prisma:", createdErr);
      return error("Failed to create treatment");
    }


    return ok(createdTreatment);
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
