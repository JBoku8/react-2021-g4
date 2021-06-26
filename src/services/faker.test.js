import axios from 'axios';
import { getUsers } from './faker';

jest.mock('axios');
const traceMock = jest.fn();
const groupMock = jest.fn();
const groupEndMock = jest.fn();

global.console.trace = traceMock;
global.console.group = groupMock;
global.console.groupEnd = groupEndMock;

describe('faker.js testing', () => {
  test('getUsers request rejection', async () => {
    const rejection = new Error('rejected');
    axios.get = jest.fn().mockRejectedValue(rejection);
    const result = await getUsers();
    expect(result).toStrictEqual(rejection);
    expect(traceMock).toBeCalledWith(rejection);
    expect(groupEndMock).toBeCalledTimes(1);
    expect(groupMock).toBeCalledWith('[getUsers]@catch');
  });

  test('getUsers request resolved', async () => {
    const mockResponse = {
      data: {
        data: [
          {
            name: 'mock-name',
          },
        ],
      },
    };
    axios.get = jest.fn().mockResolvedValue(mockResponse);
    const result = await getUsers();
    expect(result).toStrictEqual(mockResponse.data.data);
  });
});
