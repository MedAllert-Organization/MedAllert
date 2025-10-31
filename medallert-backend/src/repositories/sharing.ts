import { prisma } from "../infra/prisma/client.js";

export class SharingRepository {
  async share(treatmentId: string, userId: string) {
    await prisma.treatmentShares.create({
      data: {
        treatmentId,
        userId,
      },
    });
  }

  async find(treatmentId: string, userId: string) {
    return await prisma.treatmentShares.findUnique({
      where: {
        treatmentId_userId: {
          treatmentId,
          userId,
        },
      },
    });
  }

  async remove(treatmentId: string, userId: string) {
    await prisma.treatmentShares.delete({
      where: {
        treatmentId_userId: {
          treatmentId,
          userId,
        },
      },
    });
  }

  async findUsersByTreatment(treatmentId: string) {
    return await prisma.treatmentShares.findMany({
      where: {
        treatmentId,
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

  async findTreatmentsByUser(userId: string) {
    return await prisma.treatmentShares.findMany({
      where: {
        userId,
      },
      include: {
        treatment: {
          select: {
            treatmentId: true,
            name: true,
            description: true,
            user: {
              select: {
                userId: true,
                fullName: true,
              }
            }
          }
        }
      },
    });
  }

  async removeAllFromOwner(ownerId: string) {
    const treatments = await prisma.treatments.findMany({
      where: { userId: ownerId },
      select: { treatmentId: true },
    });

    if (treatments.length === 0) {
      return;
    }

    const treatmentIds = treatments.map((m) => m.treatmentId);

    await prisma.treatmentShares.deleteMany({
      where: {
        treatmentId: {
          in: treatmentIds,
        },
      },
    });
  }
}

export const defaultSharingRepository = new SharingRepository();
