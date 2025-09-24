import z from "zod";
import type { Medication, MedicationRepository } from "../repositories/medications.js";
import type { PromiseResult } from "../common/type-helpers.js";
import type { UsersRepository } from "../repositories/users.js";
import { error, ok, t } from "try";
import type { VisualTypesRepository } from "../repositories/visual_types.js";
import type { SoundTypesRepository } from "../repositories/sound_types.js";
import type { TreatmentRepository } from "../repositories/treatments.js";

export const MedicationSchema = z.object({
    name: z.string(),
    dose: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    treatmentId: z.string().nullable().optional(),
    visualTypeId: z.string(),
    soundTypeId: z.string(),
    alertPeriodInHours: z.number(),
    endTreatmentAt: z.date().nullable().optional(),

})

export const MedicationIdParamSchema = z.object({
    id: z.string().min(1, "ID is required"),
});

export const MedicationUpdateSchema = MedicationSchema.partial();

export type MedicationType = z.infer<typeof MedicationSchema>

export class MedicationService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly medicationRepository: MedicationRepository,
        private readonly treatmentRepository: TreatmentRepository,
        private readonly visualTypesRepository: VisualTypesRepository,
        private readonly soundTypesRepository: SoundTypesRepository
    ) { }

    async getAll(userId: string): PromiseResult<Medication[]> {
        const medications = await this.medicationRepository.findAllMedications(userId);

        return ok(medications);
    }

    async get(medicationId: string): PromiseResult<Medication> {
        const medication = await this.medicationRepository.findMedication(medicationId);
        if (!medication) return error("Medication not found");

        return ok(medication);
    }

    async create(userId: string, {
        name,
        dose,
        description,
        treatmentId,
        visualTypeId,
        soundTypeId,
        alertPeriodInHours,
        endTreatmentAt,
    }: MedicationType): PromiseResult<Medication> {
        const user = await this.usersRepository.findUser(userId);
        if (!user) return error("User not found!");

        if (treatmentId) {
            const treatment = await this.treatmentRepository.findTreatment(treatmentId);
            if (!treatment) return error("Treatment not found");
        }

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

        if (!createdOk || !createdMedication) return error("failed to create medication");

        return ok(createdMedication);
    }

    async update(
        medicationId: string,
        updateData: Partial<MedicationType>
    ): PromiseResult<Medication> {
        const medication = await this.medicationRepository.findMedication(medicationId);
        if (!medication) return error("Medication not found");

        if (updateData.treatmentId) {
            const treatment = await this.treatmentRepository.findTreatment(updateData.treatmentId);
            if (!treatment) return error("Treatment not found");
        }

        if (updateData.visualTypeId) {
            const visualType = await this.visualTypesRepository.findVisualType(updateData.visualTypeId);
            if (!visualType) return error("Visual type not found");
        }

        if (updateData.soundTypeId) {
            const soundType = await this.soundTypesRepository.findSoundType(updateData.soundTypeId);
            if (!soundType) return error("Sound type not found");
        }

        const [updatedOk, _, updatedMedication] = await t(
            this.medicationRepository.updateMedication(medicationId, { ...updateData })
        );

        if (!updatedOk || !updatedMedication) return error("Failed to update medication");

        return ok(updatedMedication);
    }

    async delete(medicationId: string): PromiseResult<Medication> {
        const medication = await this.medicationRepository.findMedication(medicationId);
        if (!medication) return error("Medication not found");

        const [deletedOk, _, deletedMedication] = await t(
            this.medicationRepository.deleteMedication(medicationId)
        );

        if (!deletedOk || !deletedMedication) return error("Failed to delete medication");


        return ok(deletedMedication);
    }
}
