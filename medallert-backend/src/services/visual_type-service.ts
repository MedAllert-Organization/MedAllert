import z from "zod";
import type { Medication, MedicationRepository } from "../repositories/medications.js";
import type { PromiseResult } from "../common/type-helpers.js";
import type { UsersRepository } from "../repositories/users.js";
import { error, ok, t } from "try";
import type { VisualTypes, VisualTypesRepository } from "../repositories/visual_types.js";

export const VisualTypesSchema = z.object({
    visual: z.string(),
})

export type VisualTypesType = z.infer<typeof VisualTypesSchema>

export class VisualTypesService {
    constructor (
        private readonly usersRepository: UsersRepository,
        private readonly visualTypesRepository: VisualTypesRepository,
    ) {}

    async create({
        visual,
    }: VisualTypesType): PromiseResult<VisualTypes>{

        const [createdOk, _, createdMedication] = await t(
            this.visualTypesRepository.addVisualType({
                visual,
            })
        );

        if (!createdOk || !createdMedication) {
            return error("failed to add visual");
        }

        return ok(createdMedication);
    }
}
