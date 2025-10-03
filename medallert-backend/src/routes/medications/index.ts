import { Hono } from "hono";
import { notification } from "./notification.js";
import { medication } from "./medication.js";
import { soundTypes } from "./sound-types.js";
import { visualTypes } from "./visual-types.js";
import { treatment } from "./treatment.js";
import reportRoute from "./report-routes.js";

export const medicationIndex = new Hono();
medicationIndex.route('/soundTypes', soundTypes);
medicationIndex.route('/visualTypes', visualTypes);
medicationIndex.route('/medication', medication);
medicationIndex.route('/notification', notification);
medicationIndex.route('/treatment', treatment);
medicationIndex.route("/report",reportRoute);