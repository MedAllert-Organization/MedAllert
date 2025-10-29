import { error, ok, t } from "try";
import z from "zod";
import type { PromiseResult } from "../common/type-helpers.js";
import type {
  Medication,
  MedicationRepository,
} from "../repositories/medications.js";
import type { UsersRepository } from "../repositories/users.js";
import type {
  VisualTypes,
  VisualTypesRepository,
} from "../repositories/visual_types.js";

export const VisualTypesSchema = z.object({
  visual: z.string(),
});

export const VisualTypesIdParamSchema = z.object({
  id: z.string().min(1, "ID is required"),
});

export const VisualTypesUpdateSchema = VisualTypesSchema.partial();

export type VisualTypesType = z.infer<typeof VisualTypesSchema>;

export class VisualTypesService {
  constructor(private readonly visualTypesRepository: VisualTypesRepository) {}

  async create({ visual }: VisualTypesType): PromiseResult<VisualTypes> {
    const [createdOk, _, createdMedication] = await t(
      this.visualTypesRepository.addVisualType({
        visual,
      }),
    );

    if (!createdOk || !createdMedication) {
      return error("failed to add visual");
    }

    return ok(createdMedication);
  }

  async getAll() {
    const [listOk, _, listVisual] = await t(
      this.visualTypesRepository.findAllVisuals(),
    );
    if (!listOk || !listVisual) {
      return error("failed to get visuals");
    }

    return ok(listVisual);
  }

  async get(visualId: string): PromiseResult<VisualTypes> {
    const visual = await this.visualTypesRepository.findVisualType(visualId);
    if (!visual) return error("Visual not found");

    return ok(visual);
  }

  async update(
    visulaId: string,
    updateData: Partial<VisualTypesType>,
  ): PromiseResult<VisualTypes> {
    const visual = await this.visualTypesRepository.findVisualType(visulaId);
    if (!visual) return error("visual not found");

    const [updatedOk, _, updatedVisual] = await t(
      this.visualTypesRepository.updateVisualType(visulaId, { ...updateData }),
    );

    if (!updatedOk || !updatedVisual)
      return error("Failed to update visual type");

    return ok(updatedVisual);
  }

  async delete(visualId: string): PromiseResult<VisualTypes> {
    const visual = await this.visualTypesRepository.findVisualType(visualId);
    if (!visual) return error("Visual type not found");

    const [deletedOk, _, deletedVisual] = await t(
      this.visualTypesRepository.deleteVisualType(visualId),
    );

    if (!deletedOk || !deletedVisual)
      return error("Failed to delete visula type");

    return ok(deletedVisual);
  }
}
