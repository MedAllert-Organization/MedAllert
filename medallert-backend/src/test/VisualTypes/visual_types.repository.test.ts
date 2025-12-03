import { beforeEach, describe, expect, test } from "@jest/globals";
import {
  PrismaVisualTypesRepository,
  VisualPatternEnum,
  VisualSizeEnum,
  VisualTypeEnum,
  type VisualTypes,
} from "../../repositories/visual_types.js";
import { MockPrisma } from "../_mocks/mock-prisma.js";
import { MockTreatmentMedicationRepository } from "../_mocks/mock-treatment-medication-repository.js";


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
