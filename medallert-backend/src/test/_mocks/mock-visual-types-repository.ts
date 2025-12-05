import type {
  UpdateVisualTypeDTO,
  VisualTypes,
  VisualTypesRepository,
} from "../../repositories/visual_types.js";
import type { CreateVisualTypeDTO } from "../../common/dto/create-visualTypes.dto.js";

export class MockVisualTypesRepository implements VisualTypesRepository {
  visuals: VisualTypes[] = [];
  addVisualTypeCalledWith: CreateVisualTypeDTO | null = null;
  updateVisualTypeCalledWith: { id: string; data: UpdateVisualTypeDTO } | null =
    null;
  deleteVisualTypeCalledWith: string | null = null;
  findVisualTypeCalledWith: string | null = null;
  findAllVisualsCalled = false;
  private shouldFailAddVisualType = false;

  mockAddVisualTypeFailure(fail: boolean) {
    this.shouldFailAddVisualType = fail;
  }

  async addVisualType(data: CreateVisualTypeDTO): Promise<VisualTypes | null> {
    this.addVisualTypeCalledWith = data;
    if (this.shouldFailAddVisualType) {
      return null;
    }
    const newVisual = {
      visualId: `vt-${this.visuals.length + 1}`,
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.visuals.push(newVisual);
    return newVisual;
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
    this.shouldFailAddVisualType = false;
  }
}