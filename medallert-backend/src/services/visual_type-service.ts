import { error, ok, t } from "try";
import z from "zod";
import type { PromiseResult } from "../common/type-helpers.js";
import { VisualPatternEnum, VisualSizeEnum, VisualTypeEnum, type UpdateVisualTypeDTO, type VisualTypes, type VisualTypesRepository } from "../repositories/visual_types.js";
import type { CreateVisualTypeDTO } from "../common/dto/create-visualTypes.dto.js";


export const VisualTypesSchema = z.object({
  visual: z.string(),
  visualType: z.nativeEnum(VisualTypeEnum),
  size: z.nativeEnum(VisualSizeEnum).optional(),
  color1: z.string(),
  color2: z.string().optional(),
  pattern: z.nativeEnum(VisualPatternEnum).optional(),
  rotation: z.number().optional(),
  opacity: z.number().optional(),
  treatmentMedicationId: z.string(),
});

export const VisualTypesIdParamSchema = z.object({
  id: z.string().min(1, "ID is required"),
});

export const VisualTypesUpdateSchema = VisualTypesSchema.partial();


export class VisualTypesService {
  constructor(private readonly visualTypesRepository: VisualTypesRepository) { }

  async create(newVisual: CreateVisualTypeDTO): PromiseResult<VisualTypes> {
    const [createdOk, _, createdMedication] = await t(
      this.visualTypesRepository.addVisualType(newVisual),
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
    visualId: string,
    updateData: Partial<UpdateVisualTypeDTO>,
  ): PromiseResult<VisualTypes> {
    console.log("updateData", updateData);
    const visual = await this.visualTypesRepository.findVisualType(visualId);
    if (!visual) return error("visual not found");

    const [updatedOk, _, updatedVisual] = await t(
      this.visualTypesRepository.updateVisualType(visualId, { ...updateData }),
    );

    if (!updatedOk || !updatedVisual) return error("Failed to update visual type");

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
