import { serve } from "@hono/node-server";
import { app } from "./api.js";
import "./routes/open-api.js";

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
