import { Hono } from "hono";
import { auth } from "./routes/auth/index.js";
import { alertRoutes } from "./routes/alert/index.js";
import { authMiddleware } from "./routes/middleware/auth-middleware.js";
import { configureOpenAPIDocs } from "./routes/open-api.js";

export const app = new Hono();

configureOpenAPIDocs(app);
app.get("/", (c) => c.redirect("/swagger"));
app.route("/auth", auth);
app.route("/", alertRoutes);
/// Authenticated Routes
app.use(authMiddleware);
