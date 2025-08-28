import { Hono } from "hono";
import { hello } from "./routes/hello.js";
import { configureOpenAPIDocs } from "./routes/open-api.js";
import { authMiddleware } from "./routes/middleware/auth-middleware.js";
import { auth } from "./routes/auth/index.js";
import { passwordRecovery } from "./routes/password-recovery.js";

export const app = new Hono();

configureOpenAPIDocs(app);
app.route("/auth", auth);
/// Authenticated Routes
app.use(authMiddleware);
app.route("/recover-password", passwordRecovery);
app.route("/", hello);
