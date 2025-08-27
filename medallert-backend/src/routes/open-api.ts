import { Hono } from "hono";
import { swaggerUI } from "@hono/swagger-ui";
import { openAPISpecs } from "hono-openapi";
import { basicAuth } from "hono/basic-auth";

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
    "/",
    basicAuth({ username: "dev", password: "dev" }),
    swaggerUI({ url: "/openapi" }),
  );
}
