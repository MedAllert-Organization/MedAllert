import { prisma } from "../infra/prisma/client.js";

export class SharingRepository {
  async share(medicationId: string, userId: string) {
    await prisma.medicationShares.create({
      data: {
        medicationId,
        userId,
      },
    });
  }

  async find(medicationId: string, userId: string) {
    return await prisma.medicationShares.findUnique({
      where: {
        medicationId_userId: {
          medicationId,
          userId,
        },
      },
    });
  }

  async remove(medicationId: string, userId: string) {
    await prisma.medicationShares.delete({
      where: {
        medicationId_userId: {
          medicationId,
          userId,
        },
      },
    });
  }

  async findUsersByMedication(medicationId: string) {
    return await prisma.medicationShares.findMany({
      where: {
        medicationId,
      },
      include: {
        user: {
          select: {
            userId: true,
            fullName: true,
            email: true,
          },
        },
      },
    });
  }

  async findMedicationsByUser(userId: string) {
    return await prisma.medicationShares.findMany({
      where: {
        userId,
      },
      include: {
        medication: true,
      },
    });
  }
}

export const defaultSharingRepository = new SharingRepository();
