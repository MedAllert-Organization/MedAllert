import { createMiddleware } from "hono/factory";
import { t } from "try";
import { defaultTokenProvider, type JWTProvider } from "../../common/jwt.js";

export const authMiddlewareFactory = (tokenProvider: JWTProvider) =>
  createMiddleware(async (c, next) => {
    const token = c.req.header("Authorization")?.replace("Bearer ", "");

    const [ok, _, result] = await t(tokenProvider.validateToken(token ?? ""));
    if (!(ok && result)) {
      return c.text("", 401);
    }
    const verified = result as { sub: string };
    c.set("userId", verified.sub);
    await next();
  });

export const authMiddleware = authMiddlewareFactory(defaultTokenProvider);
