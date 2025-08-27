import { randomUUID } from "node:crypto";
import * as argon2 from "argon2";
import { error, ok } from "try";
import type { PromiseResult } from "../common/type-helpers.js";
import { addUser, findUser, type User } from "../repositories/users.js";
import type { LoginType } from "./login-service.js";

export class RegisterService {
  async execute({ email, password }: LoginType): PromiseResult<User> {
    if (findUser(email)) {
      return error("User already has an account");
    }
    const hash = await argon2.hash(password);
    const user: User = { id: randomUUID(), email, hash };
    addUser(user);
    return ok(user);
  }
}
