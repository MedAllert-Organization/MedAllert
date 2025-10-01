import {Hono} from "hono";
import reportRoute from "./report.routes.js";

const app = new Hono();
app.route("/report",reportRoute);
export default app;