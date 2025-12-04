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

user.get(
  "/timezone/current",
  describeRoute({
    tags: ["User"],
    description: "Retrieves the timezone of the current user",
    responses: {
      200: {
        description: "Timezone retrieved successfully",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                timezone: { type: "string" },
              },
            },
          },
        },
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
    const [ok, error, timezone] = await t(defaultUserService.getUserTimezone(userId));
    if (!ok) {
      if ((error as Error).message?.includes("not found")) {
        return c.json({ message: "User not found" }, 404);
      }
      return c.json({ message: "Internal server error" }, 500);
    }
    return c.json({ timezone: timezone }, 200);
  },
);

user.patch(
  "/timezone/",
  describeRoute({
    tags: ["User"],
    description: "Updates the timezone of the current user",
    requestBody: {
      description: "Timezone update payload",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              timezone: { type: "string" },
            },
            required: ["timezone"],
          },
        },
      },
    },
    responses: {
      200: {
        description: "Timezone updated successfully",
      },
      400: {
        description: "Bad request",
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
    const { timezoneId } = await c.req.json();
    if (typeof timezoneId !== "string") {
      return c.json({ message: "Bad request" }, 400);
    }
    const [ok, error] = await t(defaultUserService.updateUserTimezone(userId, timezoneId));
    if (!ok) {
      if ((error as Error).message?.includes("not found")) {
        return c.json({ message: "User not found" }, 404);
      }
      return c.json({ message: "Internal server error" }, 500);
    }
    return c.json({ message: "Timezone updated successfully" }, 200);
  },
);
