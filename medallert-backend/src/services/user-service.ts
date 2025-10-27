import { defaultUsersRepository, type UsersRepository } from "../repositories/users.js";

export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async deleteUser(userId: string): Promise<void> {
    await this.usersRepository.deleteUser(userId);
  }
}

export const defaultUserService = new UserService(defaultUsersRepository);
