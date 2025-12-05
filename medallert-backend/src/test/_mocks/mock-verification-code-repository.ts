import type { VerificationCodeRepository } from "../../repositories/verification-code.js";

export class MockVerificationCodeRepository implements VerificationCodeRepository {
  codes: Awaited<ReturnType<VerificationCodeRepository['generateCode']>>[] = [];
  canGenerate = true;
  shouldFailGenerate = false;
  shouldFailConfirm = false;

  async generateCode(userId: string, type: "VERIFICATION" | "RECOVERY") {
    if (this.shouldFailGenerate) throw new Error("failed to create code");
    const code = {
      codeId: "code-123",
      userId,
      value: "123456",
      codeType: type,
      confirmedAt: null,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000),
    };
    this.codes.push(code);
    return code;
  }

  async confirmCode(userId: string, value: string, type: "VERIFICATION" | "RECOVERY") {
    if (this.shouldFailConfirm) throw new Error("Confirmation failed");
    const code = this.codes.find(c => c.userId === userId && c.value === value && c.codeType === type);
    if (!code) throw new Error("Code not found");
    code.confirmedAt = new Date();
  }

  async canGenerateNextRecoveryCode(userId: string) {
    return this.canGenerate;
  }
}