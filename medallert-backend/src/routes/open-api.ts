import { swaggerUI } from "@hono/swagger-ui";
import { openAPISpecs } from "hono-openapi";
import { app } from "../api.js";
import { basicAuth } from "hono/basic-auth";

app.get(
  "/openapi",
  openAPISpecs(app, {
    documentation: {
      info: {
        title: "MedAlert API",
        version: "1.0.0",
        description: "MedAlert",
      },
      servers: [{ url: "http://localhost:3000", description: "Local Server" }],
    },
  }),
);

app.get(
  "/swagger",
  basicAuth({ username: "dev", password: "dev" }),
  swaggerUI({ url: "/openapi" }),
);
