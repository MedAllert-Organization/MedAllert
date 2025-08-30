import { randomUUID } from "node:crypto";
import * as argon2 from "argon2";
import { error, ok, t } from "try";
import * as z from "zod";
import type { EmailTransport } from "../common/email-transport.js";
import type { PromiseResult } from "../common/type-helpers.js";
import type { User, UsersRepository } from "../repositories/users.js";
import type { VerificationCodeRepository } from "../repositories/verification-code.js";
import type { LoginType } from "./login-service.js";

export const ConfirmAccountRequest = z.object({
  code: z.string().length(6, "O Código deve possuir 6 dígitos"),
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
});

export type ConfirmAccount = z.infer<typeof ConfirmAccountRequest>;

export class RegisterService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly codeRepository: VerificationCodeRepository,
    private readonly emailTransport: EmailTransport,
  ) {}

  async registerUser({ email, password }: LoginType): PromiseResult<User> {
    if (await this.usersRepository.findUnverifiedUserByEmail(email)) {
      return error("User already has an account");
    }
    const hash = await argon2.hash(password);
    const user: User = { id: randomUUID(), email, hash };
    await this.usersRepository.addUser(user);
    const code = await this.codeRepository.generateCode(
      user.id,
      "VERIFICATION",
    );
    await this.emailTransport.sendEmail({
      to: email,
      subject: "MedAllert: Confirme o seu cadastro",
      body: `
      Você se cadastrou no MedAllert.
      Seu código de verificação é: ${code.value}
      `,
    });
    return ok(user);
  }

  async confirmUserAccount({
    email,
    code,
  }: ConfirmAccount): PromiseResult<string> {
    const [userOk, _, user] = await t(
      this.usersRepository.findUnverifiedUserByEmail(email),
    );
    if (!userOk || !user) return error("failed to find user with email");
    const [confirmCodeOk] = await t(
      this.codeRepository.confirmCode(user?.id, code, "VERIFICATION"),
    );
    if (!confirmCodeOk) return error("failed to confirm code");
    const [userConfirmOk] = await t(
      this.usersRepository.confirmUserAccount(email),
    );
    if (!userConfirmOk) return error("failed to confirm user");
    return ok("success");
  }
}
