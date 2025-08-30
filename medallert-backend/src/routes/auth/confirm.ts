import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { defaultEmailTransport } from "../../common/email-transport.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import { defaultCodeRepository } from "../../repositories/verification-code.js";
import {
  ConfirmAccountRequest,
  RegisterService,
} from "../../services/register-service.js";

export const confirm = new Hono();

confirm.post(
  "/confirm-account",
  describeRoute({
    description: "Confirm the code sent via email",
    responses: {
      200: {
        description: "Successful user confirmation",
      },
      500: {
        description: "Internal server error",
      },
    },
  }),
  validator("json", ConfirmAccountRequest),
  async (c) => {
    const confirmationRequest = c.req.valid("json");
    const service = new RegisterService(
      defaultUsersRepository,
      defaultCodeRepository,
      defaultEmailTransport,
    );
    const [ok, error, user] =
      await service.confirmUserAccount(confirmationRequest);
    if (!(ok && user)) {
      console.error(error);
      return c.text("", 400);
    }
    return c.text("", 200);
  },
);
