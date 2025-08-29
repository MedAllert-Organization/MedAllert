import { Hono } from "hono";
import { confirm } from "./confirm.js";
import { login } from "./login.js";
import { changePassword } from "./password-recovery/change-password.js";
import { requestRecovery } from "./password-recovery/recover-password.js";
import { register } from "./register.js";

export const auth = new Hono();

auth.route("/", register);
auth.route("/", login);
auth.route("/", confirm);
auth.route("/recover-password", requestRecovery);
auth.route("/change-password", changePassword);
