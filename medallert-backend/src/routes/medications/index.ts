import { Hono } from "hono";
import annotation from "./annotation-routes.js";
import { medication } from "./medication.js";
import { notification } from "./notification.js";
//import { createReportRoute } from "./report-routes.js";
import { sharing } from "./sharing.js";
import { soundTypes } from "./sound-types.js";
import { treatment } from "./treatment.js";
import { visualTypes } from "./visual-types.js";

export const medicationIndex = new Hono();
medicationIndex.route("/soundTypes", soundTypes);
medicationIndex.route("/visualTypes", visualTypes);
medicationIndex.route("/medication", medication);
medicationIndex.route("/notification", notification);
medicationIndex.route("/treatment", treatment);
//medicationIndex.route("/report", createReportRoute);
medicationIndex.route("/annotation", annotation);
medicationIndex.route("/", sharing);
