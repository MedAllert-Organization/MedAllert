import * as z from "zod";
import * as argon2 from "argon2";
import { error, ok } from "try";
import type { PromiseResult } from "../common/type-helpers.js";
import type { UsersRepository } from "../repositories/users.js";
import type { JWTProvider } from "../common/jwt.js";

export const LoginSchema = z.object({
	email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
	password: z
		.string()
		.min(8, "Senha deve possuir 8 caracteres")
		.max(64, "Senha é muito longa")
		.regex(/(?=.*[A-Za-z])(?=.*\d).*/, "Senha deve conter letras e números"),
});

export const LoginResponse = z.object({ token: z.string() });

export type LoginType = z.infer<typeof LoginSchema>;

type Token = string;
export class LoginService {
	constructor(
		private readonly usersRepository: UsersRepository,
		private readonly tokenProvider: JWTProvider,
	) {}

	async execute({ email, password }: LoginType): PromiseResult<Token> {
		const user = await this.usersRepository.findUserByEmail(email);
		if (!user) {
			return error("Invalid user");
		}

		const matchPasssword = await argon2.verify(user.hash, password);
		if (!matchPasssword) {
			return error("Invalid user");
		}

		const token = await this.tokenProvider.createToken(user.id);
		return ok(token);
	}
}
