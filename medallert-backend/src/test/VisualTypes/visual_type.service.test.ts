
import { jest } from "@jest/globals";
import { VisualTypesService } from "../../services/visual_type-service.js";
import { VisualPatternEnum, VisualSizeEnum, VisualTypeEnum } from "../../repositories/visual_types.js";
import { error, ok } from "try";

const mockVisualTypesRepository = {
  addVisualType: jest.fn(),
  findAllVisuals: jest.fn(),
  findVisualType: jest.fn(),
  updateVisualType: jest.fn(),
  deleteVisualType: jest.fn(),
};

describe("VisualTypesService", () => {
  let service;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new VisualTypesService(mockVisualTypesRepository);
  });

  describe("create", () => {
    it("should return ok with the created visual type", async () => {
      const newVisual = {
        treatmentMedicationId: "tm-123",
        visualType: VisualTypeEnum.CAPSULE,
        size: VisualSizeEnum.LARGE,
        color1: "#111",
        pattern: VisualPatternEnum.SOLID,
      };
      const created = { visualId: "vt-1", ...newVisual };
      mockVisualTypesRepository.addVisualType.mockResolvedValue(created);

      const result = await service.create(newVisual);

      expect(mockVisualTypesRepository.addVisualType).toHaveBeenCalledWith(newVisual);
      expect(result).toEqual(ok(created));
    });

    it("should return an error if creation fails", async () => {
      mockVisualTypesRepository.addVisualType.mockResolvedValue(null);
      const result = await service.create({});
      expect(result).toEqual(error("failed to add visual"));
    });
  });

  describe("getAll", () => {
    it("should return ok with a list of visual types", async () => {
      const visuals = [{ visualId: "1" }, { visualId: "2" }];
      mockVisualTypesRepository.findAllVisuals.mockResolvedValue(visuals);

      const result = await service.getAll();

      expect(result).toEqual(ok(visuals));
    });

    it("should return an error if fetching fails", async () => {
      mockVisualTypesRepository.findAllVisuals.mockResolvedValue(null);
      const result = await service.getAll();
      expect(result).toEqual(error("failed to get visuals"));
    });
  });

  describe("get", () => {
    it("should return ok with the found visual type", async () => {
      const visual = { visualId: "vt-1" };
      mockVisualTypesRepository.findVisualType.mockResolvedValue(visual);

      const result = await service.get("vt-1");

      expect(mockVisualTypesRepository.findVisualType).toHaveBeenCalledWith("vt-1");
      expect(result).toEqual(ok(visual));
    });

    it("should return an error if not found", async () => {
      mockVisualTypesRepository.findVisualType.mockResolvedValue(null);
      const result = await service.get("non-existent");
      expect(result).toEqual(error("Visual not found"));
    });
  });

  describe("update", () => {
    it("should return ok with the updated visual type", async () => {
      const visualId = "vt-1";
      const updateData = { color1: "#FFF" };
      const existingVisual = { visualId, color1: "#000" };
      const updatedVisual = { visualId, ...updateData };

      mockVisualTypesRepository.findVisualType.mockResolvedValue(existingVisual);
      mockVisualTypesRepository.updateVisualType.mockResolvedValue(updatedVisual);

      const result = await service.update(visualId, updateData);

      expect(mockVisualTypesRepository.findVisualType).toHaveBeenCalledWith(visualId);
      expect(mockVisualTypesRepository.updateVisualType).toHaveBeenCalledWith(visualId, updateData);
      expect(result).toEqual(ok(updatedVisual));
    });

    it("should return an error if visual to update is not found", async () => {
      mockVisualTypesRepository.findVisualType.mockResolvedValue(null);
      const result = await service.update("non-existent", {});
      expect(result).toEqual(error("visual not found"));
    });

    it("should return an error if update fails", async () => {
      const visualId = "vt-1";
      const existingVisual = { visualId, color1: "#000" };
      mockVisualTypesRepository.findVisualType.mockResolvedValue(existingVisual);
      mockVisualTypesRepository.updateVisualType.mockResolvedValue(null);

      const result = await service.update(visualId, {});

      expect(result).toEqual(error("Failed to update visual type"));
    });
  });

  describe("delete", () => {
    it("should return ok with the deleted visual type", async () => {
      const visualId = "vt-1";
      const visual = { visualId };
      mockVisualTypesRepository.findVisualType.mockResolvedValue(visual);
      mockVisualTypesRepository.deleteVisualType.mockResolvedValue(visual);

      const result = await service.delete(visualId);

      expect(mockVisualTypesRepository.findVisualType).toHaveBeenCalledWith(visualId);
      expect(mockVisualTypesRepository.deleteVisualType).toHaveBeenCalledWith(visualId);
      expect(result).toEqual(ok(visual));
    });

    it("should return an error if visual to delete is not found", async () => {
      mockVisualTypesRepository.findVisualType.mockResolvedValue(null);
      const result = await service.delete("non-existent");
      expect(result).toEqual(error("Visual type not found"));
    });

    it("should return an error if delete fails", async () => {
      const visualId = "vt-1";
      const visual = { visualId };
      mockVisualTypesRepository.findVisualType.mockResolvedValue(visual);
      mockVisualTypesRepository.deleteVisualType.mockResolvedValue(null);

      const result = await service.delete(visualId);

      expect(result).toEqual(error("Failed to delete visula type"));
    });
  });
});
