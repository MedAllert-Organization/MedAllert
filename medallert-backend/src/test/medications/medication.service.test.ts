
import { MedicationService } from "../../services/medication-service.js";
import { MockUsersRepository } from "../_mocks/mock-users-repository.js";
import { MockMedicationRepository } from "../_mocks/mock-medication-repository.js";
import { MockSoundTypesRepository } from "../_mocks/mock-sound-types-repository.js";
import { MockTreatmentMedicationRepository } from "../_mocks/mock-treatment-medication-repository.js";

describe("MedicationService", () => {
  let service: MedicationService;
  let usersRepository: MockUsersRepository;
  let medicationRepository: MockMedicationRepository;
  let soundTypesRepository: MockSoundTypesRepository;
  let treatmentMedicationRepository: MockTreatmentMedicationRepository;

  beforeEach(() => {
    usersRepository = new MockUsersRepository();
    medicationRepository = new MockMedicationRepository();
    soundTypesRepository = new MockSoundTypesRepository();
    treatmentMedicationRepository = new MockTreatmentMedicationRepository();
    service = new MedicationService(
      usersRepository,
      medicationRepository,
      soundTypesRepository,
      treatmentMedicationRepository,
    );
  });

  it("should get all medications for a user", async () => {
    const user = await usersRepository.addUser({
      email: "test@test.com",
      hash: "password",
      fullName: "Test User",
      phone: "1234567890",
    });
    if (!user) {
      throw new Error("User was not created");
    }

    await medicationRepository.addMedication({
      userId: user.userId,
      name: "Med 1",
      description: null,
      soundTypeId: null,
    });
    const result = await service.getAll(user.userId);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toHaveLength(1);
    }
  });

  it("should create a new medication", async () => {
    const user = await usersRepository.addUser({
      email: "test@test.com",
      hash: "password",
      fullName: "Test User",
      phone: "1234567890",
    });
    if (!user) {
      throw new Error("User was not created");
    }

    const result = await service.create(user.userId, {
      name: "New Med",
      description: "A new med",
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.name).toBe("New Med");
    }
  });

    it("should fail to create a medication for a non-existent user", async () => {
        const result = await service.create("non-existent-user", {
            name: "New Med",
            description: "A new med",
        });
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error).toBe("User not found!");
        }
    });

  it("should get a medication by id", async () => {
    const user = await usersRepository.addUser({
      email: "test@test.com",
      hash: "password",
      fullName: "Test User",
      phone: "1234567890",
    });
    if (!user) {
      throw new Error("User was not created");
    }

    const medication = await medicationRepository.addMedication({
      userId: user.userId,
      name: "Med 1",
      description: null,
      soundTypeId: null,
    });
    if(medication){
        const result = await service.get(medication.medicationId);
        expect(result.ok).toBe(true);
        if (result.ok) {
            expect(result.value.name).toBe("Med 1");
        }
    }
  });

  it("should fail to get a non-existent medication", async () => {
    const result = await service.get("non-existent-med");
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBe("Medication not found");
    }
  });

  it("should update a medication", async () => {
    const user = await usersRepository.addUser({
      email: "test@test.com",
      hash: "password",
      fullName: "Test User",
      phone: "1234567890",
    });
    if (!user) {
      throw new Error("User was not created");
    }

    const medication = await medicationRepository.addMedication({
      userId: user.userId,
      name: "Med 1",
      description: null,
      soundTypeId: null,
    });
    if(medication){
        const result = await service.update(medication.medicationId, {
            name: "Updated Med",
        });
        expect(result.ok).toBe(true);
        if (result.ok) {
            expect(result.value.name).toBe("Updated Med");
        }
    }
  });

  it("should fail to update a non-existent medication", async () => {
    const result = await service.update("non-existent-med", {
      name: "Updated Med",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBe("Medication not found");
    }
  });

  it("should delete a medication", async () => {
    const user = await usersRepository.addUser({
      email: "test@test.com",
      hash: "password",
      fullName: "Test User",
      phone: "1234567890",
    });
    if (!user) {
      throw new Error("User was not created");
    }

    const medication = await medicationRepository.addMedication({
      userId: user.userId,
      name: "Med 1",
      description: null,
      soundTypeId: null,
    });

    if(medication){
        const result = await service.delete(medication.medicationId);
        expect(result.ok).toBe(true);
        if (result.ok) {
            expect(result.value.name).toBe("Med 1");
        }
    }
  });

  it("should fail to delete a non-existent medication", async () => {
    const result = await service.delete("non-existent-med");
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBe("Medication not found");
    }
  });
});
