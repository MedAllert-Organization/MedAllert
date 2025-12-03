import type {
  MedicationProgress,
  TreatmentMedication,
  TreatmentMedicationRepository,
} from "../../repositories/treatmentMedication.js";

export class MockTreatmentMedicationRepository
  implements TreatmentMedicationRepository
{
  updateTreatmentMedicationCalledWith: { id: string; data: any } | null = null;

  findTodayMedicationsByUser(userId: string): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
  addTreatmentMedications(data: TreatmentMedication[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getByTreatment(treatmentId: string): Promise<TreatmentMedication[]> {
    throw new Error("Method not implemented.");
  }
  updateTreatmentMedication(
    treatmentMedicationId: string,
    updateData: Partial<
      Omit<TreatmentMedication, "treatmentId" | "medicationId">
    >,
  ): Promise<TreatmentMedication | null> {
    this.updateTreatmentMedicationCalledWith = {
      id: treatmentMedicationId,
      data: updateData,
    };
    return Promise.resolve({} as TreatmentMedication);
  }
  deleteTreatmentMedications(treatmentId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteTreatmentMedication(
    treatmentId: string,
    medicationId: string,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getByMedication(
    medicationId: string,
  ): Promise<{ id: string; name: string; description: string | null }[]> {
    throw new Error("Method not implemented.");
  }
  updateProgress(
    treatmentId: string,
    medicationId: string,
    progress: MedicationProgress,
  ): Promise<TreatmentMedication | null> {
    throw new Error("Method not implemented.");
  }
  resetAll(treatmentId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  reset() {
    this.updateTreatmentMedicationCalledWith = null;
  }
}
