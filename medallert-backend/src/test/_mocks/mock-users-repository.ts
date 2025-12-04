import { jest } from "@jest/globals";
import type { Timezone } from "../../infra/prisma/generated/prisma/index.js";
import type { User, UsersRepository } from "../../repositories/users.js";

export class MockUsersRepository implements UsersRepository {
  users: User[] = [];
  timezones: Timezone[] = [];
  deleteUserCalledWith: string | null = null;
  private shouldThrow = false;
  private errorMessage = "";

  findAnyUserByEmail = jest.fn(async (email: string): Promise<User | null> => {
    return this.users.find((user) => user.email === email) || null;
  });

  findConfirmedUserByEmail = jest.fn(
    async (email: string): Promise<User | null> => {
      return (
        this.users.find(
          (user) => user.email === email && user.accountConfirmedAt !== null,
        ) || null
      );
    },
  );

  findUser = jest.fn(async (id: string): Promise<User | null> => {
    return this.users.find((user) => user.userId === id) || null;
  });

  addUser = jest.fn(
    async (newUser: {
      fullName: string;
      email: string;
      hash: string;
      phone: string;
    }): Promise<User | null> => {
      const user: User = {
        userId: `user-${this.users.length + 1}`,
        ...newUser,
        timezoneId: null,
        image: null,
        acceptedTosAt: new Date(),
        accountConfirmedAt: null,
      };
      this.users.push(user);
      return user;
    },
  );

  updatePasswordForUser = jest.fn(
    async (userId: string, newPassword: string): Promise<void> => {
      const user = this.users.find((user) => user.userId === userId);
      if (user) {
        user.hash = newPassword;
      }
    },
  );

  confirmUserAccount = jest.fn(async (email: string): Promise<void> => {
    const user = this.users.find((user) => user.email === email);
    if (user) {
      user.accountConfirmedAt = new Date();
    }
  });

  deleteUser = jest.fn(async (userId: string): Promise<void> => {
    this.deleteUserCalledWith = userId;
    if (this.shouldThrow) {
      throw new Error(this.errorMessage);
    }
    const index = this.users.findIndex((user) => user.userId === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  });

  getUserTimezone = jest.fn(
    async (userId: string): Promise<Timezone | null> => {
      const user = this.users.find((user) => user.userId === userId);
      if (user?.timezoneId) {
        return (
          this.timezones.find((tz) => tz.id === user.timezoneId) ||
          null
        );
      }
      return null;
    },
  );

  setShouldThrowError(shouldThrow: boolean, errorMessage: string) {
    this.shouldThrow = shouldThrow;
    this.errorMessage = errorMessage;
  }
}
