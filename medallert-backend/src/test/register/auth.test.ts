import { test, expect, jest, describe, beforeEach } from '@jest/globals';
import { RegisterService } from "../../services/register-service.ts";

describe('RegisterService', () => {
  let mockUsersRepository: any;
  let mockCodeRepository: any;
  let mockEmailTransport: any;
  let service: RegisterService;

  beforeEach(() => {
    mockUsersRepository = {
      findAnyUserByEmail: jest.fn(),
      addUser: jest.fn(),
      confirmUserAccount: jest.fn(),
    };
    mockCodeRepository = {
      generateCode: jest.fn(),
      confirmCode: jest.fn(),
    };
    mockEmailTransport = {
      sendEmail: jest.fn(),
    };
    service = new RegisterService(
      mockUsersRepository,
      mockCodeRepository,
      mockEmailTransport,
    );
  });

  test('should not register if user exists', async () => {
    mockUsersRepository.findAnyUserByEmail.mockResolvedValue({ userId: '1' });
    const result = await service.registerUser({
      fullName: 'Test User',
      email: 'test@example.com',
      password: 'Password1',
      phone: '999999999',
    });
    const [ok, error, value] = result as any;
    expect(ok).toBe(false);
    expect(error).toBe('User already has an account');
    expect(value).toBeUndefined();
  });

  test('should register user and send code', async () => {
    mockUsersRepository.findAnyUserByEmail.mockResolvedValue(null);
    const userObj = { userId: '2', email: 'new@example.com', fullName: 'New User', phone: '999999999', hash: 'hash' };
    mockUsersRepository.addUser.mockResolvedValue(userObj);
    mockCodeRepository.generateCode.mockResolvedValue({ value: '123456' });
    
    const result = await service.registerUser({
      fullName: 'New User',
      email: 'new@example.com',
      password: 'Password1',
      phone: '999999999',
    });
    
    const [ok, error, value] = result as any;
    expect(ok).toBe(true);
    expect(error).toBeUndefined();
    expect(value).toBeDefined();
    expect(value?.email).toBe('new@example.com');
    expect(mockEmailTransport.sendEmail).toHaveBeenCalledWith(expect.objectContaining({
      to: 'new@example.com',
      body: expect.stringContaining('123456'),
    }));
  });

  test('should fail if addUser fails', async () => {
    mockUsersRepository.findAnyUserByEmail.mockResolvedValue(null);
    mockUsersRepository.addUser.mockRejectedValue(new Error('failed to create user'));
    
    const result = await service.registerUser({
      fullName: 'Fail User',
      email: 'fail@example.com',
      password: 'Password1',
      phone: '999999999',
    });
    
    const [ok, error, value] = result as any;
    expect(ok).toBe(false);
    expect(error).toBe('failed to create user');
    expect(value).toBeUndefined();
  });

  test('should confirm user account', async () => {
    mockUsersRepository.findAnyUserByEmail.mockResolvedValue({ userId: '3', email: 'confirm@example.com' });
    mockCodeRepository.confirmCode.mockResolvedValue(undefined);
    mockUsersRepository.confirmUserAccount.mockResolvedValue(undefined);
    
    const result = await service.confirmUserAccount({
      email: 'confirm@example.com',
      code: '654321',
    });
    
    const [ok, error, value] = result as any;
    expect(ok).toBe(true);
    expect(error).toBeUndefined();
    expect(value).toBe('success');
  });

  test('should fail confirmation if user not found', async () => {
    mockUsersRepository.findAnyUserByEmail.mockResolvedValue(null);
    
    const result = await service.confirmUserAccount({
      email: 'notfound@example.com',
      code: '654321',
    });
    
    const [ok, error, value] = result as any;
    expect(ok).toBe(false);
    expect(error).toBe('failed to find user with email');
    expect(value).toBeUndefined();
  });

  test('should fail confirmation if code is invalid', async () => {
    mockUsersRepository.findAnyUserByEmail.mockResolvedValue({ userId: '4', email: 'badcode@example.com' });
    mockCodeRepository.confirmCode.mockRejectedValue(new Error('failed to confirm code'));
    
    const result = await service.confirmUserAccount({
      email: 'badcode@example.com',
      code: '000000',
    });
    
    const [ok, error, value] = result as any;
    expect(ok).toBe(false);
    expect(error).toBe('failed to confirm code');
    expect(value).toBeUndefined();
  });

  test('should fail confirmation if user confirm fails', async () => {
    mockUsersRepository.findAnyUserByEmail.mockResolvedValue({ userId: '5', email: 'failconfirm@example.com' });
    mockCodeRepository.confirmCode.mockResolvedValue(undefined);
    mockUsersRepository.confirmUserAccount.mockRejectedValue(new Error('failed to confirm user'));
    
    const result = await service.confirmUserAccount({
      email: 'failconfirm@example.com',
      code: '111111',
    });
    
    const [ok, error, value] = result as any;
    expect(ok).toBe(false);
    expect(error).toBe('failed to confirm user');
    expect(value).toBeUndefined();
  });
});