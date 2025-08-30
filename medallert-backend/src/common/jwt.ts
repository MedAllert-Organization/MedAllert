import dayjs from "dayjs";
import { sign, verify } from "hono/jwt";

// FIXME: this is temporary, should be an environment variable
const jwtSecret = "7a6f364276826368377671a70250efcf8cd47a76ffb0aab2";

type Token = string;
type TokenPayload = unknown;
export interface JWTProvider {
  createToken(userId: string): Promise<Token>;
  validateToken(token: string): Promise<TokenPayload>;
}

class TokenProvider implements JWTProvider {
  private static readonly algorithm = "HS256" as const;

  async createToken(userId: string): Promise<Token> {
    const exp = dayjs().add(7, "day").unix();
    const token = await sign(
      { sub: userId, exp },
      jwtSecret,
      TokenProvider.algorithm,
    );
    return token;
  }
  validateToken(token: string): Promise<unknown> {
    return verify(token, jwtSecret, TokenProvider.algorithm);
  }
}

export const defaultTokenProvider = new TokenProvider();
