import { Hono } from "hono";
import { logger } from "hono/logger";
import { health } from "./routes/health.js";
import { requestId } from "hono/request-id";
import { hello } from "./routes/hello.js";

export const app = new Hono();

app.use(logger());
app.use("*", requestId());
app.route("/", hello);
app.route("/health", health);
