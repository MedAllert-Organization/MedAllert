import { jest } from "@jest/globals";
import type {
  MedicationProgress,
  TreatmentMedication,
  TreatmentMedicationRepository,
} from "../../repositories/treatmentMedication.js";

export class MockTreatmentMedicationRepository
  implements TreatmentMedicationRepository
{
  treatmentMedications: TreatmentMedication[] = [];
  private shouldThrow = false;
  private errorMessage = "";

  updateTreatmentMedicationCalledWith: { id: string; data: any } | null = null;

  findTodayMedicationsByUser = jest.fn(async (userId: string): Promise<any[]> => {
    throw new Error("Method not implemented.");
  });

  addTreatmentMedications = jest.fn(async (data: TreatmentMedication[]): Promise<void> => {
    if (this.shouldThrow) {
      throw new Error(this.errorMessage);
    }
    this.treatmentMedications.push(...data);
  });

  getByTreatment = jest.fn(async (treatmentId: string): Promise<TreatmentMedication[]> => {
    if (this.shouldThrow) {
      throw new Error(this.errorMessage);
    }
    return this.treatmentMedications.filter(tm => tm.treatmentId === treatmentId);
  });

  updateTreatmentMedication = jest.fn(async (
    treatmentMedicationId: string,
    updateData: Partial<
      Omit<TreatmentMedication, "treatmentId" | "medicationId">
    >,
  ): Promise<TreatmentMedication | null> => {
    if (this.shouldThrow) {
        throw new Error(this.errorMessage);
    }
    this.updateTreatmentMedicationCalledWith = {
      id: treatmentMedicationId,
      data: updateData,
    };
    const index = this.treatmentMedications.findIndex(tm => tm.id === treatmentMedicationId);
    if(index === -1) return null;

    this.treatmentMedications[index] = { ...this.treatmentMedications[index], ...updateData};

    return this.treatmentMedications[index];
  });

  deleteTreatmentMedications = jest.fn(async (treatmentId: string): Promise<void> => {
    if (this.shouldThrow) {
        throw new Error(this.errorMessage);
    }
    this.treatmentMedications = this.treatmentMedications.filter(tm => tm.treatmentId !== treatmentId);
  });

  deleteTreatmentMedication = jest.fn(async (
    treatmentId: string,
    medicationId: string,
  ): Promise<void> => {
    if (this.shouldThrow) {
        throw new Error(this.errorMessage);
    }
    this.treatmentMedications = this.treatmentMedications.filter(tm => tm.treatmentId !== treatmentId || tm.medicationId !== medicationId);
  });

  getByMedication = jest.fn(async (
    medicationId: string,
  ): Promise<{ id: string; name: string; description: string | null }[]> => {
    throw new Error("Method not implemented.");
  });

  updateProgress = jest.fn(async (
    treatmentId: string,
    medicationId: string,
    progress: MedicationProgress,
  ): Promise<TreatmentMedication | null> => {
    throw new Error("Method not implemented.");
  });

  resetAll = jest.fn(async (treatmentId: string): Promise<void> => {
    if (this.shouldThrow) {
        throw new Error(this.errorMessage);
    }
    this.treatmentMedications.forEach(tm => {
        if(tm.treatmentId === treatmentId) {
            tm.takenQuantity = 0;
            tm.lastTaken = null;
        }
    })
  });

  reset() {
    this.updateTreatmentMedicationCalledWith = null;
    this.treatmentMedications = [];
  }

  setShouldThrowError(shouldThrow: boolean, errorMessage: string) {
    this.shouldThrow = shouldThrow;
    this.errorMessage = errorMessage;
  }
}