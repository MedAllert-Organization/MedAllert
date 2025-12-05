import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./routes/auth/index.js";
import { medicationIndex } from "./routes/medications/index.js";
import { authMiddleware } from "./routes/middleware/auth-middleware.js";
import { configureOpenAPIDocs } from "./routes/open-api.js";

import { user } from "./routes/user/index.js";
import { timezone } from "./routes/timezone/index.ts";

export const app = new Hono();

configureOpenAPIDocs(app);
app.use(cors());
app.get("/", (c) => c.redirect("/swagger"));
app.route("/auth", auth);

/// Authenticated Routes
app.use(authMiddleware);
app.route("/medication", medicationIndex);
app.route("/timezone", timezone);
app.route("/user", user);
