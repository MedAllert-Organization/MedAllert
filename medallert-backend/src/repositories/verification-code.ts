import { randomBytes, randomUUID } from "node:crypto";
import dayjs from "dayjs";

type CodeType = "VERIFICATION" | "RECOVERY";

type VerificationCode = {
  id: string;
  userId: string;
  value: string;
  type: CodeType;
  expiresAt: Date;
  confirmedAt?: Date;
};

export interface VerificationCodeRepository {
  generateCode(userId: string, type: CodeType): Promise<VerificationCode>;
  confirmCode(userId: string, value: string, type: CodeType): Promise<void>;
  canGenerateNextRecoveryCode(userId: string): Promise<boolean>;
}

class InmemoryVerificationCodeRepository implements VerificationCodeRepository {
  codes: VerificationCode[] = [];

  async generateCode(
    userId: string,
    type: CodeType,
  ): Promise<VerificationCode> {
    const code = this.makeCode(userId, type);
    this.codes.push(code);
    return code;
  }

  async confirmCode(userId: string, value: string): Promise<void> {
    const codeCandidate = this.findCodeByValue(userId, value);
    if (!codeCandidate) throw new Error("Invalid code cant be confirmed");
    this.markCodeAsConfirmed(codeCandidate.id);
  }

  async canGenerateNextRecoveryCode(userId: string): Promise<boolean> {
    const latest = this.getLastGeneratedRecoveryCode(userId);
    if (latest) {
      return dayjs().isAfter(dayjs(latest.expiresAt));
    }
    return true;
  }

  private getLastGeneratedRecoveryCode(userId: string) {
    const latest = this.codes
      .filter(
        (c) => c.userId === userId && c.type === "RECOVERY" && !c.confirmedAt,
      )
      .sort((a, b) => b.expiresAt.getTime() - a.expiresAt.getTime())
      .reverse()
      .at(0);
    return latest;
  }

  private makeSixDigitsCodeValue(): string {
    const value = randomBytes(3).toString("hex").toUpperCase();
    return value;
  }

  private makeCode(
    userId: string,
    type: CodeType = "RECOVERY",
  ): VerificationCode {
    const expiresAt = dayjs().add(15, "minutes").toDate();
    const code: VerificationCode = {
      id: randomUUID(),
      userId,
      type,
      value: this.makeSixDigitsCodeValue(),
      expiresAt,
    };
    return code;
  }

  private findCodeByValue(
    userId: string,
    value: string,
  ): VerificationCode | undefined {
    const isValid = (test: Date) => dayjs().isBefore(dayjs(test));
    const code = this.codes.find(
      (t) =>
        t.userId === userId &&
        t.value.toLowerCase() === value.toLowerCase() &&
        !t.confirmedAt &&
        isValid(t.expiresAt),
    );
    return code;
  }

  private markCodeAsConfirmed(codeId: string) {
    const idx = this.codes.findIndex((c) => c.id === codeId);
    if (idx !== -1) {
      const previousCode = this.codes[idx];
      const confirmed: VerificationCode = {
        ...previousCode,
        confirmedAt: new Date(),
      };
      this.codes[idx] = confirmed;
    }
  }
}

export const defaultCodeRepository = new InmemoryVerificationCodeRepository();
