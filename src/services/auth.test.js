import { login } from './auth';

const traceMock = jest.fn();

global.console.trace = traceMock;

describe('auth.js testing', () => {
  test('login request rejection', async () => {
    const rejection = new Error('rejected');
    global.fetch = jest.fn().mockRejectedValue(rejection);
    const result = await login();

    expect(traceMock).toBeCalledWith(rejection);
    expect(result).toStrictEqual(rejection);
  });

  test('login request resolved', async () => {
    const response = {
      token: 'mock-token',
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: jest.fn().mockResolvedValue(response),
      }),
    );

    const result = await login();
    expect(result).toStrictEqual(response);
  });
});
