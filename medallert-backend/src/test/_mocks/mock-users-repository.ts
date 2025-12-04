import type { Timezone } from "../../infra/prisma/generated/prisma/index.js";
import type { User, UsersRepository } from "../../repositories/users.js";

export class MockUsersRepository implements UsersRepository {

  private users: User[] = [];
  public deleteUserCalledWith: string | null = null;
  private shouldThrowError = false;
  private errorMessage = "User not found";
  
  getUserTimezone(userId: string): Promise<Timezone | null> {
    throw new Error("Method not implemented.");
  }
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
