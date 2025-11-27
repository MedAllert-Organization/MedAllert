import type { CreateVisualTypeDTO } from "../common/dto/create-visualTypes.dto.js";
import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";
import { defaultTreatmentMedicationRepository, type TreatmentMedication, type TreatmentMedicationRepository } from "./treatmentMedication.js";

export type VisualTypes = {
  visualId: string,

  visualType: VisualTypeEnum,
  size: VisualSizeEnum,
  color1: string,
  color2?: string,
  pattern: VisualPatternEnum,
  rotation?: number,
  opacity?: number,
  treatmentMedication?: TreatmentMedication,

  createdAt: Date,
  updatedAt: Date,
};

export enum VisualSizeEnum {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE'
}

export enum VisualTypeEnum {
  CAPSULE = 'CAPSULE',
  PILL = 'PILL',
  TABLET = 'TABLET',
  DROP = 'DROP',
  LIQUID = 'LIQUID',
  INHALER = 'INHALER',
  INJECTION = 'INJECTION',
  OINTMENT = 'OINTMENT',
  PATCH = 'PATCH'
}

export enum VisualPatternEnum {
  SOLID = 'SOLID',
  STRIPED = 'STRIPED',
  HALF = 'HALF',
  RING = 'RING',
  DOTS = 'DOTS',
  BAND = 'BAND',
  GRADIENT = 'GRADIENT'
}

export type UpdateVisualTypeDTO = Partial<Omit<CreateVisualTypeDTO, "visualId" | "createdAt" | "updatedAt" | "treatmentMedication">>;

export interface VisualTypesRepository {
  findVisualType(id: string): Promise<VisualTypes | null>;
  findAllVisuals(): Promise<VisualTypes[] | null>;
  addVisualType(data: CreateVisualTypeDTO): Promise<VisualTypes | null>;
  updateVisualType(id: string, data: UpdateVisualTypeDTO): Promise<VisualTypes | null>
  deleteVisualType(id: string): Promise<VisualTypes | null>;
}

class PrismaVisualTypesRepository implements VisualTypesRepository {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly treatmentMedicationRepository: TreatmentMedicationRepository,
  ) {}

  async findVisualType(id: string): Promise<VisualTypes | null> {
    return await this.prisma.visualTypes.findUnique({
      where: { visualId: id },
    }) as VisualTypes | null;
  }

  async findAllVisuals(): Promise<VisualTypes[] | null> {
    return await this.prisma.visualTypes.findMany() as VisualTypes[] | null;
  }

    async addVisualType(data: CreateVisualTypeDTO): Promise<VisualTypes | null> {
    const visualType = await this.prisma.visualTypes.create({
      data: {
        visualType: data.visualType,
        size: data.size,
        color1: data.color1,
        color2: data.color2,
        pattern: data.pattern,
        rotation: data.rotation,
        opacity: data.opacity,
      },
    }) as unknown as VisualTypes | null;

    await this.treatmentMedicationRepository.updateTreatmentMedication(data.treatmentMedicationId, { visualTypeId: visualType?.visualId });

    return visualType;
  }

  async deleteVisualType(id: string): Promise<VisualTypes | null> {
    return this.prisma.visualTypes.delete({
      where: { visualId: id },
    }) as unknown as VisualTypes | null;
  }

  async updateVisualType(id: string, data: UpdateVisualTypeDTO): Promise<VisualTypes | null> {
    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined)
    );

    return await this.prisma.visualTypes.update({
      where: { visualId: id },
      data: {
        ...cleanData,
      }
    }) as unknown as VisualTypes | null;
  }
}

export const defaultVisualTypesRepository = new PrismaVisualTypesRepository(
  prisma, defaultTreatmentMedicationRepository
);
