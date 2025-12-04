import { beforeEach, describe, expect, test } from "@jest/globals";
import { MockPrisma } from "../_mocks/mock-prisma.js";
import { PrismaUsersRepository, type User } from "../../repositories/users.js";

describe("PrismaUsersRepository", () => {
  let repository: PrismaUsersRepository;
  let mockPrisma: MockPrisma;

  beforeEach(() => {
    mockPrisma = new MockPrisma();
    repository = new PrismaUsersRepository(mockPrisma as any);
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

  test("findAnyUserByEmail: should return a user when found", async () => {
    mockPrisma.users.users.push(user);
    const result = await repository.findAnyUserByEmail(user.email);
    expect(result).toEqual(user);
  });

  test("findAnyUserByEmail: should return null when not found", async () => {
    const result = await repository.findAnyUserByEmail("non.existent@example.com");
    expect(result).toBeNull();
  });

  test("findConfirmedUserByEmail: should return a confirmed user when found", async () => {
    mockPrisma.users.users.push(user);
    const result = await repository.findConfirmedUserByEmail(user.email);
    expect(result).toEqual(user);
  });

  test("findConfirmedUserByEmail: should return null for an unconfirmed user", async () => {
    const unconfirmedUser = { ...user, accountConfirmedAt: null, email: "unconfirmed@email.com" };
    mockPrisma.users.users.push(unconfirmedUser);

    const result = await repository.findConfirmedUserByEmail(unconfirmedUser.email);
    expect(result).toBeNull();
  });

  test("findUser: should return a user when found by ID", async () => {
    mockPrisma.users.users.push(user);
    const result = await repository.findUser(user.userId);
    expect(result).toEqual(user);
  });

  test("findUser: should return null when not found by ID", async () => {
    const result = await repository.findUser("non-existent-id");
    expect(result).toBeNull();
  });

  test("addUser: should create and return a new user", async () => {
    const newUser = {
      fullName: "Jane Doe",
      email: "jane.doe@example.com",
      hash: "new-hashed-password",
      phone: "0987654321",
    };
    const result = await repository.addUser(newUser);
    expect(result).toEqual(expect.objectContaining(newUser));
  });

  test("updatePasswordForUser: should update the user's password hash", async () => {
    mockPrisma.users.users.push(user);
    const newPasswordHash = "new-strong-password-hash";
    await repository.updatePasswordForUser(user.userId, newPasswordHash);

    const updatedUser = await mockPrisma.users.findUnique({
      where: { userId: user.userId },
    });
    expect(updatedUser?.hash).toBe(newPasswordHash);
  });

  test("confirmUserAccount: should set the accountConfirmedAt date", async () => {
    const unconfirmedUser = { ...user, accountConfirmedAt: null };
    mockPrisma.users.users.push(unconfirmedUser);
    await repository.confirmUserAccount(user.email);

    const updatedUser = await mockPrisma.users.findUnique({
      where: { email: user.email },
    });
    expect(updatedUser?.accountConfirmedAt).not.toBeNull();
  });

  test("deleteUser: should remove the user and associated data", async () => {
    mockPrisma.users.users.push(user);
    await repository.deleteUser(user.userId);
    const result = await mockPrisma.users.findUnique({
      where: { userId: user.userId },
    });
    expect(result).toBeNull();
  });

  test("getUserTimezone: should return the user's timezone", async () => {
    const timezone = { id: "tz-1", name: "America/Sao_Paulo", label: "(GMT-03:00) Sao Paulo", utcOffset: -3 };
    mockPrisma.timezones.push(timezone as any);
    mockPrisma.users.users.push(user);

    const result = await repository.getUserTimezone(user.userId);
    expect(result).toEqual(timezone);
  });

  test("getUserTimezone: should return null if the user has no timezone", async () => {
    const userWithoutTimezone = { ...user, timezoneId: null };
    mockPrisma.users.users.push(userWithoutTimezone);
    const result = await repository.getUserTimezone(user.userId);
    expect(result).toBeNull();
  });
});