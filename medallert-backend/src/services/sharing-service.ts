import { t as Try } from "try";
import { defaultMedicationRepository } from "../repositories/medications.js";
import {
  defaultSharingRepository,
  type SharingRepository,
} from "../repositories/sharing.js";
import { defaultUsersRepository } from "../repositories/users.js";

export class SharingService {
  constructor(
    private readonly sharingRepository: SharingRepository,
    private readonly usersRepository: typeof defaultUsersRepository,
    private readonly medicationRepository: typeof defaultMedicationRepository,
  ) {}

  async shareMedication(
    ownerId: string,
    medicationId: string,
    sharedWithEmail: string,
  ) {
    return await Try(async () => {
      const sharedWithUser =
        await this.usersRepository.findAnyUserByEmail(sharedWithEmail);

      if (!sharedWithUser) {
        throw new Error("User to share with not found");
      }

      if (sharedWithUser.userId === ownerId) {
        throw new Error("You cannot share a medication with yourself");
      }

      const medication =
        await this.medicationRepository.findMedication(medicationId);

      if (!medication || medication.userId !== ownerId) {
        throw new Error("Medication not found or you are not the owner");
      }

      const existingShare = await this.sharingRepository.find(
        medicationId,
        sharedWithUser.userId,
      );

      if (existingShare) {
        throw new Error("Medication already shared with this user");
      }

      await this.sharingRepository.share(medicationId, sharedWithUser.userId);
    });
  }

  async removeSharing(
    ownerId: string,
    medicationId: string,
    sharedWithUserId: string,
  ) {
    return await Try(async () => {
      const medication =
        await this.medicationRepository.findMedication(medicationId);

      if (!medication || medication.userId !== ownerId) {
        throw new Error("Medication not found or you are not the owner");
      }

      await this.sharingRepository.remove(medicationId, sharedWithUserId);
    });
  }

  async listSharedUsers(ownerId: string, medicationId: string) {
    return await Try(async () => {
      const medication =
        await this.medicationRepository.findMedication(medicationId);

      if (!medication || medication.userId !== ownerId) {
        throw new Error("Medication not found or you are not the owner");
      }

      return await this.sharingRepository.findUsersByMedication(medicationId);
    });
  }

  async listSharedMedications(userId: string) {
    return await Try(async () => {
      return await this.sharingRepository.findMedicationsByUser(userId);
    });
  }
}

export const sharingService = new SharingService(
  defaultSharingRepository,
  defaultUsersRepository,
  defaultMedicationRepository,
);
