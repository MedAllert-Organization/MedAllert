import { Hono } from "hono";
import * as z from "zod";
import { describeRoute } from "hono-openapi";
import { validator, resolver } from "hono-openapi/zod";
import { randomUUID } from "node:crypto";
import { sign, verify } from "hono/jwt";
import dayjs from "dayjs";
import { createMiddleware } from "hono/factory";
import * as argon2 from "argon2";

export const auth = new Hono();

export const jwtSecret = "";

export const LoginSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  password: z
    .string()
    .min(8, "Senha deve possuir 8 caracteres")
    .max(64, "Senha é muito longa")
    .regex(/(?=.*[A-Za-z])(?=.*\d).*/, "Senha deve conter letras e números"),
});

auth.post(
  "/register",
  describeRoute({
    description: "Hello Endpoint",
    responses: {
      201: {
        description: "Successful user registration",
      },
      400: {
        description: "Invalid user registration",
      },
    },
  }),
  validator("json", LoginSchema),
  async (c) => {
    const { email, password } = c.req.valid("json");
    if (findUser(email)) {
      return c.text("", 400);
    }

    const hash = await argon2.hash(password);
    const user: User = { id: randomUUID(), email, hash };
    addUser(user);

    console.log("created: ---\n", user);
    return c.text("", 201);
  },
);

auth.post(
  "/login",
  describeRoute({
    description: "Hello Endpoint",
    responses: {
      200: {
        description: "Successful login",
        content: {
          "application/json": {
            schema: resolver(z.object({ token: z.string() })),
          },
        },
      },
      401: {
        description: "Invalid login credentials",
      },
    },
  }),
  validator("json", LoginSchema),
  async (c) => {
    const userCandidate = c.req.valid("json");

    const user = findUser(userCandidate.email);
    if (!user) {
      return c.text("", 401);
    }

    const matchPasssword = await argon2.verify(
      user.hash,
      userCandidate.password,
    );
    if (!matchPasssword) {
      return c.text("", 401);
    }

    const exp = dayjs().add(7, "day").unix();
    const token = await sign({ sub: user.id, exp }, jwtSecret, "HS256");

    return c.json({ token });
  },
);

export const authMiddleware = createMiddleware(async (c, next) => {
  const token = c.req.header("Authorization")?.replace("Bearer ", "");
  try {
    const verified = await verify(token ?? "", jwtSecret, "HS256");
    c.set("userId", verified.sub);
    await next();
  } catch (e) {
    return c.status(401);
  }
});

type User = {
  id: string;
  email: string;
  hash: string;
};

const users: User[] = [];

function findUser(email: string) {
  return users.find((u) => u.email === email);
}

function addUser(newUser: User) {
  users.push(newUser);
}
