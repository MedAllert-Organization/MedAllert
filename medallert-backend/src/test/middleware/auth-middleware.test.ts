import { describe, test, expect, beforeEach } from "@jest/globals";
import { Hono } from "hono";
import { authMiddlewareFactory } from "../../routes/middleware/auth-middleware.js";
import type { Env } from "../../common/type-helpers.js";
import { MockJWTProvider } from "../_mocks/mock-jwt-provider.js";

describe("authMiddleware", () => {
  let app: Hono<Env>;
  let mockTokenProvider: MockJWTProvider;

  beforeEach(() => {
    app = new Hono<Env>();
    mockTokenProvider = new MockJWTProvider();
    const authMiddleware = authMiddlewareFactory(mockTokenProvider);
    app.use("*", authMiddleware);
    app.get("/test", (c) => c.json({ userId: c.get("userId") }));
  });

  test("should set userId for a valid token", async () => {
    const userId = "user-123";
    mockTokenProvider.setTokenPayload({ sub: userId });

    const req = new Request("http://localhost/test", {
      headers: {
        Authorization: "Bearer valid-token",
      },
    });

    const res = await app.request(req);

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.userId).toBe(userId);
    expect(mockTokenProvider.lastToken).toBe("valid-token");
  });

  test("should return 401 for a missing token", async () => {
    const req = new Request("http://localhost/test");
    const res = await app.request(req);
    expect(res.status).toBe(401);
    expect(mockTokenProvider.lastToken).toBe("");
  });

  test("should return 401 for an invalid token", async () => {
    const req = new Request("http://localhost/test", {
      headers: {
        Authorization: "Bearer invalid-token",
      },
    });

    const res = await app.request(req);

    expect(res.status).toBe(401);
    expect(mockTokenProvider.lastToken).toBe("invalid-token");
  });

  test("should return 401 for a malformed Authorization header", async () => {
    const req = new Request("http://localhost/test", {
      headers: {
        Authorization: "invalid-token",
      },
    });

    const res = await app.request(req);

    expect(res.status).toBe(401);
    expect(mockTokenProvider.lastToken).toBe("invalid-token");
  });
});
