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
  }
};
export const logOut = async () => {
  try {
    localStorage.removeItem('auth.token');
    // cleanup
  } catch {
    console.error('logOut ERROR');
  }
};
