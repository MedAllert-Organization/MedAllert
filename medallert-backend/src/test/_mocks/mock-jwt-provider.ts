import type { JWTProvider } from "../../common/jwt.js";

export class MockJWTProvider implements JWTProvider {
  private payload: unknown = null;
  public lastToken: string | null = null;

  async createToken(_: string): Promise<string> {
    return "mock-token";
  }
  async validateToken(token: string): Promise<unknown> {
    this.lastToken = token;
    if (this.payload) {
      return Promise.resolve(this.payload);
    }
    return Promise.reject("Invalid token");
  }

  setTokenPayload(payload: unknown) {
    this.payload = payload;
  }
}