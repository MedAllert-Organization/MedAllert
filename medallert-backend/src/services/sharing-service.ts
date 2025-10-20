import { SharingRepository } from "../repositories/sharing.js";
import { defaultUsersRepository } from "../repositories/users.js";
import { defaultMedicationRepository } from "../repositories/medications.js";
import { defaultSharingRepository } from "../repositories/sharing.js";

export class SharingService {
  constructor(
    private readonly sharingRepository: SharingRepository,
    private readonly usersRepository: typeof defaultUsersRepository,
    private readonly medicationRepository: typeof defaultMedicationRepository
  ) {}

  async shareMedication(ownerId: string, medicationId: string, sharedWithEmail: string): Promise<[boolean, string | null]> {
    try {
      const sharedWithUser = await this.usersRepository.findAnyUserByEmail(sharedWithEmail);

      if (!sharedWithUser) {
        return [false, "User to share with not found"];
      }

      if (sharedWithUser.userId === ownerId) {
        return [false, "You cannot share a medication with yourself"];
      }

      const medication = await this.medicationRepository.findMedication(medicationId);

      if (!medication || medication.userId !== ownerId) {
        return [false, "Medication not found or you are not the owner"];
      }

      const existingShare = await this.sharingRepository.find(medicationId, sharedWithUser.userId);

      if (existingShare) {
        return [false, "Medication already shared with this user"];
      }

      await this.sharingRepository.share(medicationId, sharedWithUser.userId);
      return [true, null];
    } catch (error) {
        return [false, error instanceof Error ? error.message : "An unexpected error occurred"];
    }
  }

  async removeSharing(ownerId: string, medicationId: string, sharedWithUserId: string): Promise<[boolean, string | null]> {
    try {
      const medication = await this.medicationRepository.findMedication(medicationId);

      if (!medication || medication.userId !== ownerId) {
        return [false, "Medication not found or you are not the owner"];
      }

      await this.sharingRepository.remove(medicationId, sharedWithUserId);
      return [true, null];
    } catch (error) {
        return [false, error instanceof Error ? error.message : "An unexpected error occurred"];
    }
  }

  async listSharedUsers(ownerId: string, medicationId: string): Promise<[boolean, string | null, any[] | null]> {
    try {
      const medication = await this.medicationRepository.findMedication(medicationId);

      if (!medication || medication.userId !== ownerId) {
        return [false, "Medication not found or you are not the owner", null];
      }

      const users = await this.sharingRepository.findUsersByMedication(medicationId);
      return [true, null, users];
    } catch (error) {
        return [false, error instanceof Error ? error.message : "An unexpected error occurred", null];
    }
  }

  async listSharedMedications(userId: string): Promise<[boolean, string | null, any[] | null]> {
    try {
      const medications = await this.sharingRepository.findMedicationsByUser(userId);
      return [true, null, medications];
    } catch (error) {
        return [false, error instanceof Error ? error.message : "An unexpected error occurred", null];
    }
  }
}

export const sharingService = new SharingService(
  defaultSharingRepository,
  defaultUsersRepository,
  defaultMedicationRepository
);