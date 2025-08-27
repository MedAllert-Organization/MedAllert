import { Hono } from "hono";
import { hello } from "./routes/hello.js";
import { configureOpenAPIDocs } from "./routes/open-api.js";
import { auth, authMiddleware } from "./routes/auth.js";

export const app = new Hono();

configureOpenAPIDocs(app);
app.route("/auth", auth);

/// Authenticated Routes
app.use(authMiddleware);
app.route("/", hello);
