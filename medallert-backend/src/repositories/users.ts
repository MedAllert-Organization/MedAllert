import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient, Timezone } from "../infra/prisma/generated/prisma/index.js";

export type User = {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  hash: string;
  timezoneId: string | null;
  image: string | null;
  acceptedTosAt: Date;
  accountConfirmedAt: Date | null;
};

export interface UsersRepository {
  findAnyUserByEmail(email: string): Promise<User | null>;
  findConfirmedUserByEmail(email: string): Promise<User | null>;
  findUser(id: string): Promise<User | null>;
  addUser(newUser: {
    fullName: string;
    email: string;
    hash: string;
    phone: string;
  }): Promise<User | null>;
  updatePasswordForUser(userId: string, newPassword: string): Promise<void>;
  confirmUserAccount(email: string): Promise<void>;
  deleteUser(userId: string): Promise<void>;
  getUserTimezone(userId: string): Promise<Timezone | null>;
}

export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findAnyUserByEmail(email: string): Promise<User | null> {
    return this.prisma.users.findUnique({
      where: { email },
    });
  }

  async findConfirmedUserByEmail(email: string): Promise<User | null> {
    return this.prisma.users.findFirst({
      where: { email, accountConfirmedAt: { not: null } },
    });
  }

  async findUser(id: string): Promise<User | null> {
    return this.prisma.users.findUnique({ where: { userId: id } });
  }

  async addUser(newUser: {
    fullName: string;
    email: string;
    hash: string;
    phone: string;
  }): Promise<User | null> {
    return await this.prisma.users.create({
      data: { ...newUser, accountConfirmedAt: null },
    });
  }

  async updatePasswordForUser(userId: string, hash: string): Promise<void> {
    await this.prisma.users.update({
      where: { userId },
      data: { hash },
    });
  }

  async confirmUserAccount(email: string): Promise<void> {
    await this.prisma.users.update({
      where: { email },
      data: { accountConfirmedAt: new Date() },
    });
  }

  async deleteUser(userId: string): Promise<void> {
    const medications = await this.prisma.medications.findMany({
      where: { userId },
    });
    const medicationIds = medications.map((med) => med.medicationId);

    await this.prisma.$transaction([
      this.prisma.annotations.deleteMany({ where: { medicationId: { in: medicationIds } } }),
      this.prisma.notifications.deleteMany({ where: { medicationId: { in: medicationIds } } }),
      this.prisma.treatmentShares.deleteMany({ where: { userId } }),
      this.prisma.medications.deleteMany({ where: { userId } }),
      this.prisma.treatments.deleteMany({ where: { userId } }),
      this.prisma.verificationCodes.deleteMany({ where: { userId } }),
      this.prisma.users.delete({ where: { userId } }),
    ]);
  }

  async getUserTimezone(userId: string): Promise<Timezone | null> {
    const user = await this.prisma.users.findUnique({
      where: { userId },
      include: { timezone: true },
    });

    return user?.timezone || null;
  }
}

export const defaultUsersRepository = new PrismaUsersRepository(prisma);
