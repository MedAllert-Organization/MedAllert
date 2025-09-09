import { randomBytes, randomUUID } from "node:crypto";
import dayjs from "dayjs";
import { prisma } from "../infra/prisma/client.js";
import type { PrismaClient } from "../infra/prisma/generated/prisma/index.js";

type CodeType = "VERIFICATION" | "RECOVERY";

type VerificationCode = {
  codeId: string;
  userId: string;
  value: string;
  codeType: CodeType;
  confirmedAt: Date | null;
  expiresAt: Date;
};

export interface VerificationCodeRepository {
  generateCode(userId: string, type: CodeType): Promise<VerificationCode>;
  confirmCode(userId: string, value: string, type: CodeType): Promise<void>;
  canGenerateNextRecoveryCode(userId: string): Promise<boolean>;
}

class PrismaVerificationCodeRepository implements VerificationCodeRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async generateCode(
    userId: string,
    type: CodeType,
  ): Promise<VerificationCode> {
    const code = this.makeCode(userId, type);
    await this.prisma.verificationCodes.create({
      data: code,
    });
    return code;
  }

  async confirmCode(userId: string, value: string): Promise<void> {
    const codeCandidate = await this.findCodeByValue(userId, value);
    if (!codeCandidate) throw new Error("Invalid code cant be confirmed");
    await this.markCodeAsConfirmed(codeCandidate.codeId);
  }

  async canGenerateNextRecoveryCode(userId: string): Promise<boolean> {
    const latest = await this.getLastGeneratedRecoveryCode(userId);
    if (latest) {
      return dayjs().isAfter(dayjs(latest.expiresAt));
    }
    return true;
  }

  private async getLastGeneratedRecoveryCode(userId: string) {
    const latest = await this.prisma.verificationCodes.findFirst({
      where: {
        userId,
        codeType: { equals: "RECOVERY" },
        confirmedAt: { equals: null },
      },
      orderBy: { expiresAt: "desc" },
    });
    return latest;
  }

  private makeSixDigitsCodeValue(): string {
    const value = randomBytes(3).toString("hex").toUpperCase();
    return value;
  }

  private makeCode(
    userId: string,
    codeType: CodeType = "RECOVERY",
  ): VerificationCode {
    const expiresAt = dayjs().add(15, "minutes").toDate();
    const code: VerificationCode = {
      codeId: randomUUID(),
      userId,
      codeType,
      value: this.makeSixDigitsCodeValue(),
      expiresAt,
      confirmedAt: null,
    };
    return code;
  }

  private async findCodeByValue(
    userId: string,
    value: string,
  ): Promise<VerificationCode | null> {
    const code = await this.prisma.verificationCodes.findFirst({
      where: {
        userId,
        value,
        confirmedAt: { equals: null },
        expiresAt: { gte: new Date() },
      },
    });
    if (code) {
      const { codeType: type, ...rest } = code;
      return { ...rest, codeType: type as CodeType };
    }
    return null;
  }

  private async markCodeAsConfirmed(codeId: string) {
    await this.prisma.verificationCodes.update({
      where: { codeId },
      data: { confirmedAt: new Date() },
    });
  }
}

export const defaultCodeRepository = new PrismaVerificationCodeRepository(
  prisma,
);
