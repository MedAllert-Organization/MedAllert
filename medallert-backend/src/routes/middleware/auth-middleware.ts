import { createMiddleware } from "hono/factory";
import { defaultTokenProvider } from "../../common/jwt.js";
import { t } from "try";

export const authMiddleware = createMiddleware(async (c, next) => {
  const token = c.req.header("Authorization")?.replace("Bearer ", "");

  const [ok, error, result] = await t(
    defaultTokenProvider.validateToken(token ?? ""),
  );
  if (!(ok && result)) {
    console.error("token validation error");
    return c.text("", 401);
  }
  const verified = result as { sub: string };
  c.set("userId", verified.sub);
  await next();
});
