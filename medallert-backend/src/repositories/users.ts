export type User = {
  id: string;
  email: string;
  hash: string;
};

export interface UsersRepository {
  findUser(email: string): Promise<User | undefined>;
  addUser(newUser: User): Promise<void>;
}

class InMemoryUsersRepository implements UsersRepository {
  users: User[] = [];

  async findUser(email: string): Promise<User | undefined> {
    return this.users.find((u) => u.email === email);
  }

  async addUser(newUser: User): Promise<void> {
    this.users.push(newUser);
  }
}

export const defaultUsersRepository = new InMemoryUsersRepository();
