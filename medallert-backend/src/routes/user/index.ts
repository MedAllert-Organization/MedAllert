import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { t } from "try";
import type { Env } from "../../common/type-helpers.d.js";
import { defaultUserService } from "../../services/user-service.js";

export const user = new Hono<Env>();

user.delete(
  "/account",
  describeRoute({
    tags: ["User"],
    description:
      "Deletes the current user and all the data associated with the account",
    responses: {
      204: {
        description: "User deleted successfully",
      },
      401: {
        description: "Unauthorized",
      },
      404: {
        description: "User not found",
      },
      500: {
        description: "Internal server error",
      },
    },
  }),
  async (c) => {
    const userId = c.get("userId") as string;
    const [ok, error] = await t(defaultUserService.deleteUser(userId));
    if (!ok) {
      if ((error as Error).message?.includes("not found")) {
        return c.json({ message: "User not found" }, 404);
      }
      return c.json({ message: "Internal server error" }, 500);
    }
    return c.newResponse(null, 204);
  },
);
