import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/zod";
import { defaultEmailTransport } from "../../common/email-transport.js";
import { defaultPasswordHasher } from "../../common/password-hash.js";
import { defaultCodeProvider } from "../../common/password-recovery-code.js";
import type { Env } from "../../common/type-helpers.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import {
  PasswordRecoveryService,
  RecoveryCodeRequest,
} from "../../services/password-recovery.js";

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
  validator("json", RecoveryCodeRequest),
  async (c) => {
    const request = c.req.valid("json");
    const service = new PasswordRecoveryService(
      defaultCodeProvider,
      defaultPasswordHasher,
      defaultUsersRepository,
      defaultEmailTransport,
    );
    const [ok, error] = await service.createAndSendRecoveryCode(request.email);
    if (!ok || error) {
      console.error(error);
      return c.text("", (error as string).includes("wait") ? 429 : 500);
    }
    return c.text("", 200);
  },
);
