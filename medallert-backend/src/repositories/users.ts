export type User = {
	id: string;
	email: string;
	hash: string;
};

export interface UsersRepository {
	findUserByEmail(email: string): Promise<User | undefined>;
	findUser(id: string): Promise<User | undefined>;
	addUser(newUser: User): Promise<void>;
	updatePasswordForUser(userId: string, newPassword: string): Promise<void>;
}

class InMemoryUsersRepository implements UsersRepository {
	users: User[] = [];

	async findUserByEmail(email: string): Promise<User | undefined> {
		return this.users.find((u) => u.email === email);
	}

	async findUser(id: string): Promise<User | undefined> {
		return this.users.find((u) => u.id === id);
	}

	async addUser(newUser: User): Promise<void> {
		this.users.push(newUser);
	}

	async updatePasswordForUser(userId: string, hash: string): Promise<void> {
		const idx = this.users.findIndex((u) => u.id === userId);
		if (idx !== -1) {
			const previousUser = this.users[idx];
			this.users[idx] = { ...previousUser, hash };
		}
	}
}

export const defaultUsersRepository = new InMemoryUsersRepository();
