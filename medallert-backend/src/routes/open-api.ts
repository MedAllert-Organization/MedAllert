import { swaggerUI } from "@hono/swagger-ui";
import type { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { openAPISpecs } from "hono-openapi";

export function configureOpenAPIDocs(honoServerInstance: Hono) {
  honoServerInstance.get(
    "/openapi",
    openAPISpecs(honoServerInstance, {
      documentation: {
        info: {
          title: "MedAlert API",
          version: "1.0.0",
          description: "MedAlert",
        },
        servers: [
          { url: "http://localhost:3000", description: "Local Backend" },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
        security: [{ bearerAuth: [] }],
      },
    }),
  );

  honoServerInstance.get(
    "/swagger",
    basicAuth({ username: "dev", password: "dev" }),
    swaggerUI({ url: "/openapi" }),
  );
}
