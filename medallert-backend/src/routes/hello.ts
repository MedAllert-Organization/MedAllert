import { Hono } from "hono";
import * as z from "zod";
import { describeRoute } from "hono-openapi";
import { resolver } from "hono-openapi/zod";
import type { Env } from "../common/type-helpers.js";

export const hello = new Hono<Env>();

hello.get(
	"/hello",
	describeRoute({
		description: "Hello Endpoint",
		responses: {
			200: {
				description: "Successful response",
				content: {
					"text/plain": { schema: resolver(z.string()) },
				},
			},
			401: {
				description: "User must be logged in",
			},
		},
	}),
	(c) => {
		console.log(c.get("userId"));
		return c.text("Hello world");
	},
);
