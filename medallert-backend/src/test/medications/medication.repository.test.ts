import { PrismaMedicationRepository } from "../../repositories/medications.js";
import { MockPrisma } from "../_mocks/mock-prisma.js";

describe("PrismaMedicationRepository", () => {
  let repository: PrismaMedicationRepository;
  let mockPrisma: MockPrisma;

  beforeEach(() => {
    mockPrisma = new MockPrisma();
    repository = new PrismaMedicationRepository(mockPrisma as any);
  });

  it("should find a medication by id", async () => {
    const medication = await mockPrisma.medications.create({
      data: {
        name: "Medication 1",
        userId: "user-1",
        description: "Description 1",
        soundTypeId: "sound-type-1",
      },
    });

    const found = await repository.findMedication(medication.medicationId);
    expect(found).toEqual(medication);
  });

  it("should find all medications for a user", async () => {
    await mockPrisma.medications.create({
      data: {
        name: "Medication 1",
        userId: "user-1",
        description: "Description 1",
        soundTypeId: "sound-type-1",
      },
    });
    await mockPrisma.medications.create({
      data: {
        name: "Medication 2",
        userId: "user-1",
        description: "Description 2",
        soundTypeId: "sound-type-2",
      },
    });

    const medications = await repository.findAllMedications("user-1");
    expect(medications).toHaveLength(2);
  });

  it("should add a new medication", async () => {
    const newMedication = {
      name: "New Medication",
      userId: "user-1",
      description: "New Description",
      soundTypeId: "sound-type-1",
      endTreatmentAt: null,
    };

    const added = await repository.addMedication(newMedication);

    expect(added).toHaveProperty("medicationId");
    expect(added?.name).toBe("New Medication");
  });

  it("should update a medication", async () => {
    const medication = await mockPrisma.medications.create({
      data: {
        name: "Medication 1",
        userId: "user-1",
        description: "Description 1",
        soundTypeId: "sound-type-1",
      },
    });

    const updated = await repository.updateMedication(medication.medicationId, {
      name: "Updated Medication",
    });

    expect(updated?.name).toBe("Updated Medication");
  });

  it("should delete a medication", async () => {
    const medication = await mockPrisma.medications.create({
      data: {
        name: "Medication 1",
        userId: "user-1",
        description: "Description 1",
        soundTypeId: "sound-type-1",
      },
    });

    await repository.deleteMedication(medication.medicationId);

    const found = await repository.findMedication(medication.medicationId);
    expect(found).toBeNull();
  });
});
