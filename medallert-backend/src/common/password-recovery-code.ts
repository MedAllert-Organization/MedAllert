import { randomBytes, randomUUID } from "node:crypto";
import dayjs from "dayjs";

type Code = {
	id: string;
	userId: string;
	value: string;
	expiresAt: Date;
	confirmedAt?: Date;
};

export interface PasswordRecoveryCodeProvider {
	generateCode(userId: string): Promise<Code>;
	confirmCode(userId: string, value: string): Promise<void>;
	canGenerateNextRecoveryCode(userId: string): Promise<boolean>;
}

class InmemoryCodeProvider implements PasswordRecoveryCodeProvider {
	codes: Code[] = [];

	async generateCode(userId: string): Promise<Code> {
		const code = this.makeCode(userId);
		this.codes.push(code);
		return code;
	}

	async confirmCode(userId: string, value: string): Promise<void> {
		const codeCandidate = this.findCodeByValue(userId, value);
		if (!codeCandidate) throw new Error("Invalid code cant be confirmed");
		this.markCodeAsConfirmed(codeCandidate.id);
	}

	async canGenerateNextRecoveryCode(userId: string): Promise<boolean> {
		const latest = this.getLastTokenGenerated(userId);
		if (latest) {
			return dayjs().isAfter(dayjs(latest.expiresAt));
		}
		return true;
	}

	private getLastTokenGenerated(userId: string) {
		const latest = this.codes
			.filter((c) => c.userId == userId)
			.sort((a, b) => b.expiresAt.getTime() - a.expiresAt.getTime())
			.reverse()
			.at(0);
		return latest;
	}

	private makeSixDigitsCodeValue(): string {
		const value = randomBytes(3).toString("hex").toUpperCase();
		return value;
	}

	private makeCode(userId: string): Code {
		const expiresAt = dayjs().add(15, "minutes").toDate();
		const code: Code = {
			id: randomUUID(),
			userId,
			value: this.makeSixDigitsCodeValue(),
			expiresAt,
		};
		return code;
	}

	private findCodeByValue(userId: string, value: string): Code | undefined {
		const isValid = (test: Date) => dayjs().isBefore(dayjs(test));
		const code = this.codes.find(
			(t) =>
				t.userId === userId &&
				t.value.toLowerCase() === value.toLowerCase() &&
				!t.confirmedAt &&
				isValid(t.expiresAt),
		);
		return code;
	}

	private markCodeAsConfirmed(codeId: string) {
		const idx = this.codes.findIndex((c) => c.id === codeId);
		if (idx !== -1) {
			const previousCode = this.codes[idx];
			const confirmed: Code = { ...previousCode, confirmedAt: new Date() };
			this.codes[idx] = confirmed;
		}
	}
}

export const defaultCodeProvider = new InmemoryCodeProvider();
