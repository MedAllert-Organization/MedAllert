import { test, expect, jest, describe, beforeEach } from '@jest/globals';
import { UserService } from '../../services/user-service.js';
import { PrismaUsersRepository } from '../../repositories/users.js';
import { PrismaClient } from '../../infra/prisma/generated/prisma/index.js';

const mockPrisma = {
  $transaction: jest.fn((operations) => Promise.all(operations)),
  users: {
    delete: jest.fn(),
  },
  medications: {
    findMany: jest.fn(),
    deleteMany: jest.fn(),
  },
  annotations: {
    deleteMany: jest.fn(),
  },
  notifications: {
    deleteMany: jest.fn(),
  },
  treatmentShares: {
    deleteMany: jest.fn(),
  },
  treatments: {
    deleteMany: jest.fn(),
  },
  verificationCodes: {
    deleteMany: jest.fn(),
  },
} as unknown as PrismaClient;

jest.mock('../../infra/prisma/client.js', () => ({
  prisma: mockPrisma,
}));

describe('UserService - deleteUser', () => {
  let service: UserService;
  let usersRepository: PrismaUsersRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    usersRepository = new PrismaUsersRepository(mockPrisma);
    service = new UserService(usersRepository);
  });

  test('should delete user successfully', async () => {
    const userId = 'user-123';
    
    mockPrisma.users.delete.mockResolvedValue(undefined);
    mockPrisma.medications.findMany.mockResolvedValue([]);
    mockPrisma.annotations.deleteMany.mockResolvedValue({ count: 0 });
    mockPrisma.notifications.deleteMany.mockResolvedValue({ count: 0 });
    mockPrisma.treatmentShares.deleteMany.mockResolvedValue({ count: 0 });
    mockPrisma.treatments.deleteMany.mockResolvedValue({ count: 0 });
    mockPrisma.verificationCodes.deleteMany.mockResolvedValue({ count: 0 });

    await expect(service.deleteUser(userId)).resolves.toBeUndefined();
    expect(mockPrisma.users.delete).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.users.delete).toHaveBeenCalledTimes(1);

    expect(mockPrisma.medications.findMany).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.annotations.deleteMany).toHaveBeenCalledWith({ where: { medicationId: { in: [] } } });
    expect(mockPrisma.notifications.deleteMany).toHaveBeenCalledWith({ where: { medicationId: { in: [] } } });
    expect(mockPrisma.treatmentShares.deleteMany).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.treatments.deleteMany).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.verificationCodes.deleteMany).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.$transaction).toHaveBeenCalledTimes(1);
  });

  test('should throw an error if user does not exist during direct user deletion', async () => {
    const userId = 'non-existing-user';
    const errorMessage = 'User not found';
    mockPrisma.users.delete.mockRejectedValue(new Error(errorMessage));

    await expect(service.deleteUser(userId)).rejects.toThrow(errorMessage);
    expect(mockPrisma.users.delete).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.users.delete).toHaveBeenCalledTimes(1);
    expect(mockPrisma.medications.findMany).toHaveBeenCalled();
    expect(mockPrisma.$transaction).toHaveBeenCalledTimes(1);
  });

  test('should throw an error if any part of the transaction fails', async () => {
    const userId = 'user-123';
    const errorMessage = 'Database error during medication deletion';

    mockPrisma.medications.findMany.mockResolvedValue([{ medicationId: 'med-1', userId: userId }]);
    mockPrisma.medications.deleteMany.mockRejectedValue(new Error(errorMessage));
    
    mockPrisma.annotations.deleteMany.mockResolvedValue({ count: 0 });
    mockPrisma.notifications.deleteMany.mockResolvedValue({ count: 0 });
    mockPrisma.treatmentShares.deleteMany.mockResolvedValue({ count: 0 });
    mockPrisma.treatments.deleteMany.mockResolvedValue({ count: 0 });
    mockPrisma.verificationCodes.deleteMany.mockResolvedValue({ count: 0 });
    mockPrisma.users.delete.mockResolvedValue(undefined);

    await expect(service.deleteUser(userId)).rejects.toThrow(errorMessage);
    expect(mockPrisma.medications.findMany).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.medications.deleteMany).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.$transaction).toHaveBeenCalledTimes(1);
  });

  test('should delete user and all associated data successfully', async () => {
    const userId = 'user-123';
    const medicationId1 = 'med-456';
    const medicationId2 = 'med-789';

    const mockMedications = [
      { medicationId: medicationId1, userId: userId },
      { medicationId: medicationId2, userId: userId },
    ];
    const medicationIds = mockMedications.map((med) => med.medicationId);

    mockPrisma.medications.findMany.mockResolvedValue(mockMedications);
    mockPrisma.annotations.deleteMany.mockResolvedValue({ count: 2 });
    mockPrisma.notifications.deleteMany.mockResolvedValue({ count: 1 });
    mockPrisma.treatmentShares.deleteMany.mockResolvedValue({ count: 3 });
    mockPrisma.medications.deleteMany.mockResolvedValue({ count: 2 });
    mockPrisma.treatments.deleteMany.mockResolvedValue({ count: 4 });
    mockPrisma.verificationCodes.deleteMany.mockResolvedValue({ count: 1 });
    mockPrisma.users.delete.mockResolvedValue(undefined);

    await expect(service.deleteUser(userId)).resolves.toBeUndefined();

    expect(mockPrisma.medications.findMany).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.annotations.deleteMany).toHaveBeenCalledWith({ where: { medicationId: { in: medicationIds } } });
    expect(mockPrisma.notifications.deleteMany).toHaveBeenCalledWith({ where: { medicationId: { in: medicationIds } } });
    expect(mockPrisma.treatmentShares.deleteMany).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.medications.deleteMany).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.treatments.deleteMany).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.verificationCodes.deleteMany).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.users.delete).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.users.delete).toHaveBeenCalledTimes(1);
    expect(mockPrisma.$transaction).toHaveBeenCalledTimes(1);
  });
});
