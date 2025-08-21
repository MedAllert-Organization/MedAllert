import { Hono } from "hono";
import * as z from "zod";
import { describeRoute } from "hono-openapi";
import { resolver } from "hono-openapi/zod";

export const health = new Hono();

const responseSchema = z.string();

health.get(
  "/",
  describeRoute({
    description: "Healthcheck Endpoint",
    validateResponse: true,
    responses: {
      200: {
        description: "Successful response",
        content: {
          "text/plain": { schema: resolver(responseSchema) },
        },
      },
    },
  }),
  (c) => {
    return c.text("Healthcheck OK");
  },
);
