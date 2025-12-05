import { t as Try } from "try";
import {
  defaultSharingRepository,
  type SharingRepository,
} from "../repositories/sharing.js";
import { defaultUsersRepository, type UsersRepository } from "../repositories/users.js";
import { defaultTreatmentRepository, type TreatmentRepository } from "../repositories/treatments.js";

export class SharingService {
  constructor(
    private readonly sharingRepository: SharingRepository,
    private readonly usersRepository: UsersRepository,
    private readonly treatmentRepository: TreatmentRepository,
  ) {}

  async shareTreatment(
    ownerId: string,
    treatmentId: string,
    sharedWithEmail: string,
  ) {
    return await Try(async () => {
      const sharedWithUser =
        await this.usersRepository.findAnyUserByEmail(sharedWithEmail);

      if (!sharedWithUser) {
        throw new Error("User to share with not found");
      }

      if (sharedWithUser.userId === ownerId) {
        throw new Error("You cannot share a treatment with yourself");
      }

      const treatment =
        await this.treatmentRepository.findTreatment(treatmentId);

      if (!treatment || treatment.userId !== ownerId) {
        throw new Error("Treatment not found or you are not the owner");
      }

      const existingShare = await this.sharingRepository.find(
        treatmentId,
        sharedWithUser.userId,
      );

      if (existingShare) {
        throw new Error("Treatment already shared with this user");
      }

      await this.sharingRepository.share(treatmentId, sharedWithUser.userId);
    });
  }

  async removeSharing(
    ownerId: string,
    treatmentId: string,
    sharedWithUserId: string,
  ) {
    return await Try(async () => {
      const treatment =
        await this.treatmentRepository.findTreatment(treatmentId);

      if (!treatment || treatment.userId !== ownerId) {
        throw new Error("Treatment not found or you are not the owner");
      }

      await this.sharingRepository.remove(treatmentId, sharedWithUserId);
    });
  }

  async listSharedUsers(ownerId: string, treatmentId: string) {
    return await Try(async () => {
      const treatment =
        await this.treatmentRepository.findTreatment(treatmentId);

      if (!treatment || treatment.userId !== ownerId) {
        throw new Error("Treatment not found or you are not the owner");
      }

      return await this.sharingRepository.findUsersByTreatment(treatmentId);
    });
  }

  async listSharedTreatments(userId: string) {
    return await Try(async () => {
      return await this.sharingRepository.findTreatmentsByUser(userId);
    });
  }

  async removeAllSharingsFromOwner(ownerId: string) {
    return await Try(async () => {
      await this.sharingRepository.removeAllFromOwner(ownerId);
    });
  }
}

export const sharingService = new SharingService(
  defaultSharingRepository,
  defaultUsersRepository,
  defaultTreatmentRepository,
);
