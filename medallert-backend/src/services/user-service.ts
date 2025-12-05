import { defaultUsersRepository, type UsersRepository } from "../repositories/users.js";

export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async deleteUser(userId: string): Promise<void> {
    await this.usersRepository.deleteUser(userId);
  }

  async getUserTimezone(userId: string): Promise<string> {
    const timezone = await this.usersRepository.getUserTimezone(userId);

    return timezone?.name || "UTC";
  }
}

export const defaultUserService = new UserService(defaultUsersRepository);
