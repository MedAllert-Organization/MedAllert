import { describe, it, expect, beforeEach } from "@jest/globals";
import { SharingService } from "../../services/sharing-service.js";
import { MockSharingRepository } from "../_mocks/mock-sharing-repository.js";
import { MockUsersRepository } from "../_mocks/mock-users-repository.js";
import { MockTreatmentRepository } from "../_mocks/mock-treatment-repository.js";

describe("SharingService", () => {
  let sharingService: SharingService;
  let mockSharingRepository: MockSharingRepository;
  let mockUsersRepository: MockUsersRepository;
  let mockTreatmentRepository: MockTreatmentRepository;

  beforeEach(() => {
    mockSharingRepository = new MockSharingRepository();
    mockUsersRepository = new MockUsersRepository();
    mockTreatmentRepository = new MockTreatmentRepository();

    sharingService = new SharingService(
      mockSharingRepository,
      mockUsersRepository,
      mockTreatmentRepository,
    );
  });

  describe("shareTreatment", () => {
    it("should share a treatment successfully", async () => {
      const ownerId = "owner-1";
      const sharedWithEmail = "friend@example.com";

      await mockUsersRepository.addUser({
        fullName: "Friend",
        email: sharedWithEmail,
        hash: "hash",
        phone: "123",
      });

      const sharedUser =
        await mockUsersRepository.findAnyUserByEmail(sharedWithEmail);
      expect(sharedUser).not.toBeNull();

      await mockTreatmentRepository.addTreatment({
        userId: ownerId,
        name: "Treatment 1",
        description: "Desc",
        startAt: new Date(),
        endAt: null,
        medications: [],
      });

      const treatment = (
        await mockTreatmentRepository.findAllTreatments(ownerId)
      )[0];
      expect(treatment).toBeDefined();

      const result = await sharingService.shareTreatment(
        ownerId,
        treatment.treatmentId,
        sharedWithEmail,
      );

      expect(result.error).toBeUndefined();
      expect(mockSharingRepository.share).toHaveBeenCalledWith(
        treatment.treatmentId,
        sharedUser!.userId,
      );
    });

    it("should fail if user to share with is not found", async () => {
      const result = await sharingService.shareTreatment(
        "owner-1",
        "treatment-1",
        "nonexistent@example.com",
      );

      expect(result.error).toBeDefined();
      expect((result.error as Error).message).toBe(
        "User to share with not found",
      );
    });

    it("should fail if trying to share with yourself", async () => {
      const email = "me@example.com";

      await mockUsersRepository.addUser({
        fullName: "Me",
        email: email,
        hash: "hash",
        phone: "123",
      });

      const user = await mockUsersRepository.findAnyUserByEmail(email);

      const result = await sharingService.shareTreatment(
        user!.userId,
        "treatment-1",
        email,
      );

      expect(result.error).toBeDefined();
      expect((result.error as Error).message).toBe(
        "You cannot share a treatment with yourself",
      );
    });

    it("should fail if treatment not found", async () => {
      const ownerId = "owner-1";
      const sharedWithEmail = "friend@example.com";

      await mockUsersRepository.addUser({
        fullName: "Friend",
        email: sharedWithEmail,
        hash: "hash",
        phone: "123",
      });

      const result = await sharingService.shareTreatment(
        ownerId,
        "nonexistent-treatment",
        sharedWithEmail,
      );

      expect(result.error).toBeDefined();
      expect((result.error as Error).message).toBe(
        "Treatment not found or you are not the owner",
      );
    });

    it("should fail if user is not the owner of the treatment", async () => {
      const ownerId = "owner-1";
      const otherUserId = "other-user";
      const sharedWithEmail = "friend@example.com";

      await mockUsersRepository.addUser({
        fullName: "Friend",
        email: sharedWithEmail,
        hash: "hash",
        phone: "123",
      });

      await mockTreatmentRepository.addTreatment({
        userId: otherUserId,
        name: "Treatment 1",
        description: "Desc",
        startAt: new Date(),
        endAt: null,
        medications: [],
      });
      const treatment = (
        await mockTreatmentRepository.findAllTreatments(otherUserId)
      )[0];

      const result = await sharingService.shareTreatment(
        ownerId,
        treatment.treatmentId,
        sharedWithEmail,
      );

      expect(result.error).toBeDefined();
      expect((result.error as Error).message).toBe(
        "Treatment not found or you are not the owner",
      );
    });

    it("should fail if already shared", async () => {
      const ownerId = "owner-1";
      const sharedWithEmail = "friend@example.com";

      await mockUsersRepository.addUser({
        fullName: "Friend",
        email: sharedWithEmail,
        hash: "hash",
        phone: "123",
      });
      const sharedUser =
        await mockUsersRepository.findAnyUserByEmail(sharedWithEmail);

      await mockTreatmentRepository.addTreatment({
        userId: ownerId,
        name: "Treatment 1",
        description: "Desc",
        startAt: new Date(),
        endAt: null,
        medications: [],
      });
      const treatment = (
        await mockTreatmentRepository.findAllTreatments(ownerId)
      )[0];

      await mockSharingRepository.share(
        treatment.treatmentId,
        sharedUser!.userId,
      );

      const result = await sharingService.shareTreatment(
        ownerId,
        treatment.treatmentId,
        sharedWithEmail,
      );

      expect(result.error).toBeDefined();
      expect((result.error as Error).message).toBe(
        "Treatment already shared with this user",
      );
    });
  });

  describe("removeSharing", () => {
    it("should remove sharing successfully", async () => {
      const ownerId = "owner-1";
      const sharedWithUserId = "user-2";

      await mockTreatmentRepository.addTreatment({
        userId: ownerId,
        name: "Treatment 1",
        description: "Desc",
        startAt: new Date(),
        endAt: null,
        medications: [],
      });
      const treatment = (
        await mockTreatmentRepository.findAllTreatments(ownerId)
      )[0];

      await mockSharingRepository.share(
        treatment.treatmentId,
        sharedWithUserId,
      );

      const result = await sharingService.removeSharing(
        ownerId,
        treatment.treatmentId,
        sharedWithUserId,
      );

      expect(result.error).toBeUndefined();
      expect(mockSharingRepository.remove).toHaveBeenCalledWith(
        treatment.treatmentId,
        sharedWithUserId,
      );
    });

    it("should fail if treatment not found or not owner", async () => {
      const ownerId = "owner-1";
      const sharedWithUserId = "user-2";

      const result = await sharingService.removeSharing(
        ownerId,
        "nonexistent-treatment",
        sharedWithUserId,
      );

      expect(result.error).toBeDefined();
      expect((result.error as Error).message).toBe(
        "Treatment not found or you are not the owner",
      );
    });
  });

  describe("listSharedUsers", () => {
    it("should list shared users successfully", async () => {
      const ownerId = "owner-1";

      await mockTreatmentRepository.addTreatment({
        userId: ownerId,
        name: "Treatment 1",
        description: "Desc",
        startAt: new Date(),
        endAt: null,
        medications: [],
      });
      const treatment = (
        await mockTreatmentRepository.findAllTreatments(ownerId)
      )[0];

      const result = await sharingService.listSharedUsers(
        ownerId,
        treatment.treatmentId,
      );

      expect(result.error).toBeUndefined();
      expect(mockSharingRepository.findUsersByTreatment).toHaveBeenCalledWith(
        treatment.treatmentId,
      );
    });

    it("should fail if treatment not found or not owner", async () => {
      const ownerId = "owner-1";

      const result = await sharingService.listSharedUsers(
        ownerId,
        "nonexistent-treatment",
      );

      expect(result.error).toBeDefined();
      expect((result.error as Error).message).toBe(
        "Treatment not found or you are not the owner",
      );
    });
  });

  describe("listSharedTreatments", () => {
    it("should list shared treatments successfully", async () => {
      const userId = "user-1";

      const result = await sharingService.listSharedTreatments(userId);

      expect(result.error).toBeUndefined();
      expect(mockSharingRepository.findTreatmentsByUser).toHaveBeenCalledWith(
        userId,
      );
    });
  });

  describe("removeAllSharingsFromOwner", () => {
    it("should remove all sharings from owner successfully", async () => {
      const ownerId = "owner-1";

      const result = await sharingService.removeAllSharingsFromOwner(ownerId);

      expect(result.error).toBeUndefined();
      expect(mockSharingRepository.removeAllFromOwner).toHaveBeenCalledWith(
        ownerId,
      );
    });
  });
});
