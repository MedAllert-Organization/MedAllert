import { Hono } from "hono";
import { changePassword } from "./change-password.js";
import { requestRecovery } from "./recover-password.js";

export const passwordRecovery = new Hono();

passwordRecovery.route("/", requestRecovery);
passwordRecovery.route("/", changePassword);
