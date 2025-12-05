import { jest } from "@jest/globals";
import type {
  Medication,
  MedicationRepository,
} from "../../repositories/medications.js";

export class MockMedicationRepository implements MedicationRepository {
  public medications: Medication[] = [];

  findMedications = jest.fn(
    async (medicationIds: string[]): Promise<Medication[]> => {
      return this.medications.filter((medication) =>
        medicationIds.includes(medication.medicationId),
      );
    },
  );

  findMedication = jest.fn(
    async (id: string): Promise<Medication | null> => {
      return (
        this.medications.find(
          (medication) => medication.medicationId === id,
        ) || null
      );
    },
  );

  findAllMedications = jest.fn(
    async (userId: string): Promise<Medication[]> => {
      return this.medications.filter(
        (medication) => medication.userId === userId,
      );
    },
  );

  addMedication = jest.fn(
    async (newMedication: {
      userId: string;
      name: string;
      description: string | null;
      soundTypeId: string | null;
    }): Promise<Medication | null> => {
      const medication: Medication = {
        medicationId: `medication-${this.medications.length + 1}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...newMedication,
      };
      this.medications.push(medication);
      return medication;
    },
  );

  updateMedication = jest.fn(
    async (
      id: string,
      updateMedication: {
        name?: string | null;
        description?: string | null;
        soundTypeId?: string | null;
        endTreatmentAt?: Date | null;
      },
    ): Promise<Medication | null> => {
      const medicationIndex = this.medications.findIndex(
        (medication) => medication.medicationId === id,
      );
      if (medicationIndex === -1) {
        return null;
      }
      
      const currentMedication = this.medications[medicationIndex];
      
      const updatedMedication: Medication = {
        ...currentMedication,
        description: updateMedication.description ?? currentMedication.description,
        soundTypeId: updateMedication.soundTypeId ?? currentMedication.soundTypeId,
        updatedAt: new Date(),
      };

      if (updateMedication.name) {
        updatedMedication.name = updateMedication.name;
      }

      this.medications[medicationIndex] = updatedMedication;
      return updatedMedication;
    },
  );

  deleteMedication = jest.fn(
    async (id: string): Promise<Medication | null> => {
      const medicationIndex = this.medications.findIndex(
        (medication) => medication.medicationId === id,
      );
      if (medicationIndex === -1) {
        return null;
      }
      const [deletedMedication] = this.medications.splice(medicationIndex, 1);
      return deletedMedication;
    },
  );
}