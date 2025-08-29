import { Hono } from "hono";
import { auth } from "./routes/auth/index.js";
import { hello } from "./routes/hello.js";
import { authMiddleware } from "./routes/middleware/auth-middleware.js";
import { configureOpenAPIDocs } from "./routes/open-api.js";
import { passwordRecovery } from "./routes/password-recovery/index.js";

export const app = new Hono();

configureOpenAPIDocs(app);
app.route("/auth", auth);
app.route("/recover-password", passwordRecovery);
/// Authenticated Routes
app.use(authMiddleware);
app.route("/", hello);
