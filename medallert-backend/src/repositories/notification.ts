import { prisma } from "../infra/prisma/client.js";
import type { Prisma, PrismaClient } from "../infra/prisma/generated/prisma/index.js";

export type Notification = {
    notificationId: string;
    medicationId: string;
    soundId: string;
    name: string;
    alertAt: Date
}

export interface NotificationRepository {
    findNotification(id: string): Promise<Notification | null>;
    findAllNotifications(): Promise<Notification[] | null>;
    addNotification(newNotification: {
        medicationId: string,
        soundId: string,
        name: string,
        alertAt: Date,
    }): Promise<Notification | null>;
    updateNotification(id: string,
        updateNotification: {
            soundId?: string | null,
            name?: string | null,
            alertAt?: Date | null,
        }): Promise<Notification | null>;
    deleteNotification(id: string): Promise<Notification | null>;
}

export class PrismaNotificationRepository implements NotificationRepository {
    constructor(private readonly prisma: PrismaClient) { }

    async findNotification(id: string): Promise<Notification | null> {
        return this.prisma.notifications.findUnique({
            where: {
                notificationId: id
            },
        })
    }

    async findAllNotifications(): Promise<Notification[] | null> {
        return this.prisma.notifications.findMany();
    }

    async addNotification(newNotification: {
        medicationId: string;
        soundId: string;
        name: string;
        alertAt: Date;
    }): Promise<Notification | null> {
        return this.prisma.notifications.create({
            data: {
                ...newNotification
            }
        })
    }

    async updateNotification(id: string, updateNotification: {
        soundId?: string | null;
        name?: string | null;
        alertAt?: Date | null;
    }): Promise<Notification | null> {
        const { ...data } = updateNotification;
        const updateData = Object.fromEntries(
            Object.entries(data).filter(([_, v]) => v !== undefined)
        );

        return this.prisma.notifications.update({
            where: { notificationId: id },
            data: updateData,
        });
    }

    deleteNotification(id: string): Promise<Notification | null> {
        return this.prisma.notifications.delete({
            where: { notificationId: id }
        })
    }
}

export const defaultNotificationRepository = new PrismaNotificationRepository(prisma);