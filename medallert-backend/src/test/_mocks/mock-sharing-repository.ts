import { jest } from "@jest/globals";
import type { SharingRepository } from "../../repositories/sharing.js";

export class MockSharingRepository implements SharingRepository {
  shares: { treatmentId: string; userId: string }[] = [];

  share = jest.fn(async (treatmentId: string, userId: string) => {
    this.shares.push({ treatmentId, userId });
  });

  find = jest.fn(async (treatmentId: string, userId: string) => {
    const share = this.shares.find(
      (s) => s.treatmentId === treatmentId && s.userId === userId,
    );
    return share
      ? {
          treatmentId: share.treatmentId,
          userId: share.userId,
          createdAt: new Date(),
        }
      : null;
  });

  remove = jest.fn(async (treatmentId: string, userId: string) => {
    const index = this.shares.findIndex(
      (s) => s.treatmentId === treatmentId && s.userId === userId,
    );
    if (index !== -1) {
      this.shares.splice(index, 1);
    }
  });

  findUsersByTreatment = jest.fn(async (treatmentId: string) => {
    const shares = this.shares.filter((s) => s.treatmentId === treatmentId);
    return shares.map((s) => ({
      treatmentId: s.treatmentId,
      userId: s.userId,
      createdAt: new Date(),
      user: {
        userId: s.userId,
        fullName: "Mock User",
        email: "mock@example.com",
      },
    }));
  });

  findTreatmentsByUser = jest.fn(async (userId: string) => {
    const shares = this.shares.filter((s) => s.userId === userId);
    return shares.map((s) => ({
      treatmentId: s.treatmentId,
      userId: s.userId,
      createdAt: new Date(),
      treatment: {
        treatmentId: s.treatmentId,
        name: "Mock Treatment",
        description: "Mock Description",
        user: {
          userId: "owner-id",
          fullName: "Owner Name",
        },
      },
    }));
  });

  removeAllFromOwner = jest.fn(async (ownerId: string) => {
    return;
  });
}