import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { PasswordRecoveryService } from "../../services/password-recovery.js";
import { MockEmailTransport } from "../_mocks/mock-email-transport.js";
import { MockPasswordHasher } from "../_mocks/mock-password-hasher.js";
import { MockUsersRepository } from "../_mocks/mock-users-repository.js";
import { MockVerificationCodeRepository } from "../_mocks/mock-verification-code-repository.js";

describe("PasswordRecoveryService", () => {
  let service: PasswordRecoveryService;
  let codeRepo: MockVerificationCodeRepository;
  let hasher: MockPasswordHasher;
  let usersRepo: MockUsersRepository;
  let emailTransport: MockEmailTransport;

  beforeEach(() => {
    codeRepo = new MockVerificationCodeRepository();
    hasher = new MockPasswordHasher();
    usersRepo = new MockUsersRepository();
    emailTransport = new MockEmailTransport();
    service = new PasswordRecoveryService(
      codeRepo,
      hasher,
      usersRepo,
      emailTransport,
    );

    usersRepo.users.push({
      userId: "user-1",
      email: "test@example.com",
      fullName: "Test User",
      phone: "123456789",
      hash: "old-hash",
      timezoneId: null,
      image: null,
      acceptedTosAt: new Date(),
      accountConfirmedAt: new Date(),
    });
  });

  describe("createAndSendRecoveryCode", () => {
    test("should successfully create code and send email", async () => {
      const result =
        await service.createAndSendRecoveryCode("test@example.com");
      const [ok, _error, _value] = result;

      expect(ok).toBe(true);
      expect(codeRepo.codes).toHaveLength(1);
      expect(codeRepo.codes[0].userId).toBe("user-1");
      expect(emailTransport.sentEmails).toHaveLength(1);
      expect(emailTransport.sentEmails[0].to).toBe("test@example.com");
      expect(emailTransport.sentEmails[0].body).toContain(
        codeRepo.codes[0].value,
      );
    });

    test("should fail if user not found", async () => {
      const result = await service.createAndSendRecoveryCode(
        "nonexistent@example.com",
      );
      const [ok, error, _value] = result;

      expect(ok).toBe(false);
      expect(error).toBe("Failed to find user");
      expect(codeRepo.codes).toHaveLength(0);
      expect(emailTransport.sentEmails).toHaveLength(0);
    });

    test("should fail if cannot generate next code (rate limit)", async () => {
      codeRepo.canGenerate = false;
      const result =
        await service.createAndSendRecoveryCode("test@example.com");
      const [ok, error, _value] = result;

      expect(ok).toBe(false);
      expect(error).toBe(
        "cannot generate another recovery code yet, wait and try again",
      );
      expect(codeRepo.codes).toHaveLength(0);
    });

    test("should fail if code generation fails", async () => {
      codeRepo.shouldFailGenerate = true;
      const result =
        await service.createAndSendRecoveryCode("test@example.com");
      const [ok, error, _value] = result;

      expect(ok).toBe(false);
      expect(error).toBe("failed to create code");
    });

    test("should fail if email sending fails", async () => {
      emailTransport.shouldFail = true;
      const result =
        await service.createAndSendRecoveryCode("test@example.com");
      const [ok, error, _value] = result;

      expect(ok).toBe(false);
      expect(error).toBe("failed to send email");
    });
  });

  describe("confirmCodeAndChangePassword", () => {
    beforeEach(async () => {
      await codeRepo.generateCode("user-1", "RECOVERY");
    });

    test("should successfully confirm code and change password", async () => {
      const result = await service.confirmCodeAndChangePassword({
        email: "test@example.com",
        code: "123456",
        newPassword: "NewPassword123",
      });
      const [ok, _error, value] = result;

      expect(ok).toBe(true);
      expect(value).toBe("Successfully changed password");

      const user = await usersRepo.findUser("user-1");
      expect(user?.hash).toBe("hashed-NewPassword123");

      const code = codeRepo.codes[0];
      expect(code.confirmedAt).not.toBeNull();
    });

    test("should fail if user not found", async () => {
      const result = await service.confirmCodeAndChangePassword({
        email: "nonexistent@example.com",
        code: "123456",
        newPassword: "NewPassword123",
      });
      const [ok, error, _value] = result;

      expect(ok).toBe(false);
      expect(error).toBe("Failed to find user");
    });

    test("should fail if code confirmation fails (invalid code)", async () => {
      codeRepo.shouldFailConfirm = true;
      const result = await service.confirmCodeAndChangePassword({
        email: "test@example.com",
        code: "wrong-code",
        newPassword: "NewPassword123",
      });
      const [ok, error, _value] = result;

      expect(ok).toBe(false);
      expect(error).toBe("could not confirm code");
    });

    test("should fail if hashing fails", async () => {
      hasher.shouldFailHash = true;
      const result = await service.confirmCodeAndChangePassword({
        email: "test@example.com",
        code: "123456",
        newPassword: "NewPassword123",
      });
      const [ok, error, _value] = result;

      expect(ok).toBe(false);
      expect(error).toBe("could not hash password");
    });

    test("should fail if password update fails", async () => {
      (usersRepo.updatePasswordForUser as jest.Mock).mockImplementationOnce(
        () => Promise.reject(new Error("Update failed")),
      );
      const result = await service.confirmCodeAndChangePassword({
        email: "test@example.com",
        code: "123456",
        newPassword: "NewPassword123",
      });
      const [ok, error, _value] = result;

      expect(ok).toBe(false);
      expect(error).toBe("could not update password");
    });
  });
});
