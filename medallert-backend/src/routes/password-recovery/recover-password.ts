import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import type { Env } from "../../common/type-helpers.js";
import { defaultCodeProvider } from "../../common/password-recovery-code.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import { PasswordRecoveryService } from "../../services/password-recovery.js";
import { defaultPasswordHasher } from "../../common/password-hash.js";
import { defaultEmailTransport } from "../../common/email-transport.js";

export const requestRecovery = new Hono<Env>();

requestRecovery.post(
	"/",
	describeRoute({
		description: "Starts password recovery flow by sending an code via email",
		responses: {
			200: {
				description: "Successfully sent code",
			},
			401: {
				description: "Invalid login",
			},
			429: {
				description: "User should wait to generate another code",
			},
			500: {
				description: "Internal error, check logs",
			},
		},
	}),
	async (c) => {
		const userId = c.get("userId");
		if (!userId) return c.text("", 401);
		const service = new PasswordRecoveryService(
			defaultCodeProvider,
			defaultPasswordHasher,
			defaultUsersRepository,
			defaultEmailTransport,
		);
		const [ok, error] = await service.createAndSendRecoveryCode(userId);
		if (!ok || error) {
			console.error(error);
			return c.text("", (error as string).includes("wait") ? 429 : 500);
		}
		return c.text("", 200);
	},
);
