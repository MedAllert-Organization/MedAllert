import { date } from "zod/v4";

export type User = {
  id: string;
  email: string;
  hash: string;
  confirmed_at?: Date;
  alerts : [Date]
};

export interface UsersRepository {
  findUnverifiedUserByEmail(email: string): Promise<User | undefined>;
  findUserByEmail(email: string): Promise<User | undefined>;
  findUser(id: string): Promise<User | undefined>;
  addUser(newUser: User): Promise<void>;
  updatePasswordForUser(userId: string, newPassword: string): Promise<void>;
  confirmUserAccount(email: string): Promise<void>;
  addAlert(id : string, alert : Date): Promise<Date | undefined>;
}

class InMemoryUsersRepository implements UsersRepository {
  users: User[] = [];

  async findUnverifiedUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find((u) => {
      return u.email === email;
    });
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find((u) => {
      return u.email === email && u.confirmed_at;
    });
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

  async confirmUserAccount(email: string): Promise<void> {
    const idx = this.users.findIndex((u) => u.email === email);
    if (idx !== -1) {
      const previousUser = this.users[idx];
      this.users[idx] = { ...previousUser, confirmed_at: new Date() };
    }
  }

  async addAlert(id: string, alert: Date): Promise<Date | undefined> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1){
      const user = this.users[index];
      user.alerts.push(alert);
      //Salvar no banco de dados
      return alert
    }
  }
}

export const defaultUsersRepository = new InMemoryUsersRepository();
