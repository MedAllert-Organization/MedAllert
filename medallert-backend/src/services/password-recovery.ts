import { error, ok, t } from "try";
import * as z from "zod";
import type { EmailTransport } from "../common/email-transport.js";
import type { PasswordHasher } from "../common/password-hash.js";
import type { PasswordRecoveryCodeProvider } from "../common/password-recovery-code.js";
import type { PromiseResult } from "../common/type-helpers.js";
import type { UsersRepository } from "../repositories/users.js";

export const ChangePasswordRequest = z.object({
  code: z.string().length(6, "O Código deve possuir 6 dígitos"),
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  newPassword: z
    .string()
    .min(8, "Senha deve possuir 8 caracteres")
    .max(64, "Senha é muito longa")
    .regex(/(?=.*[A-Za-z])(?=.*\d).*/, "Senha deve conter letras e números"),
});

export type ChangePasswordRequestType = z.infer<typeof ChangePasswordRequest>;

export const RecoveryCodeRequest = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
});

export class PasswordRecoveryService {
  constructor(
    private readonly codeProvider: PasswordRecoveryCodeProvider,
    private readonly passwordHahser: PasswordHasher,
    private readonly usersRepository: UsersRepository,
    private readonly emailTransport: EmailTransport,
  ) {}

  async createAndSendRecoveryCode(email: string): PromiseResult<string> {
    const [userOk, ___, user] = await t(
      this.usersRepository.findUserByEmail(email),
    );
    if (!userOk || !user) {
      return error("Failed to find user");
    }
    const [canGenerateOk, _, canGenerate] = await t(
      this.codeProvider.canGenerateNextRecoveryCode(user.id),
    );
    if (!canGenerateOk || !canGenerate) {
      return error(
        "cannot generate another recovery code yet, wait and try again",
      );
    }
    const [codeOk, __, generated] = await t(
      this.codeProvider.generateCode(user.id),
    );
    if (!codeOk || !generated) {
      return error("failed to create code");
    }
    const [emailOk] = await t(
      this.emailTransport.sendEmail({
        to: user.email,
        subject: "Solicitacão de Recuperação de senha",
        body: `
Você solicitou a recuperação da senha da sua conta.
O seu código é: ${generated.value}`,
      }),
    );
    if (!emailOk) {
      return error("failed to send email");
    }
    return ok(generated.id);
  }

  async confirmCodeAndChangePassword({
    code,
    newPassword,
    email,
  }: ChangePasswordRequestType): PromiseResult<string> {
    const [userOk, _, user] = await t(
      this.usersRepository.findUserByEmail(email),
    );
    if (!userOk || !user) {
      return error("Failed to find user");
    }

    const [confirmOk] = await t(this.codeProvider.confirmCode(user.id, code));
    if (!confirmOk) {
      return error("could not confirm code");
    }
    const [hashOk, __, hash] = await t(this.passwordHahser.hash(newPassword));
    if (!hashOk && !hash) {
      return error("could not hash password");
    }
    const [updatePasswordOk] = await t(
      this.usersRepository.updatePasswordForUser(user.id, hash),
    );
    if (!updatePasswordOk) {
      return error("could not update password");
    }
    return ok("Successfully changed password");
  }
}
