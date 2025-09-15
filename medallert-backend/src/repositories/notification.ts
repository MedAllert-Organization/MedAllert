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
    addNotification(newNotification: {
        medicationId: string, 
        soundId: string
        name: string,
        alertAt: Date,
    }): Promise<Notification | null>;
}

export class PrismaMedicationRepository implements NotificationRepository{
    constructor(private readonly prisma: PrismaClient) {}
    findNotification(id: string): Promise<Notification | null> {
        return this.prisma.notifications.findUnique({
            where: {
                notificationId: id
            },
        })
    }

    addNotification(newNotification: {
        medicationId: string;
        soundId: string;
        name: string;
        alertAt: Date;
    }): Promise<Notification | null> {
        throw new Error("Method not implemented.");
    }
}