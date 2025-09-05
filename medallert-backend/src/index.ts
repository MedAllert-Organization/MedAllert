import { serve } from "@hono/node-server";
import { app } from "./api.js";
import dotenv from "dotenv";

import "./routes/open-api.js";

dotenv.config({ path: "envs/.env.development" });

serve(
  {
    fetch: app.fetch,
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
