import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { RegisterService } from "../../services/register-service.js";
import { LoginSchema } from "../../services/login-service.js";
import { defaultUsersRepository } from "../../repositories/users.js";

export const register = new Hono();

register.post(
  "/register",
  describeRoute({
    description: "Hello Endpoint",
    responses: {
      201: {
        description: "Successful user registration",
      },
      400: {
        description: "Invalid user registration",
      },
    },
  }),
  validator("json", LoginSchema),
  async (c) => {
    const userCandidate = c.req.valid("json");
    const service = new RegisterService(defaultUsersRepository);
    const [ok, error, user] = await service.execute(userCandidate);
    if (!(ok && user)) {
      console.error(error);
      return c.text("", 400);
    }
    return c.text("", 201);
  },
);
