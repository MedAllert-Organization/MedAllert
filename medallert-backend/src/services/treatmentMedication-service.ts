import { error, ok } from "try";
import type { TreatmentMedication, TreatmentMedicationRepository } from "../repositories/treatmentMedication.js";

export class TreatmentMedicationService {
  constructor(private readonly repository: TreatmentMedicationRepository) {}

  async getByTreatment(treatmentId: string) {
    try {
      const medications = await this.repository.getByTreatment(treatmentId);
      return ok(medications);
    } catch (err) {
      console.error("Erro ao buscar medicações do tratamento:", err);
      return error("Failed to get treatment medications");
    }
  }

  async getTodayMedications(userId: string) {
    const medications = await this.repository.findTodayMedicationsByUser(userId);
    return ok(medications);
  }

  async addMedications(medications: TreatmentMedication[]) {
    try {
      await this.repository.addTreatmentMedications(medications);
      return ok(true);
    } catch (err) {
      console.error("Erro ao adicionar medicações:", err);
      return error("Failed to add treatment medications");
    }
  }

  async updateMedication(
    treatmentId: string,
    medicationId: string,
    updateData: Partial<Omit<TreatmentMedication, "treatmentId" | "medicationId">>
  ) {
    try {
      const updated = await this.repository.updateTreatmentMedication(treatmentId, medicationId, updateData);
      if (!updated) return error("Medication not found");
      return ok(updated);
    } catch (err) {
      console.error("Erro ao atualizar medicação:", err);
      return error("Failed to update medication");
    }
  }

  async deleteMedication(treatmentId: string, medicationId: string) {
    try {
      await this.repository.deleteTreatmentMedication(treatmentId, medicationId);
      return ok(true);
    } catch (err) {
      console.error("Erro ao deletar medicação:", err);
      return error("Failed to delete medication");
    }
  }
}
