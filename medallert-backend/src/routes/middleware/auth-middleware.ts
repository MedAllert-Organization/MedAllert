import { createMiddleware } from "hono/factory";
import { t } from "try";
import { defaultTokenProvider } from "../../common/jwt.js";

export const authMiddleware = createMiddleware(async (c, next) => {
  const token = c.req.header("Authorization")?.replace("Bearer ", "");

  const [ok, _, result] = await t(
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
