import { Redirect } from 'react-router-dom';

export const withNoAuth = (Component) => {
  const WithNoAuth = (props) => {
    const token = JSON.parse(localStorage.getItem('auth.token'));
    if (token) {
      return <Redirect to="/" />;
    }

    return <Component {...props} />;
  };

  return WithNoAuth;
};
