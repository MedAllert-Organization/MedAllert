import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";
import { prisma } from "../infra/prisma/client.js";

export type TimezoneEntity = {
  id: string;
  name: string;
  label: string;
  utcOffset: number;
};

export interface TimezoneRepository {
  getAll(): Promise<TimezoneEntity[]>;
  getById(id: string): Promise<TimezoneEntity | null>;
  getByName(name: string): Promise<TimezoneEntity | null>;
  create(data: {
    name: string;
    label: string;
    utcOffset: number;
  }): Promise<TimezoneEntity>;
}

class PrismaTimezoneRepository implements TimezoneRepository {
  constructor(private readonly prisma: PrismaClient) {}

  getAll(): Promise<TimezoneEntity[]> {
    return this.prisma.timezone.findMany({
      orderBy: { name: "asc" },
    });
  }

  getById(id: string): Promise<TimezoneEntity | null> {
    return this.prisma.timezone.findUnique({
      where: { id },
    });
  }

  getByName(name: string): Promise<TimezoneEntity | null> {
    return this.prisma.timezone.findUnique({
      where: { name },
    });
  }

  create(data: {
    name: string;
    label: string;
    utcOffset: number;
  }): Promise<TimezoneEntity> {
    return this.prisma.timezone.create({
      data,
    });
  }
}

export const defaultTimezoneRepository = new PrismaTimezoneRepository(prisma);
