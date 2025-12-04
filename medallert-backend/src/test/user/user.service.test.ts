import { beforeEach, describe, expect, test } from "@jest/globals";
import { UserService } from "../../services/user-service.js";
import { MockUsersRepository } from "../_mocks/mock-users-repository.js";
import type { User } from "../../repositories/users.js";
import type { Timezone } from "../../infra/prisma/generated/prisma/index.js";

describe("UserService", () => {
  let service: UserService;
  let repository: MockUsersRepository;

  beforeEach(() => {
    repository = new MockUsersRepository();
    service = new UserService(repository);
  });

  const user: User = {
    userId: "user-123",
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    hash: "hashed-password",
    timezoneId: "tz-1",
    image: null,
    acceptedTosAt: new Date(),
    accountConfirmedAt: new Date(),
  };

  const timezone: Timezone = {
    id: "tz-1",
    name: "America/Sao_Paulo",
    label: "(GMT-03:00) Sao Paulo",
    utcOffset: -3,
  };

  describe("deleteUser", () => {
    test("should call deleteUser on the repository", async () => {
      repository.users.push(user);
      await service.deleteUser(user.userId);
      expect(repository.deleteUser).toHaveBeenCalledWith(user.userId);
    });

    test("should not throw if the user does not exist", async () => {
      await expect(
        service.deleteUser("non-existent-id"),
      ).resolves.not.toThrow();
    });
  });

  describe("getUserTimezone", () => {
    test("should return the user's timezone name when found", async () => {
      repository.users.push(user);
      repository.timezones.push(timezone);

      const result = await service.getUserTimezone(user.userId);

      expect(result).toBe(timezone.name);
    });

    test("should return 'UTC' if the user has no timezone", async () => {
      const userWithoutTimezone = { ...user, timezoneId: null };
      repository.users.push(userWithoutTimezone);

      const result = await service.getUserTimezone(user.userId);

      expect(result).toBe("UTC");
    });

    test("should return 'UTC' if the user does not exist", async () => {
      const result = await service.getUserTimezone("non-existent-id");

      expect(result).toBe("UTC");
    });
  });
});
