import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/zod";
import {
	LoginResponse,
	LoginSchema,
	LoginService,
} from "../../services/login-service.js";
import { defaultTokenProvider } from "../../common/jwt.js";
import { defaultUsersRepository } from "../../repositories/users.js";

export const login = new Hono();

login.post(
	"/login",
	describeRoute({
		description: "Hello Endpoint",
		responses: {
			200: {
				description: "Successful login",
				content: {
					"application/json": {
						schema: resolver(LoginResponse),
					},
				},
			},
			401: {
				description: "Invalid login credentials",
			},
		},
	}),
	validator("json", LoginSchema),
	async (c) => {
		const userCandidate = c.req.valid("json");

		const service = new LoginService(
			defaultUsersRepository,
			defaultTokenProvider,
		);

		const [ok, error, token] = await service.execute(userCandidate);
		if (!(ok && token)) {
			console.error(error);
			return c.text("", 401);
		}
		return c.json({ token });
	},
);
