import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/zod";
import * as z from "zod";
import type { Env } from "../common/type-helpers.js";
import { defaultCodeProvider } from "../common/password-recovery-code.js";
import { defaultUsersRepository } from "../repositories/users.js";
import { t } from "try";
import {
  ChangePasswordRequest,
  PasswordRecoveryService,
} from "../services/password-recovery.js";

export const passwordRecovery = new Hono<Env>();

passwordRecovery.post(
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
      defaultUsersRepository,
    );
    const [ok] = await service.createAndSendRecoveryCode(userId);
    if (!ok) return c.text("", 500);
    return c.text("", 200);
  },
);

passwordRecovery.post(
  "/change-password",
  describeRoute({
    description: "Use recovery code for change password",
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
      defaultUsersRepository,
    );
    const [ok, error] = await service.confirmCodeAndChangePassword(
      userId,
      request,
    );
    if (!ok || error) return c.text("", 403);
    return c.text("", 200);
  },
);
