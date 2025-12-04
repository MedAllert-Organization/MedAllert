import { Hono } from "hono";
import type { Env } from "../../common/type-helpers.d.js";
import { describe } from "node:test";
import { describeRoute } from "hono-openapi";
import { defaultTimezoneService } from "../../services/timezone-service.ts";


export const timezone = new Hono<Env>();

timezone.get(
    "/",
    describeRoute({
        tags: ["Timezone"],
        description: "List timezones",
        responses: {
            201: {
                description: "Successful timezone list",
            },
            400: {
                description: "failed list timezone",
            },
        },
    }),
    async (c) => {
        const timezones = await defaultTimezoneService.getAllTimezones();

        if (!timezones) {
            return c.json({ success: false, error: "Failed to fetch timezones" }, 400);
        }
        return c.json({ success: true, timezones }, 201);
    },
);
 
