import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";

export type SoundTypes = {
  soundId: string;
  name: string;
  duration: number ;
  format: string;
  sound: string;
};

export enum SoundFormatEnum{
  MP3 = 'MP3',
  WAV = 'WAV',
  M4A = 'M4A',
  AAC = 'AAC',
  OGG = 'OGG',
  CAF = 'CAF'
}

export interface SoundTypesRepository {
  findSoundType(id: string): Promise<SoundTypes | null>;
  findAllSounds(): Promise<SoundTypes[] | null>;
  addSoundType(
    newSoundType: { 
      name: string,
      duration: number,
      format: string,
      sound: string }
    ): Promise<SoundTypes | null>;
  updateSoundType(
    id: string,
    updateSoundType: {
      name?:  string | null,
      format?: string | null,
      duration?: number | null,
      sound?: string | null,
    },
  ): Promise<SoundTypes | null>;
  deleteSoundType(id: string): Promise<SoundTypes | null>;
}

class PrismaSoundTypesRepository implements SoundTypesRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findSoundType(id: string): Promise<SoundTypes | null> {
    return this.prisma.soundTypes.findUnique({
      where: { soundId: id },
    });
  }

  async findAllSounds(): Promise<SoundTypes[] | null> {
    return this.prisma.soundTypes.findMany();
  }

  async addSoundType(newSoundType: {
    name: string;
    duration: number;
    format: SoundFormatEnum;
    sound: string;
  }): Promise<SoundTypes | null> {
    return await this.prisma.soundTypes.create({
      data: {
        ...newSoundType,
      },
    });
  }

  async updateSoundType(
    id: string,
    updateSoundType: {
      sound?: string | null;
      name?: string | null;
      format?: SoundFormatEnum | null;
      duration?: number | null;
    },
  ): Promise<SoundTypes | null> {
    const { ...data } = updateSoundType;
    const updateData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined),
    );
    return this.prisma.soundTypes.update({
      where: { soundId: id },
      data: updateData,
    });
  }

  async deleteSoundType(id: string): Promise<SoundTypes | null> {
    return this.prisma.soundTypes.delete({
      where: { soundId: id },
    });
  }
}

export const defaultSoundTypesRepository = new PrismaSoundTypesRepository(
  prisma,
);
