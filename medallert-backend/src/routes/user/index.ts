import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
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
    },
  }),
  async (c) => {
    const userId = c.get("userId") as string;
    await defaultUserService.deleteUser(userId);
    return c.newResponse(null, 204);
  },
);
