import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/zod";
import { z } from "zod";
import { defaultUsersRepository } from "../../repositories/users.js"; // Adjust path if needed

const alertSchema = z.object({
  userId: z.string(),
  date: z.string(),
});

export const createAlert = new Hono();

createAlert.post(
  "/:userId/:date",
  describeRoute({
    description: "Create alert",
    responses: {
      200: { description: "Alert created" },
      400: { description: "Invalid data" },
      401: { description: "Unauthorized" },
    },
  }),
  validator("json", alertSchema),
  async (c) => {
    const alertData = c.req.valid("json");
    const userId = c.req.param("userId") || "";
    const date = new Date(c.req.param("date"));
    try {
      const result = await defaultUsersRepository.addAlert( userId, date);
      return c.json(result, 200);
    } catch (err: any) {
      return c.json({ error: err.message }, 400);
    }
  }
);