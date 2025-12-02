import { test, expect, jest, describe, beforeEach } from '@jest/globals';
import { UserService } from '../../services/user-service.js';
import type { UsersRepository } from '../../repositories/users.js';

describe('UserService - deleteUser', () => {
  let mockUsersRepository: jest.Mocked<UsersRepository>;
  let service: UserService;

  beforeEach(() => {
    mockUsersRepository = {
      deleteUser: jest.fn(),
    } as any;
    service = new UserService(mockUsersRepository);
  });

  test('should delete user successfully', async () => {
    const userId = 'user-123';
    mockUsersRepository.deleteUser.mockResolvedValue(undefined);

    await expect(service.deleteUser(userId)).resolves.toBeUndefined();
    expect(mockUsersRepository.deleteUser).toHaveBeenCalledWith(userId);
    expect(mockUsersRepository.deleteUser).toHaveBeenCalledTimes(1);
  });

  test('should throw an error if user does not exist', async () => {
    const userId = 'non-existing-user';
    const errorMessage = 'User not found';
    mockUsersRepository.deleteUser.mockRejectedValue(new Error(errorMessage));

    await expect(service.deleteUser(userId)).rejects.toThrow(errorMessage);
    expect(mockUsersRepository.deleteUser).toHaveBeenCalledWith(userId);
    expect(mockUsersRepository.deleteUser).toHaveBeenCalledTimes(1);
  });

  test('should throw an error if repository fails', async () => {
    const userId = 'user-123';
    const errorMessage = 'Database error';
    mockUsersRepository.deleteUser.mockRejectedValue(new Error(errorMessage));

    await expect(service.deleteUser(userId)).rejects.toThrow(errorMessage);
    expect(mockUsersRepository.deleteUser).toHaveBeenCalledWith(userId);
    expect(mockUsersRepository.deleteUser).toHaveBeenCalledTimes(1);
  });
});
