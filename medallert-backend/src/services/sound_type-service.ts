import z from "zod";
import type { PromiseResult } from "../common/type-helpers.js";
import type { UsersRepository } from "../repositories/users.js";
import { error, ok, t } from "try";
import type { SoundTypes, SoundTypesRepository } from "../repositories/sound_types.js";

export const SoundTypesSchema = z.object({
    sound: z.string(),
})

export const SoundTypesIdParamSchema = z.object({
    id: z.string().min(1, "ID is required"),
});

export const SoundTypesUpdateSchema = SoundTypesSchema.partial();

export type SoundTypesType = z.infer<typeof SoundTypesSchema>

export class SoundTypesService {
    constructor(
        private readonly soundTypesRepository: SoundTypesRepository,
    ) { }

    async create({
        sound,
    }: SoundTypesType): PromiseResult<SoundTypes> {

        const [createdOk, _, createdSound] = await t(
            this.soundTypesRepository.addSoundType({
                sound,
            })
        );

        if (!createdOk || !createdSound) {
            return error("failed to add sound");
        }

        return ok(createdSound);
    }

    async get(soundId: string): PromiseResult<SoundTypes> {
        const sound = await this.soundTypesRepository.findSoundType(soundId);
        if (!sound) return error("Sound not found");

        return ok(sound);
    }

    async getAll() {
        const [listOk, _, listSound] = await t(
            this.soundTypesRepository.findAllSounds()
        )
        if (!listOk || !listSound) {
            return error("failed to get sounds");
        }

        return ok(listSound);
    }

    async update(soundId: string, updateData: Partial<SoundTypesType>): PromiseResult<SoundTypes> {
        const sound = await this.soundTypesRepository.findSoundType(soundId);
        if (!sound) return error("Sound not found");

        const [updatedOk, _, updatedSound] = await t(
            this.soundTypesRepository.updateSoundType(soundId, { ...updateData })
        );

        if (!updatedOk || !updatedSound) return error("Failed to update sound type");

        return ok(updatedSound);
    }

    async delete(soundId: string): PromiseResult<SoundTypes> {
        const sound = await this.soundTypesRepository.findSoundType(soundId);
        if (!sound) return error("Sound type not found");

        const [deletedOk, _, deletedSound] = await t(
            this.soundTypesRepository.deleteSoundType(soundId)
        );

        if (!deletedOk || !deletedSound) return error("Failed to delete sound type");

        return ok(deletedSound);
    }
}
