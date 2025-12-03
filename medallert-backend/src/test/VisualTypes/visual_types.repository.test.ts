import { beforeEach, describe, expect, test } from "@jest/globals";
import {
  PrismaVisualTypesRepository,
  VisualPatternEnum,
  VisualSizeEnum,
  VisualTypeEnum,
  type VisualTypes,
} from "../../repositories/visual_types.js";
import type {
  MedicationProgress,
  TreatmentMedication,
  TreatmentMedicationRepository,
} from "../../repositories/treatmentMedication.js";

class MockPrismaVisualTypes {
  visuals: VisualTypes[] = [];
  updateCalledWith: any;

  findUnique(query: { where: { visualId: string } }) {
    return Promise.resolve(
      this.visuals.find((v) => v.visualId === query.where.visualId) || null,
    );
  }
  findMany() {
    return Promise.resolve(this.visuals);
  }
  create(query: { data: any }) {
    const newVisual = {
      visualId: `new-visual-${this.visuals.length + 1}`,
      ...query.data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.visuals.push(newVisual);
    return Promise.resolve(newVisual);
  }
  update(query: { where: { visualId: string }; data: any }) {
    this.updateCalledWith = query;
    const visual = this.visuals.find(
      (v) => v.visualId === query.where.visualId,
    );
    if (visual) {
      const updated = { ...visual, ...query.data, updatedAt: new Date() };
      this.visuals = this.visuals.map((v) =>
        v.visualId === query.where.visualId ? updated : v,
      );
      return Promise.resolve(updated);
    }
    return Promise.resolve(null);
  }
  delete(query: { where: { visualId: string } }) {
    const visual = this.visuals.find(
      (v) => v.visualId === query.where.visualId,
    );
    if (visual) {
      this.visuals = this.visuals.filter(
        (v) => v.visualId !== query.where.visualId,
      );
      return Promise.resolve(visual);
    }
    return Promise.resolve(null);
  }
  reset() {
    this.visuals = [];
    this.updateCalledWith = null;
  }
}

class MockPrisma {
  visualTypes = new MockPrismaVisualTypes();
  reset() {
    this.visualTypes.reset();
  }
}

class MockTreatmentMedicationRepository
  implements TreatmentMedicationRepository
{
  updateTreatmentMedicationCalledWith: { id: string; data: any } | null = null;

  findTodayMedicationsByUser(userId: string): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
  addTreatmentMedications(data: TreatmentMedication[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getByTreatment(treatmentId: string): Promise<TreatmentMedication[]> {
    throw new Error("Method not implemented.");
  }
  updateTreatmentMedication(
    treatmentMedicationId: string,
    updateData: Partial<
      Omit<TreatmentMedication, "treatmentId" | "medicationId">
    >,
  ): Promise<TreatmentMedication | null> {
    this.updateTreatmentMedicationCalledWith = {
      id: treatmentMedicationId,
      data: updateData,
    };
    return Promise.resolve({} as TreatmentMedication);
  }
  deleteTreatmentMedications(treatmentId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteTreatmentMedication(
    treatmentId: string,
    medicationId: string,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getByMedication(
    medicationId: string,
  ): Promise<{ id: string; name: string; description: string | null }[]> {
    throw new Error("Method not implemented.");
  }
  updateProgress(
    treatmentId: string,
    medicationId: string,
    progress: MedicationProgress,
  ): Promise<TreatmentMedication | null> {
    throw new Error("Method not implemented.");
  }
  resetAll(treatmentId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  reset() {
    this.updateTreatmentMedicationCalledWith = null;
  }
}

describe("PrismaVisualTypesRepository", () => {
  let repository: PrismaVisualTypesRepository;
  let mockPrisma: MockPrisma;
  let mockTreatmentMedicationRepository: MockTreatmentMedicationRepository;

  beforeEach(() => {
    mockPrisma = new MockPrisma();
    mockTreatmentMedicationRepository = new MockTreatmentMedicationRepository();
    repository = new PrismaVisualTypesRepository(
      mockPrisma as any,
      mockTreatmentMedicationRepository,
    );
  });

  describe("findVisualType", () => {
    test("should return a visual type when found", async () => {
      const visualId = "visual-123";
      const expectedVisual = {
        visualId,
        visualType: VisualTypeEnum.CAPSULE,
        size: VisualSizeEnum.MEDIUM,
        color1: "#FF0000",
        pattern: VisualPatternEnum.SOLID,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrisma.visualTypes.visuals.push(expectedVisual);

      const result = await repository.findVisualType(visualId);

      expect(result).toEqual(expectedVisual);
    });

    test("should return null when not found", async () => {
      const visualId = "non-existent-id";

      const result = await repository.findVisualType(visualId);

      expect(result).toBeNull();
    });
  });

  describe("findAllVisuals", () => {
    test("should return an array of visual types", async () => {
      const expectedVisuals = [
        { visualId: "1", visualType: VisualTypeEnum.PILL },
        { visualId: "2", visualType: VisualTypeEnum.TABLET },
      ] as VisualTypes[];
      mockPrisma.visualTypes.visuals.push(...expectedVisuals);

      const result = await repository.findAllVisuals();

      expect(result).toEqual(expectedVisuals);
    });

    test("should return empty array if prisma throws an error", async () => {
      mockPrisma.visualTypes.visuals = [];
      const result = await repository.findAllVisuals();

      expect(result).toEqual([]);
    });
  });

  describe("addVisualType", () => {
    test("should create a visual type and update the treatment medication", async () => {
      const createDto = {
        treatmentMedicationId: "tm-123",
        visualType: VisualTypeEnum.DROP,
        size: VisualSizeEnum.SMALL,
        color1: "#0000FF",
        pattern: VisualPatternEnum.DOTS,
      };

      const result = await repository.addVisualType(createDto);

      expect(
        mockTreatmentMedicationRepository.updateTreatmentMedicationCalledWith,
      ).toEqual({ id: "tm-123", data: { visualTypeId: result?.visualId } });
      expect(result?.visualType).toEqual(createDto.visualType);
    });
  });

  describe("updateVisualType", () => {
    test("should update a visual type", async () => {
      const visualId = "visual-to-update";
      const updateDto = { color1: "#FFFFFF", opacity: 0.5 };
      mockPrisma.visualTypes.visuals.push({ visualId } as VisualTypes);

      const result = await repository.updateVisualType(visualId, updateDto);

      expect(result?.color1).toBe(updateDto.color1);
      expect(result?.opacity).toBe(updateDto.opacity);
    });

    test("should not include undefined fields in the update", async () => {
      const visualId = "vt-1";
      const updateData = {
        color1: "#FFFFFF",
        size: undefined,
      };
      mockPrisma.visualTypes.visuals.push({
        visualId,
        color1: "#000000",
      } as VisualTypes);

      await repository.updateVisualType(visualId, updateData);

      expect(mockPrisma.visualTypes.updateCalledWith).toEqual({
        where: { visualId },
        data: {
          color1: "#FFFFFF",
        },
      });
    });
  });

  describe("deleteVisualType", () => {
    test("should delete a visual type", async () => {
      const visualId = "visual-to-delete";
      mockPrisma.visualTypes.visuals.push({ visualId } as VisualTypes);

      const result = await repository.deleteVisualType(visualId);

      expect(result?.visualId).toEqual(visualId);
      expect(mockPrisma.visualTypes.visuals.length).toBe(0);
    });
  });
});
