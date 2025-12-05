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
    // We need to mock the return structure which includes user details
    // Since this is a mock, we can return a simplified structure or rely on the test to populate it if needed.
    // However, the service just returns what the repo returns.
    // Let's return a structure that matches what the real repo returns (array of objects with user property)
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
    // This method in the real repo queries treatments by ownerId first.
    // In the mock, we might need to know which treatments belong to the owner.
    // But for the purpose of unit testing the service, we can just mock the behavior or assume the service calls it correctly.
    // The service calls this method directly.
    // We can implement a simple logic if we want, or just spy on it.
    // Let's implement a simple logic assuming we can filter by some logic or just clear relevant shares if we had that info.
    // Since we don't have the treatment ownership info in this mock easily without coupling, 
    // we will just leave it as a spy mostly, or maybe we can't easily implement the logic without extra state.
    // However, the service just delegates to the repo. So verifying it was called is enough for the service test.
    // But if we want to simulate the effect, we'd need to know which treatments are owned by ownerId.
    // For now, let's just leave it as a spy that does nothing to the state, or maybe clears everything if we want to be aggressive (but that's wrong).
    // Actually, let's just leave it empty as the service test will likely just check if it was called.
    return;
  });
}
