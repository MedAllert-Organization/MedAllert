import { Hono } from "hono";
import { createAlert } from "./createAlert.js";

export const alertRoutes = new Hono();

alertRoutes.route("/alert", createAlert);
