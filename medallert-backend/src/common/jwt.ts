import dayjs from "dayjs";
import { sign, verify } from "hono/jwt";
import "dotenv/config";

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("JWT_SECRET env variable is not defined.");
}

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
      jwtSecret as string,
      TokenProvider.algorithm
    );
    return token;
  }
  validateToken(token: string): Promise<unknown> {
    return verify(token, jwtSecret as string, TokenProvider.algorithm);
  }
}

export const defaultTokenProvider = new TokenProvider();
