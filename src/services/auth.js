import { AUTH_TOKEN } from '../utils/constants';

export const login = async (credentials) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.trace(error);
    return error;
  }
};
export const signUp = async (credentials) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch {
    console.error('register ERROR');
    return undefined;
  }
};
export const logOut = async () => {
  try {
    localStorage.removeItem(AUTH_TOKEN);
    // cleanup
  } catch {
    console.error('logOut ERROR');
  }
};
