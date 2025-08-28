import * as argon2 from "argon2";

export interface PasswordHasher {
	hash(password: string): Promise<string>;
	verify(hash: string, passwordCandidate: string): Promise<Boolean>;
}

class Argon2PasswordHasher implements PasswordHasher {
	hash(password: string): Promise<string> {
		return argon2.hash(password);
	}
	verify(hash: string, passwordCandidate: string): Promise<boolean> {
		return argon2.verify(hash, passwordCandidate);
	}
}

export const defaultPasswordHasher = new Argon2PasswordHasher();
