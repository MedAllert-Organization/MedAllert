import * as argon2 from "argon2";
import { error, ok, t } from "try";
import * as z from "zod";
import type { EmailTransport } from "../common/email-transport.js";
import type { PromiseResult } from "../common/type-helpers.js";
import type { User, UsersRepository } from "../repositories/users.js";
import type { VerificationCodeRepository } from "../repositories/verification-code.js";

export const CreateUserRequest = z.object({
  fullName: z
    .string()
    .min(2, "Nome completo é obrigatório")
    .max(256, "Nome muito longo"),
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  password: z
    .string()
    .min(8, "Senha deve possuir 8 caracteres")
    .max(64, "Senha é muito longa")
    .regex(/(?=.*[A-Za-z])(?=.*\d).*/, "Senha deve conter letras e números"),
  phone: z
    .string()
    .min(8, "Telefone é obrigatório")
    .max(20, "Telefone inválido")
    .regex(
      /^(?:(?:\+|00)?(55)\s?)?(?:(?:$(\d{2})$|(\d{2}))\s?)?(?:((?:9?\d{3})\-?\d{4}))$/,
      "Telefone inválido",
    ),
});

export type CreateUser = z.infer<typeof CreateUserRequest>;

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

  async registerUser({
    password,
    fullName,
    email,
    phone,
  }: CreateUser): PromiseResult<User> {
    const user = await this.usersRepository.findAnyUserByEmail(email);
    if (user) {
      return error("User already has an account");
    }
    const hash = await argon2.hash(password);
    const [createdOk, _, createdUser] = await t(
      this.usersRepository.addUser({
        hash,
        fullName,
        email,
        phone,
      }),
    );
    if (!createdOk || !createdUser) {
      return error("failed to create user");
    }
    const code = await this.codeRepository.generateCode(
      createdUser.userId,
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
    return ok(createdUser);
  }

  async confirmUserAccount({
    email,
    code,
  }: ConfirmAccount): PromiseResult<string> {
    const [userOk, _, user] = await t(
      this.usersRepository.findAnyUserByEmail(email),
    );
    if (!userOk || !user) return error("failed to find user with email");
    const [confirmCodeOk] = await t(
      this.codeRepository.confirmCode(user?.userId, code, "VERIFICATION"),
    );
    if (!confirmCodeOk) return error("failed to confirm code");
    const [userConfirmOk] = await t(
      this.usersRepository.confirmUserAccount(email),
    );
    if (!userConfirmOk) return error("failed to confirm user");
    return ok("success");
  }
}
