import { Hono } from "hono";
import { register } from "./register.js";
import { login } from "./login.js";

export const auth = new Hono();

auth.route("/", register);
auth.route("/", login);
