import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";

export type SoundTypes = {
    sound: string;
}

export interface SoundTypesRepository {
    findSoundType(id: string): Promise<SoundTypes | null>;
    addSoundType(newSoundType: {
        sound: string;
    }
    ): Promise<SoundTypes | null>;
}

class PrismaSoundTypesRepository implements SoundTypesRepository {
    constructor(private readonly prisma: PrismaClient) {}
   
    async findSoundType(id: string): Promise<SoundTypes | null> {
        return prisma.soundTypes.findUnique({
            where: { soundId:id },
        });
    }

    async addSoundType(newSoundType: {
        sound: string;
    }): Promise<SoundTypes | null> {
        return await this.prisma.soundTypes.create({ data: { 
            ...newSoundType 
        } })
    }
}

export const defaultSoundTypesRepository = new PrismaSoundTypesRepository(prisma);