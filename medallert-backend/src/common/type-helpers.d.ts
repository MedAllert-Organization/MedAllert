import type { Result } from "try";

export type PromiseResult<T> = Promise<Result<T>>;

export type Env = { Variables: { userId?: string } };
