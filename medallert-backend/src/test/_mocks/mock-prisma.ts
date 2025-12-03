import type { VisualTypes } from "../../repositories/visual_types.js";

export class MockPrismaVisualTypes {
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

export class MockPrisma {
  visualTypes = new MockPrismaVisualTypes();
  reset() {
    this.visualTypes.reset();
  }
}
