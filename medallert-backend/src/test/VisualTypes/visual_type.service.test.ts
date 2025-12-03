import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { error, ok } from "try";
import {
  VisualPatternEnum,
  VisualSizeEnum,
  VisualTypeEnum,
  type VisualTypes,
  type VisualTypesRepository,
} from "../../repositories/visual_types.js";
import { VisualTypesService } from "../../services/visual_type-service.js";

const mockVisualTypesRepository: jest.Mocked<VisualTypesRepository> = {
  addVisualType: jest.fn(),
  findAllVisuals: jest.fn(),
  findVisualType: jest.fn(),
  updateVisualType: jest.fn(),
  deleteVisualType: jest.fn(),
};

describe("VisualTypesService", () => {
  let service: VisualTypesService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new VisualTypesService(mockVisualTypesRepository);
  });

  describe("create", () => {
    test("should return ok with the created visual type", async () => {
      const newVisual = {
        treatmentMedicationId: "tm-123",
        ...visualSample
      };
      const created = { ...newVisual };
      mockVisualTypesRepository.addVisualType.mockResolvedValue(created);

      const result = await service.create(newVisual);

      expect(mockVisualTypesRepository.addVisualType).toHaveBeenCalledWith(
        newVisual,
      );
      expect(result).toEqual(ok(created));
    });

    test("should return an error if creation fails", async () => {
      mockVisualTypesRepository.addVisualType.mockResolvedValue(null);
      const result = await service.create({} as any);
      expect(result).toEqual(error("failed to add visual"));
    });
  });

  describe("getAll", () => {
    test("should return ok with a list of visual types", async () => {
      const visuals: VisualTypes[] = [
        visualSample
      ];
      mockVisualTypesRepository.findAllVisuals.mockResolvedValue(visuals);

      const result = await service.getAll();

      expect(result).toEqual(ok(visuals));
    });

    test("should return an error if fetching fails", async () => {
      mockVisualTypesRepository.findAllVisuals.mockResolvedValue(null);
      const result = await service.getAll();
      expect(result).toEqual(error("failed to get visuals"));
    });
  });

  describe("get", () => {
    test("should return ok with the found visual type", async () => {
      const visual = visualSample
      mockVisualTypesRepository.findVisualType.mockResolvedValue(visual);

      const result = await service.get("vt-1");

      expect(mockVisualTypesRepository.findVisualType).toHaveBeenCalledWith(
        "vt-1",
      );
      expect(result).toEqual(ok(visual));
    });

    test("should return an error if not found", async () => {
      mockVisualTypesRepository.findVisualType.mockResolvedValue(null);
      const result = await service.get("non-existent");
      expect(result).toEqual(error("Visual not found"));
    });
  });

  describe("update", () => {
    test("should return ok with the updated visual type", async () => {
      const visualId = "vt-1";
      const updateData = { color1: "#FFF" };
      const existingVisual = visualSample;
      const updatedVisual = { ...existingVisual, ...updateData };

      mockVisualTypesRepository.findVisualType.mockResolvedValue(
        existingVisual,
      );
      mockVisualTypesRepository.updateVisualType.mockResolvedValue(
        updatedVisual,
      );

      const result = await service.update(visualId, updateData);

      expect(mockVisualTypesRepository.findVisualType).toHaveBeenCalledWith(
        visualId,
      );
      expect(mockVisualTypesRepository.updateVisualType).toHaveBeenCalledWith(
        visualId,
        updateData,
      );
      expect(result).toEqual(ok(updatedVisual));
    });

    test("should return an error if visual to update is not found", async () => {
      mockVisualTypesRepository.findVisualType.mockResolvedValue(null);
      const result = await service.update("non-existent", {});
      expect(result).toEqual(error("visual not found"));
    });

    test("should return an error if update fails", async () => {
      const visualId = "vt-1";
      const existingVisual = visualSample;
      mockVisualTypesRepository.findVisualType.mockResolvedValue(
        existingVisual,
      );
      mockVisualTypesRepository.updateVisualType.mockResolvedValue(null);

      const result = await service.update(visualId, {});

      expect(result).toEqual(error("Failed to update visual type"));
    });
  });

  describe("delete", () => {
    test("should return ok with the deleted visual type", async () => {
      const visualId = "vt-1";
      const visual = visualSample;
      mockVisualTypesRepository.findVisualType.mockResolvedValue(visual);
      mockVisualTypesRepository.deleteVisualType.mockResolvedValue(visual);

      const result = await service.delete(visualId);

      expect(mockVisualTypesRepository.findVisualType).toHaveBeenCalledWith(
        visualId,
      );
      expect(mockVisualTypesRepository.deleteVisualType).toHaveBeenCalledWith(
        visualId,
      );
      expect(result).toEqual(ok(visual));
    });

    test("should return an error if visual to delete is not found", async () => {
      mockVisualTypesRepository.findVisualType.mockResolvedValue(null);
      const result = await service.delete("non-existent");
      expect(result).toEqual(error("Visual type not found"));
    });

    test("should return an error if delete fails", async () => {
      const visualId = "vt-1";
      const visual = visualSample;
      mockVisualTypesRepository.findVisualType.mockResolvedValue(visual);
      mockVisualTypesRepository.deleteVisualType.mockResolvedValue(null);

      const result = await service.delete(visualId);

      expect(result).toEqual(error("Failed to delete visula type"));
    });
  });
});

const visualSample = {
  visualType: VisualTypeEnum.CAPSULE,
  size: VisualSizeEnum.LARGE,
  color1: "#111",
  pattern: VisualPatternEnum.SOLID,
  color2: "#222",
  rotation: 0,
  opacity: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  visualId: "vt-1",
}