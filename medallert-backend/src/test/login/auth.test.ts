import { test, expect, jest } from '@jest/globals';
import { RegisterService } from "../../services/register-service.js";

test('Register user test', async () => {
  const email = 'test@example.com';
  const password = 'password';
  const fullName = 'Test User';
  const phone = '1234567890'
  const userCandidate = {
    password,
    fullName,
    email,
    phone,
  };

  const mockUsersRepository = {
    findAnyUserByEmail: jest.fn().mockResolvedValue(null),
    addUser: jest.fn().mockImplementation((arg: any) => Promise.resolve({ ...arg, userId: 'user-123' })),
  };

  const mockCodeRepository = {
    generateCode: jest.fn().mockResolvedValue({ value: '123456' }),
  };

  const mockEmailTransport = {
    sendEmail: jest.fn().mockResolvedValue(undefined),
  };

  const service = new RegisterService(
    mockUsersRepository as any,
    mockCodeRepository as any,
    mockEmailTransport as any,
  );

  const [ok, error, user] = await service.registerUser(userCandidate);
  
  expect(ok).toBe(true);
  expect(error).toBeFalsy();
  expect(user).toBeDefined();
  expect(user?.email).toBe(email);
  expect(mockUsersRepository.findAnyUserByEmail).toHaveBeenCalledWith(email);
  expect(mockUsersRepository.addUser).toHaveBeenCalled();
  expect(mockCodeRepository.generateCode).toHaveBeenCalled();
  expect(mockEmailTransport.sendEmail).toHaveBeenCalled();
});