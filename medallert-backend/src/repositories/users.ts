export type User = {
  id: string;
  email: string;
  hash: string;
};

export const users: User[] = [];

export function findUser(email: string) {
  return users.find((u) => u.email === email);
}

export function addUser(newUser: User) {
  users.push(newUser);
}
