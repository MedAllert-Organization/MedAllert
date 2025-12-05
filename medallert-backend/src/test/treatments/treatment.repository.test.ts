import { describe, it, expect, beforeEach } from "@jest/globals";
import { MockPrisma } from "../_mocks/mock-prisma.js";
import { PrismaTreatmentRepository } from "../../repositories/treatments.js";
import type { User } from "../../repositories/users.js";
import type { Medication } from "../../repositories/medications.js";
import { VisualPatternEnum, VisualSizeEnum, VisualTypeEnum } from "../../infra/prisma/generated/prisma/index.js";

describe("PrismaTreatmentRepository", () => {
  let mockPrisma: MockPrisma;
  let repository: PrismaTreatmentRepository;
  let user: User;
  let medication: Medication;

  beforeEach(() => {
    mockPrisma = new MockPrisma();
    repository = new PrismaTreatmentRepository(mockPrisma as any);
    user = {
      userId: "user-1",
      email: "test@test.com",
      fullName: "Test User",
      hash: "hash",
      phone: "123456789",
      acceptedTosAt: new Date(),
      accountConfirmedAt: new Date(),
      timezoneId: "timezone-1",
      image: null,
    };
    medication = {
      medicationId: "med-1",
      name: "Medication 1",
      userId: user.userId,
      description: "description",
      createdAt: new Date(),
      updatedAt: new Date(),
      soundTypeId: null,
    };
    mockPrisma.users.users.push(user);
    mockPrisma.medications.medications.push(medication);
  });

  describe("addTreatment", () => {
    it("should add a new treatment and return it", async () => {
      const treatment = await repository.addTreatment({
        userId: user.userId,
        name: "Tratamento de Gripe",
        description: "Tratamento para a gripe",
        startAt: new Date(),
        endAt: null,
        medications: [
          {
            medicationId: medication.medicationId,
            dose: "1 pill",
            alertPeriodInMinutes: 60,
            visualType: {
              visualType: VisualTypeEnum.PILL,
              size: VisualSizeEnum.MEDIUM,
              color1: "#ff0000",
              pattern: VisualPatternEnum.SOLID,
            } as any,
          },
        ],
      });

      expect(treatment).toBeDefined();
      expect(treatment?.name).toBe("Tratamento de Gripe");
      expect(treatment?.medications).toHaveLength(1);
      expect(treatment?.medications[0].name).toBe(medication.name);
      expect(mockPrisma.treatments.treatments).toHaveLength(1);
      expect(mockPrisma.treatmentMedication.treatmentMedications).toHaveLength(1);
      expect(mockPrisma.visualTypes.visuals).toHaveLength(1);
    });
  });

  describe("findTreatment", () => {
    it("should return a treatment by id", async () => {
      const newTreatment = await repository.addTreatment({
        userId: user.userId,
        name: "Tratamento para Resfriado",
        description: "Para resfriados",
        startAt: new Date(),
        endAt: null,
        medications: [],
      });

      const found = await repository.findTreatment(newTreatment!.treatmentId);

      expect(found).toEqual(newTreatment);
    });

    it("should return null if treatment does not exist", async () => {
      const found = await repository.findTreatment("non-existent-id");
      expect(found).toBeNull();
    });
  });

  describe("findAllTreatments", () => {
    it("should return all treatments for a user", async () => {
      await repository.addTreatment({
        userId: user.userId,
        name: "Treatment 1",
        description: "",
        startAt: new Date(),
        endAt: null,
        medications: [],
      });
      await repository.addTreatment({
        userId: user.userId,
        name: "Treatment 2",
        description: "",
        startAt: new Date(),
        endAt: null,
        medications: [],
      });

      const treatments = await repository.findAllTreatments(user.userId);
      expect(treatments).toHaveLength(2);
    });

    it("should return an empty array if user has no treatments", async () => {
      const treatments = await repository.findAllTreatments(user.userId);
      expect(treatments).toHaveLength(0);
    });
  });

  describe("updateTreatment", () => {
    it("should update a treatment", async () => {
      const newTreatment = await repository.addTreatment({
        userId: user.userId,
        name: "Nome Inicial",
        description: "",
        startAt: new Date(),
        endAt: null,
        medications: [],
      });

      const updated = await repository.updateTreatment(newTreatment!.treatmentId, {
        name: "Nome Atualizado",
      });

      expect(updated?.name).toBe("Nome Atualizado");
    });

    it("should return null if treatment to update does not exist", async () => {
      const updated = await repository.updateTreatment("non-existent", {
        name: "New Name",
      });
      expect(updated).toBeNull();
    });
  });

  describe("deleteTreatment", () => {
    it("should delete a treatment and its medication associations", async () => {
      const newTreatment = await repository.addTreatment({
        userId: user.userId,
        name: "Para ser deletado",
        description: "",
        startAt: new Date(),
        endAt: null,
        medications: [
          {
            medicationId: medication.medicationId,
            dose: "1",
            alertPeriodInMinutes: 60,
            visualType: null,
          },
        ],
      });

      const deleted = await repository.deleteTreatment(newTreatment!.treatmentId);

      expect(deleted).toBeDefined();
      expect(deleted?.treatmentId).toBe(newTreatment!.treatmentId);
      expect(mockPrisma.treatments.treatments).toHaveLength(0);
      expect(
        mockPrisma.treatmentMedication.treatmentMedications,
      ).toHaveLength(0);
    });

    it("should return null if treatment to delete does not exist", async () => {
      const deleted = await repository.deleteTreatment("non-existent");
      expect(deleted).toBeNull();
    });
  });
});
