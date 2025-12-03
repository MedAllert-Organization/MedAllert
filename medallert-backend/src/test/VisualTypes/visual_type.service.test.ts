import { beforeEach, describe, expect, test } from "@jest/globals";
import { error, ok } from "try";
import {
  VisualPatternEnum,
  VisualSizeEnum,
  VisualTypeEnum,
  type UpdateVisualTypeDTO,
  type VisualTypes,
  type VisualTypesRepository,
} from "../../repositories/visual_types.js";
import { VisualTypesService } from "../../services/visual_type-service.js";
import type { CreateVisualTypeDTO } from "../../common/dto/create-visualTypes.dto.js";

class MockVisualTypesRepository implements VisualTypesRepository {
  visuals: VisualTypes[] = [];
  addVisualTypeCalledWith: CreateVisualTypeDTO | null = null;
  updateVisualTypeCalledWith: { id: string; data: UpdateVisualTypeDTO } | null =
    null;
  deleteVisualTypeCalledWith: string | null = null;
  findVisualTypeCalledWith: string | null = null;
  findAllVisualsCalled = false;

  async addVisualType(data: CreateVisualTypeDTO): Promise<VisualTypes | null> {
    this.addVisualTypeCalledWith = data;
    if (this.visuals.length > 0) {
      const newVisual = {
        visualId: `vt-${this.visuals.length + 1}`,
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.visuals.push(newVisual);
      return newVisual;
    }
    return null;
  }

  async findAllVisuals(): Promise<VisualTypes[] | null> {
    this.findAllVisualsCalled = true;
    return this.visuals;
  }

  async findVisualType(id: string): Promise<VisualTypes | null> {
    this.findVisualTypeCalledWith = id;
    return this.visuals.find((v) => v.visualId === id) || null;
  }

  async updateVisualType(
    id: string,
    data: UpdateVisualTypeDTO,
  ): Promise<VisualTypes | null> {
    this.updateVisualTypeCalledWith = { id, data };
    const visual = this.visuals.find((v) => v.visualId === id);
    if (visual) {
      const updated = { ...visual, ...data, updatedAt: new Date() };
      this.visuals = this.visuals.map((v) => (v.visualId === id ? updated : v));
      return updated;
    }
    return null;
  }

  async deleteVisualType(id: string): Promise<VisualTypes | null> {
    this.deleteVisualTypeCalledWith = id;
    const visual = this.visuals.find((v) => v.visualId === id);
    if (visual) {
      this.visuals = this.visuals.filter((v) => v.visualId !== id);
      return visual;
    }
    return null;
  }

  reset() {
    this.visuals = [];
    this.addVisualTypeCalledWith = null;
    this.updateVisualTypeCalledWith = null;
    this.deleteVisualTypeCalledWith = null;
    this.findVisualTypeCalledWith = null;
    this.findAllVisualsCalled = false;
  }
}

describe("VisualTypesService", () => {
  let service: VisualTypesService;
  let repository: MockVisualTypesRepository;

  beforeEach(() => {
    repository = new MockVisualTypesRepository();
    service = new VisualTypesService(repository);
  });

  describe("create", () => {
    test("should return ok with the created visual type", async () => {
      const newVisual = {
        treatmentMedicationId: "tm-123",
        visualType: VisualTypeEnum.CAPSULE,
        size: VisualSizeEnum.LARGE,
        color1: "#111",
        pattern: VisualPatternEnum.SOLID,
      };
      const created = {
        visualId: "vt-1",
        ...newVisual,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      repository.visuals.push(created);

      const result = await service.create(newVisual);

      expect(repository.addVisualTypeCalledWith).toEqual(newVisual);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value.visualId).toBeDefined();
      }
    });

    test("should return an error if creation fails", async () => {
      const result = await service.create({} as any);
      expect(result).toEqual(error("failed to add visual"));
    });
  });

  describe("getAll", () => {
    test("should return ok with a list of visual types", async () => {
      repository.visuals = [
        { visualId: "1" } as VisualTypes,
        { visualId: "2" } as VisualTypes,
      ];

      const result = await service.getAll();

      expect(result).toEqual(ok(repository.visuals));
      expect(repository.findAllVisualsCalled).toBe(true);
    });

    test("should return an error if fetching fails", async () => {
      repository.findAllVisuals = () => Promise.resolve(null);
      const result = await service.getAll();
      expect(result).toEqual(error("failed to get visuals"));
    });
  });

  describe("get", () => {
    test("should return ok with the found visual type", async () => {
      const visual = { visualId: "vt-1" } as VisualTypes;
      repository.visuals.push(visual);

      const result = await service.get("vt-1");

      expect(repository.findVisualTypeCalledWith).toBe("vt-1");
      expect(result).toEqual(ok(visual));
    });

    test("should return an error if not found", async () => {
      const result = await service.get("non-existent");
      expect(result).toEqual(error("Visual not found"));
    });
  });

  describe("update", () => {
    test("should return ok with the updated visual type", async () => {
      const visualId = "vt-1";
      const updateData = { color1: "#FFF" };
      const existingVisual = { visualId, color1: "#000" } as VisualTypes;
      repository.visuals.push(existingVisual);

      const result = await service.update(visualId, updateData);

      expect(repository.findVisualTypeCalledWith).toBe(visualId);
      expect(repository.updateVisualTypeCalledWith).toEqual({
        id: visualId,
        data: updateData,
      });
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value.color1).toBe("#FFF");
      }
    });

    test("should return an error if visual to update is not found", async () => {
      const result = await service.update("non-existent", {});
      expect(result).toEqual(error("visual not found"));
    });

    test("should return an error if update fails", async () => {
      const visualId = "vt-1";
      const existingVisual = { visualId, color1: "#000" } as VisualTypes;
      repository.visuals.push(existingVisual);
      repository.updateVisualType = () => Promise.resolve(null);

      const result = await service.update(visualId, {});

      expect(result).toEqual(error("Failed to update visual type"));
    });
  });

  describe("delete", () => {
    test("should return ok with the deleted visual type", async () => {
      const visualId = "vt-1";
      const visual = { visualId } as VisualTypes;
      repository.visuals.push(visual);

      const result = await service.delete(visualId);

      expect(repository.findVisualTypeCalledWith).toBe(visualId);
      expect(repository.deleteVisualTypeCalledWith).toBe(visualId);
      expect(result).toEqual(ok(visual));
    });

    test("should return an error if visual to delete is not found", async () => {
      const result = await service.delete("non-existent");
      expect(result).toEqual(error("Visual type not found"));
    });

    test("should return an error if delete fails", async () => {
      const visualId = "vt-1";
      const visual = { visualId } as VisualTypes;
      repository.visuals.push(visual);
      repository.deleteVisualType = () => Promise.resolve(null);

      const result = await service.delete(visualId);

      expect(result).toEqual(error("Failed to delete visula type"));
    });
  });
});
