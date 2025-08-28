import { error, ok, t } from "try";
import type { PasswordRecoveryCodeProvider } from "../common/password-recovery-code.js";
import type { PromiseResult } from "../common/type-helpers.js";
import type { UsersRepository } from "../repositories/users.js";
import * as z from "zod";
import type { PasswordHasher } from "../common/password-hash.js";

export const ChangePasswordRequest = z.object({
  code: z.string().length(6, "O Código deve possuir 6 dígitos"),
  newPassword: z
    .string()
    .min(8, "Senha deve possuir 8 caracteres")
    .max(64, "Senha é muito longa")
    .regex(/(?=.*[A-Za-z])(?=.*\d).*/, "Senha deve conter letras e números"),
});

export type ChangePasswordRequestType = z.infer<typeof ChangePasswordRequest>;

export class PasswordRecoveryService {
  constructor(
    private readonly codeProvider: PasswordRecoveryCodeProvider,
    private readonly passwordHahser: PasswordHasher,
    private readonly usersRepository: UsersRepository,
  ) {}

  async createAndSendRecoveryCode(userId: string): PromiseResult<string> {
    const responseResult = await t(this.codeProvider.generateCode(userId));
    if (!responseResult.ok) {
      return error("failed to create code");
    }
    console.log("generated code:\n", responseResult.value);
    return ok(responseResult.value.id);
  }

  async confirmCodeAndChangePassword(
    userId: string,
    { code, newPassword }: ChangePasswordRequestType,
  ): PromiseResult<string> {
    const [confirmOk] = await t(this.codeProvider.confirmCode(userId, code));
    if (!confirmOk) {
      return error("could not confirm code");
    }
    const [hashOk, _, hash] = await t(this.passwordHahser.hash(newPassword));
    if (!hashOk && !hash) {
      return error("could not hash password");
    }
    const [updatePasswordOk] = await t(
      this.usersRepository.updatePasswordForUser(userId, hash),
    );
    if (!updatePasswordOk) {
      return error("could not update password");
    }
    return ok("Successfully changed password");
  }
}
