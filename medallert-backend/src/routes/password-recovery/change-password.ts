import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import type { Env } from "../../common/type-helpers.js";
import { defaultCodeProvider } from "../../common/password-recovery-code.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import {
	ChangePasswordRequest,
	PasswordRecoveryService,
} from "../../services/password-recovery.js";
import { defaultPasswordHasher } from "../../common/password-hash.js";
import { defaultEmailTransport } from "../../common/email-transport.js";

export const changePassword = new Hono<Env>();

changePassword.post(
	"/change-password",
	describeRoute({
		description: "Use recovery code for changing password",
		responses: {
			200: {
				description: "Successfully confirmed code and changed password",
			},
			401: {
				description: "Invalid login",
			},
			403: {
				description: "Failed to recover password, should restart process",
			},
		},
	}),
	validator("json", ChangePasswordRequest),
	async (c) => {
		const userId = c.get("userId");
		if (!userId) return c.text("", 401);
		const request = c.req.valid("json");
		const service = new PasswordRecoveryService(
			defaultCodeProvider,
			defaultPasswordHasher,
			defaultUsersRepository,
			defaultEmailTransport,
		);
		const [ok, error] = await service.confirmCodeAndChangePassword(
			userId,
			request,
		);
		if (!ok || error) return c.text("", 403);
		return c.text("", 200);
	},
);
