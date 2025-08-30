import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { defaultEmailTransport } from "../../common/email-transport.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import { defaultCodeRepository } from "../../repositories/verification-code.js";
import { LoginSchema } from "../../services/login-service.js";
import { RegisterService } from "../../services/register-service.js";

export const register = new Hono();

register.post(
  "/register",
  describeRoute({
    description: "Register a new user",
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
    const service = new RegisterService(
      defaultUsersRepository,
      defaultCodeRepository,
      defaultEmailTransport,
    );
    const [ok, error, user] = await service.registerUser(userCandidate);
    if (!(ok && user)) {
      console.error(error);
      return c.text("", 400);
    }
    return c.text("", 201);
  },
);
