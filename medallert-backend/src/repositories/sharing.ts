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
        medication: {
          select: {
            medicationId: true,
            name: true,
            dose: true,
            description: true,
            alertPeriodInHours: true,
            user: {
              select: {
                userId: true,
                fullName: true,
              },
            },
          },
        },
      },
    });
  }

  async removeAllFromOwner(ownerId: string) {
    const medications = await prisma.medications.findMany({
      where: { userId: ownerId },
      select: { medicationId: true },
    });

    if (medications.length === 0) {
      return;
    }

    const medicationIds = medications.map((m) => m.medicationId);

    await prisma.medicationShares.deleteMany({
      where: {
        medicationId: {
          in: medicationIds,
        },
      },
    });
  }
}

export const defaultSharingRepository = new SharingRepository();
