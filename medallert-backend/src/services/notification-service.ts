import z from "zod";
import type { Notification } from "../repositories/notification.js";
import type { NotificationRepository } from "../repositories/notification.js";
import type { PromiseResult } from "../common/type-helpers.js";
import type { MedicationRepository } from "../repositories/medications.js";
import type { SoundTypesRepository } from "../repositories/sound_types.js";
import { error, ok, t } from "try";

export const NotificationSchema = z.object({
    notificationId: z.string(),
    medicationId: z.string(),
    soundId: z.string(),
    name: z.string(),
    alertAt: z.date(),
});

export const NotificationUpdateSchema = NotificationSchema.partial();

export const NotificationIdParamSchema = z.object({
    id: z.string().min(1),
});

export type NotificationType = z.infer<typeof NotificationSchema>

export class NotificationService {
    constructor(
        private readonly notificationRepository: NotificationRepository,
        private readonly medicationRepository: MedicationRepository,
        private readonly soundTypesRepository: SoundTypesRepository,
    ) { }

    async create({
        medicationId,
        soundId,
        name,
        alertAt,
    }: NotificationType): PromiseResult<Notification> {
        const medication = await this.medicationRepository.findMedication(medicationId);
        if (!medication) return error("Medication not found");

        const soundType = await this.soundTypesRepository.findSoundType(soundId);
        if (!soundType) return error("Sound not found");

        const [createdOk, _, CreatedNotification] = await t(
            this.notificationRepository.addNotification({
                medicationId,
                soundId,
                name,
                alertAt,
            })
        );

        if (!createdOk || !CreatedNotification) {
            return error("failed to create notification");
        }

        return ok(CreatedNotification);
    }

    async getAll(): PromiseResult<Notification[]> {
        const [listOk, _, listNotification] = await t(
            this.notificationRepository.findAllNotifications()
        )
        if (!listOk || !listNotification) {
            return error("failed to get notifications");
        }

        return ok(listNotification);
    }

    async get(notificationId: string): PromiseResult<Notification> {
        const notification = await this.notificationRepository.findNotification(notificationId);
        if (!notification) return error("Notification not found")

        return ok(notification);
    }

    async update(notificationId: string, updateData: Partial<NotificationType>): PromiseResult<Notification | null> {
        if (updateData.soundId) {
            const soundType = await this.soundTypesRepository.findSoundType(updateData.soundId);
            if (!soundType) return error("Sound type not found");
        }


        const [updatedOk, _, updatedNotification] = await t(
            this.notificationRepository.updateNotification(notificationId, { ...updateData })
        );

        if (!updatedOk || !updatedNotification) {
            return error("Failed to update notification");
        }

        return ok(updatedNotification);
    }

    async delete(notificationId: string): PromiseResult<Notification | null> {
        const existing = await this.notificationRepository.findNotification(notificationId);
        if (!existing) return error("Notification not found");

        const [deletedOk, _, deletedNotification] = await t(
            this.notificationRepository.deleteNotification(notificationId)
        );

        if (!deletedOk || !deletedNotification) {
            return error("Failed to delete notification");
        }

        return ok(deletedNotification);
    }
}