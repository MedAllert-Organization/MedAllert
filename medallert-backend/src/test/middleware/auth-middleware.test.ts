import {
  jest,
  describe,
  test,
  expect,
  beforeEach,
  afterEach,
} from "@jest/globals";
import { Hono } from "hono";
import { authMiddleware } from "../../routes/middleware/auth-middleware.js";
import { defaultTokenProvider } from "../../common/jwt.js";

describe("authMiddleware", () => {
  let app: Hono;
  
  let validateTokenSpy: jest.SpiedFunction<
    typeof defaultTokenProvider.validateToken
  >;

  beforeEach(() => {
    app = new Hono();
    validateTokenSpy = jest.spyOn(defaultTokenProvider, "validateToken");
    app.use("*", authMiddleware);
    app.get("/test", (c) => c.json({ userId: (c as any).get("userId") }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should set userId for a valid token", async () => {
    const userId = "user-123";
    validateTokenSpy.mockResolvedValue({ sub: userId });

    const req = new Request("http://localhost/test", {
      headers: {
        Authorization: "Bearer valid-token",
      },
    });

    const res = await app.request(req);

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.userId).toBe(userId);
    expect(validateTokenSpy).toHaveBeenCalledWith("valid-token");
  });

  test("should return 401 for a missing token", async () => {
    validateTokenSpy.mockResolvedValue(null);
    const req = new Request("http://localhost/test");
    const res = await app.request(req);
    expect(res.status).toBe(401);
    expect(validateTokenSpy).toHaveBeenCalledWith("");
  });

  test("should return 401 for an invalid token", async () => {
    validateTokenSpy.mockResolvedValue(null);

    const req = new Request("http://localhost/test", {
      headers: {
        Authorization: "Bearer invalid-token",
      },
    });

    const res = await app.request(req);

    expect(res.status).toBe(401);
    expect(validateTokenSpy).toHaveBeenCalledWith("invalid-token");
  });

  test("should return 401 for a malformed Authorization header", async () => {
    validateTokenSpy.mockResolvedValue(null);
    const req = new Request("http://localhost/test", {
      headers: {
        Authorization: "invalid-token",
      },
    });

    const res = await app.request(req);

    expect(res.status).toBe(401);
    expect(validateTokenSpy).toHaveBeenCalledWith("invalid-token");
  });
});
