import type { PasswordHasher } from "../../common/password-hash.js";

export class MockPasswordHasher implements PasswordHasher {
  shouldFailHash = false;

  async hash(password: string) {
    if (this.shouldFailHash) throw new Error("Hash failed");
    return `hashed-${password}`;
  }

  async verify(hash: string, passwordCandidate: string) {
    return hash === `hashed-${passwordCandidate}`;
  }
}
