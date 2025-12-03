import { test, expect, jest, describe, beforeEach } from '@jest/globals';
import { UserService } from '../../services/user-service.js';
import { PrismaUsersRepository } from '../../repositories/users.js';
import { PrismaClient } from '../../infra/prisma/generated/prisma/index.js';

interface PrismaMock {
  $transaction: jest.Mock;
  users: { delete: jest.Mock };
  medications: { findMany: jest.Mock; deleteMany: jest.Mock };
  annotations: { deleteMany: jest.Mock };
  notifications: { deleteMany: jest.Mock };
  treatmentShares: { deleteMany: jest.Mock };
  treatments: { deleteMany: jest.Mock };
  verificationCodes: { deleteMany: jest.Mock };
}

const mockPrisma: PrismaMock = {
  $transaction: jest.fn((ops) => Promise.all(ops as any[])),
  users: { delete: jest.fn() },
  medications: { findMany: jest.fn(), deleteMany: jest.fn() },
  annotations: { deleteMany: jest.fn() },
  notifications: { deleteMany: jest.fn() },
  treatmentShares: { deleteMany: jest.fn() },
  treatments: { deleteMany: jest.fn() },
  verificationCodes: { deleteMany: jest.fn() },
};


jest.mock('../../infra/prisma/client.js', () => ({
  prisma: mockPrisma,
}));

describe('UserService - deleteUser', () => {
  let service: UserService;
  let usersRepository: PrismaUsersRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    usersRepository = new PrismaUsersRepository(mockPrisma as any);
    service = new UserService(usersRepository);
  });

  test('should delete user successfully', async () => {
    const userId = 'user-123';
    
    mockPrisma.users.delete.mockResolvedValue(undefined as never);
    mockPrisma.medications.findMany.mockResolvedValue([] as never);
    mockPrisma.annotations.deleteMany.mockResolvedValue({ count: 0 } as never);
    mockPrisma.notifications.deleteMany.mockResolvedValue({ count: 0 } as never);
    mockPrisma.treatmentShares.deleteMany.mockResolvedValue({ count: 0 } as never);
    mockPrisma.treatments.deleteMany.mockResolvedValue({ count: 0 } as never);
    mockPrisma.verificationCodes.deleteMany.mockResolvedValue({ count: 0 } as never);
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
    mockPrisma.users.delete.mockRejectedValue(new Error(errorMessage) as never);

    await expect(service.deleteUser(userId)).rejects.toThrow(errorMessage);
    expect(mockPrisma.users.delete).toHaveBeenCalledWith({ where: { userId } });
    expect(mockPrisma.users.delete).toHaveBeenCalledTimes(1);
    expect(mockPrisma.medications.findMany).toHaveBeenCalled();
    expect(mockPrisma.$transaction).toHaveBeenCalledTimes(1);
  });

  test('should throw an error if any part of the transaction fails', async () => {
    const userId = 'user-123';
    const errorMessage = 'Database error during medication deletion';

    mockPrisma.medications.findMany.mockResolvedValue([{ medicationId: 'med-1', userId: userId }] as never);
    mockPrisma.medications.deleteMany.mockRejectedValue(new Error(errorMessage) as never);
    
    mockPrisma.annotations.deleteMany.mockResolvedValue({ count: 0 } as never);
    mockPrisma.notifications.deleteMany.mockResolvedValue({ count: 0 } as never);
    mockPrisma.treatmentShares.deleteMany.mockResolvedValue({ count: 0 } as never);
    mockPrisma.treatments.deleteMany.mockResolvedValue({ count: 0 } as never);
    mockPrisma.verificationCodes.deleteMany.mockResolvedValue({ count: 0 } as never);
    mockPrisma.users.delete.mockResolvedValue(undefined as never);

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

    mockPrisma.medications.findMany.mockResolvedValue(mockMedications  as never);
    mockPrisma.annotations.deleteMany.mockResolvedValue({ count: 2 } as never);
    mockPrisma.notifications.deleteMany.mockResolvedValue({ count: 1 } as never);
    mockPrisma.treatmentShares.deleteMany.mockResolvedValue({ count: 3 } as never);
    mockPrisma.medications.deleteMany.mockResolvedValue({ count: 2 } as never);
    mockPrisma.treatments.deleteMany.mockResolvedValue({ count: 4 } as never);
    mockPrisma.verificationCodes.deleteMany.mockResolvedValue({ count: 1 } as never);
    mockPrisma.users.delete.mockResolvedValue(undefined as never);

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
