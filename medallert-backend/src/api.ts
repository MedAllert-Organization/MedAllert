import { Hono } from "hono";
import { auth } from "./routes/auth/index.js";
import { authMiddleware } from "./routes/middleware/auth-middleware.js";
import { configureOpenAPIDocs } from "./routes/open-api.js";
import { cors } from "hono/cors";

export const app = new Hono();

configureOpenAPIDocs(app);
app.use(cors());
app.get("/", (c) => c.redirect("/swagger"));
app.route("/auth", auth);
/// Authenticated Routes
app.use(authMiddleware);
