import { Hono } from "hono";
import { login } from "./login.js";
import { register } from "./register.js";

export const auth = new Hono();

auth.route("/", register);
auth.route("/", login);
