import { beforeEach, describe, expect, test } from "@jest/globals";
import { UserService } from "../../services/user-service.js";
import { MockUsersRepository } from "../_mocks/mock-users-repository.js";


describe("UserService - deleteUser", () => {
  let service: UserService;
  let usersRepository: MockUsersRepository;

  beforeEach(() => {
    usersRepository = new MockUsersRepository();
    service = new UserService(usersRepository);
  });

  test("should delete user successfully", async () => {
    const userId = "user-123";

    await expect(service.deleteUser(userId)).resolves.toBeUndefined();
    expect(usersRepository.deleteUserCalledWith).toBe(userId);
  });

  test("should throw an error if user does not exist", async () => {
    const userId = "non-existing-user";
    const errorMessage = "User not found";
    usersRepository.setShouldThrowError(true, errorMessage);

    await expect(service.deleteUser(userId)).rejects.toThrow(errorMessage);
    expect(usersRepository.deleteUserCalledWith).toBe(userId);
  });
});
