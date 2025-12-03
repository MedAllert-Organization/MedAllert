import { beforeEach, describe, expect, test } from "@jest/globals";
import type { User, UsersRepository } from "../../repositories/users.js";
import { UserService } from "../../services/user-service.js";

class MockUsersRepository implements UsersRepository {
  private users: User[] = [];
  public deleteUserCalledWith: string | null = null;
  private shouldThrowError = false;
  private errorMessage = "User not found";

  findAnyUserByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  findConfirmedUserByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  findUser(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  addUser(newUser: { fullName: string; email: string; hash: string; phone: string; }): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  updatePasswordForUser(userId: string, newPassword: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  confirmUserAccount(email: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async deleteUser(userId: string): Promise<void> {
    this.deleteUserCalledWith = userId;
    if (this.shouldThrowError) {
      throw new Error(this.errorMessage);
    }
    const userIndex = this.users.findIndex(u => u.userId === userId);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
      return Promise.resolve();
    }
  }

  reset() {
    this.users = [];
    this.deleteUserCalledWith = null;
    this.shouldThrowError = false;
  }

  setShouldThrowError(shouldThrow: boolean, message?: string) {
    this.shouldThrowError = shouldThrow;
    if (message) {
      this.errorMessage = message;
    }
  }
}


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
