import { describe, it, expect, beforeEach } from "@jest/globals";
import { TreatmentService } from "../../services/treatment-serivce.js";
import { MockUsersRepository } from "../_mocks/mock-users-repository.js";
import { MockTreatmentRepository } from "../_mocks/mock-treatment-repository.js";
import { MockMedicationRepository } from "../_mocks/mock-medication-repository.js";
import { MockTreatmentMedicationRepository } from "../_mocks/mock-treatment-medication-repository.js";
import type { User } from "../../repositories/users.js";
import type { Medication } from "../../repositories/medications.js";
import type { Treatment } from "../../repositories/treatments.js";

describe("TreatmentService", () => {
    let service: TreatmentService;
    let usersRepository: MockUsersRepository;
    let treatmentRepository: MockTreatmentRepository;
    let medicationRepository: MockMedicationRepository;
    let treatmentMedicationRepository: MockTreatmentMedicationRepository;

    let user: User;
    let medication: Medication;

    beforeEach(() => {
        usersRepository = new MockUsersRepository();
        treatmentRepository = new MockTreatmentRepository();
        medicationRepository = new MockMedicationRepository();
        treatmentMedicationRepository = new MockTreatmentMedicationRepository();
        service = new TreatmentService(
            usersRepository,
            treatmentRepository,
            medicationRepository,
            treatmentMedicationRepository
        );

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

        usersRepository.users.push(user);
        medicationRepository.medications.push(medication);
    });

    describe("getAll", () => {
        it("should return all treatments for a user", async () => {
            const treatment: Treatment = {
                treatmentId: "treat-1",
                userId: user.userId,
                name: "Treatment 1",
                description: "Description 1",
                startAt: new Date(),
                endAt: null,
                medications: [],
            };
            treatmentRepository.treatments.push(treatment);

            const result = await service.getAll(user.userId);

            expect(result.error).toBeUndefined();
            expect(result.value).toEqual([treatment]);
        });

        it("should return an empty array if the user has no treatments", async () => {
            const result = await service.getAll(user.userId);
            expect(result.error).toBeUndefined();
            expect(result.value).toEqual([]);
        });
    });

    describe("get", () => {
        it("should return a treatment by id", async () => {
            const treatment: Treatment = {
                treatmentId: "treat-1",
                userId: user.userId,
                name: "Treatment 1",
                description: "Description 1",
                startAt: new Date(),
                endAt: null,
                medications: [],
            };
            treatmentRepository.treatments.push(treatment);

            const result = await service.get("treat-1");

            expect(result.error).toBeUndefined();
            expect(result.value).toEqual(treatment);
        });

        it("should return an error if the treatment does not exist", async () => {
            const result = await service.get("non-existent-id");

            expect(result.value).toBeUndefined();
            expect(result.error).toBe("Treatment not found");
        });
    });

    describe("create", () => {
        it("should create a new treatment", async () => {
            const result = await service.create(user.userId, {
                name: "New Treatment",
                description: "New Description",
                startAt: new Date(),
                endAt: null,
                medications: [{
                    medicationId: medication.medicationId,
                    dose: "1 pill",
                    alertPeriodInMinutes: 60,
                    totalQuantity: 10,
                    visualType: null,
                }],
            });

            expect(result.error).toBeUndefined();
            expect(result.value?.name).toBe("New Treatment");
            expect(treatmentRepository.treatments).toHaveLength(1);
        });

        it("should return an error if user is not found", async () => {
            const result = await service.create("non-existent-user", {
                name: "New Treatment",
                description: "New Description",
                startAt: new Date(),
                endAt: null,
                medications: [{
                    medicationId: medication.medicationId,
                    dose: "1 pill",
                    alertPeriodInMinutes: 60,
                    totalQuantity: 10,
                    visualType: null,
                }],
            });

            expect(result.value).toBeUndefined();
            expect(result.error).toBe("User not found!");
        });

        it("should return an error if any medication is not found", async () => {
            const result = await service.create(user.userId, {
                name: "New Treatment",
                description: "New Description",
                startAt: new Date(),
                endAt: null,
                medications: [{
                    medicationId: "non-existent-medication",
                    dose: "1 pill",
                    alertPeriodInMinutes: 60,
                    totalQuantity: 10,
                    visualType: null,
                }],
            });

            expect(result.value).toBeUndefined();
            expect(result.error).toBe("Um ou mais medicamentos não foram encontrados.");
        });

        it("should return an error if addTreatment fails", async () => {
            treatmentRepository.addTreatment.mockRejectedValue(new Error("DB error"));

            const result = await service.create(user.userId, {
                name: "New Treatment",
                description: "New Description",
                startAt: new Date(),
                endAt: null,
                medications: [{
                    medicationId: medication.medicationId,
                    dose: "1 pill",
                    alertPeriodInMinutes: 60,
                    totalQuantity: 10,
                    visualType: null,
                }],
            });

            expect(result.value).toBeUndefined();
            expect(result.error).toBe("DB error");
        });

        it("should return a generic error if addTreatment fails without a message", async () => {
            treatmentRepository.addTreatment.mockRejectedValue(new Error());

            const result = await service.create(user.userId, {
                name: "New Treatment",
                description: "New Description",
                startAt: new Date(),
                endAt: null,
                medications: [{
                    medicationId: medication.medicationId,
                    dose: "1 pill",
                    alertPeriodInMinutes: 60,
                    totalQuantity: 10,
                    visualType: null,
                }],
            });

            expect(result.value).toBeUndefined();
            expect(result.error).toBe("Failed to create treatment");
        });
    });

    describe("update", () => {
        it("should update a treatment", async () => {
            const treatment: Treatment = {
                treatmentId: "treat-1",
                userId: user.userId,
                name: "Old Name",
                description: "Old Description",
                startAt: new Date(),
                endAt: null,
                medications: [],
            };
            treatmentRepository.treatments.push(treatment);

            const result = await service.update("treat-1", {
                name: "New Name",
            });

            expect(result.error).toBeUndefined();
            expect(result.value?.name).toBe("New Name");
            expect(treatmentRepository.treatments[0].name).toBe("New Name");
        });

        it("should return an error if the treatment does not exist", async () => {
            const result = await service.update("non-existent-id", {
                name: "New Name",
            });

            expect(result.value).toBeUndefined();
            expect(result.error).toBe("Treatment not found");
        });

        it("should return an error if updateTreatment fails", async () => {
            const treatment: Treatment = {
                treatmentId: "treat-1",
                userId: user.userId,
                name: "Old Name",
                description: "Old Description",
                startAt: new Date(),
                endAt: null,
                medications: [],
            };
            treatmentRepository.treatments.push(treatment);
            treatmentRepository.updateTreatment.mockRejectedValue(new Error("DB error"));

            const result = await service.update("treat-1", {
                name: "New Name",
            });

            expect(result.value).toBeUndefined();
            expect(result.error).toBe("Failed to update treatment");
        });
    });

    describe("reset", () => {
        it("should reset a treatment", async () => {
            const treatment: Treatment = {
                treatmentId: "treat-1",
                userId: user.userId,
                name: "Treatment",
                description: "Description",
                startAt: new Date(),
                endAt: null,
                medications: [{
                    medicationId: 'med-1',
                    name: 'med-name',
                    dose: '1 pill',
                    alertPeriodInMinutes: 60,
                    lastTaken: new Date(),
                    takenQuantity: 1,
                    totalQuantity: 10,
                    visualType: null,
                }],
            };
            treatmentRepository.treatments.push(treatment);
            treatmentMedicationRepository.treatmentMedications.push({
                id: "tm-1",
                treatmentId: "treat-1",
                medicationId: "med-1",
                dose: "1 pill",
                alertPeriodInMinutes: 60,
                lastTaken: new Date(),
                takenQuantity: 1,
                totalQuantity: 10,
                visualTypeId: null
            })

            const result = await service.reset("treat-1");

            expect(result.error).toBeUndefined();
            expect(treatmentMedicationRepository.treatmentMedications[0].takenQuantity).toBe(0);
            expect(treatmentMedicationRepository.treatmentMedications[0].lastTaken).toBe(null);
        });

        it("should return an error if the treatment does not exist", async () => {
            const result = await service.reset("non-existent-id");

            expect(result.value).toBeUndefined();
            expect(result.error).toBe("Treatment not found");
        });

        it("should return an error if resetAll fails", async () => {
            const treatment: Treatment = {
                treatmentId: "treat-1",
                userId: user.userId,
                name: "Treatment",
                description: "Description",
                startAt: new Date(),
                endAt: null,
                medications: [],
            };
            treatmentRepository.treatments.push(treatment);
            treatmentMedicationRepository.resetAll.mockRejectedValue(new Error("DB error"));

            const result = await service.reset("treat-1");

            expect(result.value).toBeUndefined();
            expect(result.error).toBe("Failed to reset treatment");
        });
    });

    describe("delete", () => {
        it("should delete a treatment", async () => {
            const treatment: Treatment = {
                treatmentId: "treat-1",
                userId: user.userId,
                name: "Treatment",
                description: "Description",
                startAt: new Date(),
                endAt: null,
                medications: [],
            };
            treatmentRepository.treatments.push(treatment);

            const result = await service.delete("treat-1");

            expect(result.error).toBeUndefined();
            expect(result.value).toEqual(treatment);
            expect(treatmentRepository.treatments).toHaveLength(0);
        });

        it("should return an error if the treatment does not exist", async () => {
            const result = await service.delete("non-existent-id");

            expect(result.value).toBeUndefined();
            expect(result.error).toBe("Treatment not found");
        });

        it("should return an error if deleteTreatment fails", async () => {
            const treatment: Treatment = {
                treatmentId: "treat-1",
                userId: user.userId,
                name: "Treatment",
                description: "Description",
                startAt: new Date(),
                endAt: null,
                medications: [],
            };
            treatmentRepository.treatments.push(treatment);
            treatmentRepository.deleteTreatment.mockRejectedValue(new Error("DB error"));

            const result = await service.delete("treat-1");

            expect(result.value).toBeUndefined();
            expect(result.error).toBe("Failed to delete treatment");
        });
    });
});
