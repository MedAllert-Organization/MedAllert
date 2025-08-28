import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import type { Env } from "../../common/type-helpers.js";
import { defaultCodeProvider } from "../../common/password-recovery-code.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import { PasswordRecoveryService } from "../../services/password-recovery.js";
import { defaultPasswordHasher } from "../../common/password-hash.js";

export const requestRecovery = new Hono<Env>();

requestRecovery.post(
  "/",
  describeRoute({
    description: "Starts password recovery flow",
    responses: {
      200: {
        description: "Successfully sent codes",
      },
      401: {
        description: "Invalid login",
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
    );
    const [ok] = await service.createAndSendRecoveryCode(userId);
    if (!ok) return c.text("", 500);
    return c.text("", 200);
  },
);
