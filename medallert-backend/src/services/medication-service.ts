import z from "zod";
import type { Medication, MedicationRepository } from "../repositories/medications.js";
import type { PromiseResult } from "../common/type-helpers.js";
import type { UsersRepository } from "../repositories/users.js";
import { error, ok, t } from "try";
import type { VisualTypesRepository } from "../repositories/visual_types.js";
import type { SoundTypesRepository } from "../repositories/sound_types.js";

export const MedicationSchema = z.object({
    name: z.string(),
    dose: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    visualTypeId: z.string(),
    soundTypeId: z.string(),
    alertPeriodInHours: z.number(),
    endTreatmentAt: z.date().nullable().optional(),

})

export type MedicationType = z.infer<typeof MedicationSchema>

export class MedicationService {
    constructor (
        private readonly usersRepository: UsersRepository,
        private readonly medicationRepository: MedicationRepository,
        private readonly visualTypesRepository: VisualTypesRepository,
        private readonly soundTypesRepository: SoundTypesRepository
    ) {}

    async getAll(userId: string): PromiseResult<Medication[]> {
        const medications = await this.medicationRepository.findAllMedications(userId);

        return ok(medications);
    }

    async create(userId: string,{
        name,
        dose,
        description,
        visualTypeId,
        soundTypeId,
        alertPeriodInHours,
        endTreatmentAt,
    }: MedicationType): PromiseResult<Medication>{
        const user = await this.usersRepository.findUser(userId);
        if (!user) return error("User not found!");

        const visualType = await this.visualTypesRepository.findVisualType(visualTypeId);
        if (!visualType) return error("Visual type not found");

        const soundType = await this.soundTypesRepository.findSoundType(soundTypeId);
        if (!soundType) return error("Sound type not found");

        const [createdOk, _, createdMedication] = await t(
            this.medicationRepository.addMedication({
                userId,
                name,
                dose: dose ?? null,
                description: description ?? null,
                visualTypeId,
                soundTypeId,
                alertPeriodInHours,
                endTreatmentAt: endTreatmentAt ?? null,
            })
        );

        if (!createdOk || !createdMedication) {
            return error("failed to create medication");
        }

        return ok(createdMedication);
    }
}
