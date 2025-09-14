import z from "zod";
import type { PromiseResult } from "../common/type-helpers.js";
import type { UsersRepository } from "../repositories/users.js";
import { error, ok, t } from "try";
import type { SoundTypes, SoundTypesRepository } from "../repositories/sound_types.js";

export const SoundTypesSchema = z.object({
    sound: z.string(),
})

export type SoundTypesType = z.infer<typeof SoundTypesSchema>

export class SoundTypesService {
    constructor (
        private readonly usersRepository: UsersRepository,
        private readonly soundTypesRepository: SoundTypesRepository,
    ) {}

    async create({
        sound,
    }: SoundTypesType): PromiseResult<SoundTypes>{

        const [createdOk, _, createdMedication] = await t(
            this.soundTypesRepository.addSoundType({
                sound,
            })
        );

        if (!createdOk || !createdMedication) {
            return error("failed to add sound");
        }

        return ok(createdMedication);
    }
}
