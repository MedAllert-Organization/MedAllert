import { describe, test, expect, beforeEach, jest } from "@jest/globals";
import { Hono } from "hono";
import type { Env } from "../../common/type-helpers.js";
import { MockUsersRepository } from "../_mocks/mock-users-repository.js";
import { MockJWTProvider } from "../_mocks/mock-jwt-provider.js";

process.env.JWT_SECRET = "test-secret-key";

let mockUsersRepository: MockUsersRepository;
let mockJWTProvider: MockJWTProvider;
jest.mock("../../infra/prisma/generated/prisma/index.js", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    users: {
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    $transaction: jest.fn(),
    medications: {
      findMany: jest.fn(),
    },
    annotations: {
      deleteMany: jest.fn(),
    },
    notifications: {
      deleteMany: jest.fn(),
    },
    treatmentShares: {
      deleteMany: jest.fn(),
    },
    treatments: {
      deleteMany: jest.fn(),
    },
    verificationCodes: {
      deleteMany: jest.fn(),
    },
  })),
}));

jest.mock("../../infra/prisma/client.js", () => ({
  prisma: {
    users: {
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    $transaction: jest.fn(),
    medications: {
      findMany: jest.fn(),
    },
    annotations: {
      deleteMany: jest.fn(),
    },
    notifications: {
      deleteMany: jest.fn(),
    },
    treatmentShares: {
      deleteMany: jest.fn(),
    },
    treatments: {
      deleteMany: jest.fn(),
    },
    verificationCodes: {
      deleteMany: jest.fn(),
    },
  },
}));

const mockUsersRepoInstance = new MockUsersRepository();
const mockJWTInstance = new MockJWTProvider();
jest.mock("../../repositories/users.js", () => ({
  defaultUsersRepository: mockUsersRepoInstance,
}));

jest.mock("../../common/jwt.js", () => {
  if (!process.env.JWT_SECRET) {
    process.env.JWT_SECRET = "test-secret-key";
  }
  return {
    defaultTokenProvider: mockJWTInstance,
  };
});

const mockArgon2Verify = jest.fn() as any;
jest.mock("argon2", () => ({
  verify: mockArgon2Verify,
}));

import { login } from "../../routes/auth/login.js";
import { defaultUsersRepository } from "../../repositories/users.js";
import { defaultTokenProvider } from "../../common/jwt.js";

describe("Login Route", () => {
  let app: Hono<Env>;

  beforeEach(() => {
    app = new Hono<Env>();
    app.route("/", login);

    mockUsersRepository = mockUsersRepoInstance;
    mockJWTProvider = mockJWTInstance;

    mockUsersRepository.users = [];
    mockJWTProvider.lastToken = null;
    mockArgon2Verify.mockClear();
    jest.clearAllMocks();
  });

  test("should return 200 with token on successful login", async () => {
    const testUser = {
      userId: "user-123",
      fullName: "Test User",
      email: "test@example.com",
      phone: "999999999",
      hash: "hashed-password",
      timezoneId: null,
      image: null,
      acceptedTosAt: new Date(),
      accountConfirmedAt: new Date(),
    };
    mockUsersRepository.users.push(testUser);

    mockArgon2Verify.mockResolvedValue(true);

    const mockToken = "mock-jwt-token";
    jest.spyOn(mockJWTProvider, "createToken").mockResolvedValue(mockToken);

    const req = new Request("http://localhost/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        password: "Password123",
      }),
    });

    const res = await app.request(req);

    if (res.status !== 200) {
      const errorText = await res.text();
      console.error("Unexpected error response:", res.status, errorText);
      try {
        const errorJson = await res.json();
        console.error("Error JSON:", errorJson);
      } catch {
      }
    }
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ token: mockToken });
    expect(mockArgon2Verify).toHaveBeenCalledWith("hashed-password", "Password123");
    expect(mockUsersRepository.findConfirmedUserByEmail).toHaveBeenCalledWith("test@example.com");
  });

  test("should return 401 when user is not found", async () => {
    mockUsersRepository.users = [];

    const req = new Request("http://localhost/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "nonexistent@example.com",
        password: "Password123",
      }),
    });

    const res = await app.request(req);

    expect(res.status).toBe(401);
    expect(await res.text()).toBe("");
    expect(mockUsersRepository.findConfirmedUserByEmail).toHaveBeenCalledWith("nonexistent@example.com");
    expect(mockArgon2Verify).not.toHaveBeenCalled();
  });

  test("should return 401 when user exists but password is incorrect", async () => {
    const testUser = {
      userId: "user-123",
      fullName: "Test User",
      email: "test@example.com",
      phone: "999999999",
      hash: "hashed-password",
      timezoneId: null,
      image: null,
      acceptedTosAt: new Date(),
      accountConfirmedAt: new Date(),
    };
    mockUsersRepository.users.push(testUser);

    mockArgon2Verify.mockResolvedValue(false);

    const req = new Request("http://localhost/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        password: "WrongPassword123",
      }),
    });

    const res = await app.request(req);

    expect(res.status).toBe(401);
    expect(await res.text()).toBe("");
    expect(mockArgon2Verify).toHaveBeenCalledWith("hashed-password", "WrongPassword123");
  });

  test("should return 401 when user exists but account is not confirmed", async () => {
    const testUser = {
      userId: "user-123",
      fullName: "Test User",
      email: "test@example.com",
      phone: "999999999",
      hash: "hashed-password",
      timezoneId: null,
      image: null,
      acceptedTosAt: new Date(),
      accountConfirmedAt: null,
    };
    mockUsersRepository.users.push(testUser);

    const req = new Request("http://localhost/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        password: "Password123",
      }),
    });

    const res = await app.request(req);

    expect(res.status).toBe(401);
    expect(await res.text()).toBe("");
    expect(mockUsersRepository.findConfirmedUserByEmail).toHaveBeenCalledWith("test@example.com");
    expect(mockArgon2Verify).not.toHaveBeenCalled();
  });

  test("should return 400 when email is invalid", async () => {
    const req = new Request("http://localhost/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "invalid-email",
        password: "Password123",
      }),
    });

    const res = await app.request(req);

    expect(res.status).toBe(400);
  });

  test("should return 400 when email is missing", async () => {
    const req = new Request("http://localhost/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: "Password123",
      }),
    });

    const res = await app.request(req);

    expect(res.status).toBe(400);
  });

  test("should return 400 when password is too short", async () => {
    const req = new Request("http://localhost/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        password: "Short1",
      }),
    });

    const res = await app.request(req);

    expect(res.status).toBe(400);
  });

  test("should return 400 when password doesn't contain letters and numbers", async () => {
    const req = new Request("http://localhost/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        password: "onlyletters",
      }),
    });

    const res = await app.request(req);

    expect(res.status).toBe(400);
  });

  test("should return 400 when password is missing", async () => {
    const req = new Request("http://localhost/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
      }),
    });

    const res = await app.request(req);

    expect(res.status).toBe(400);
  });

  test("should return 400 when request body is invalid JSON", async () => {
    const req = new Request("http://localhost/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "invalid json",
    });

    const res = await app.request(req);

    expect(res.status).toBe(400);
  });
});

