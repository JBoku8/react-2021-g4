import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export const withAuthProtected = (Component) => {
  const WithAuthProtected = (props) => {
    useEffect(() => {
      console.log('accessing secured page');
    }, []);

    const token = JSON.parse(localStorage.getItem('auth.token'));
    if (!token) {
      return <Redirect to="/" />;
    }

    return <Component {...props} />;
  };

  return WithAuthProtected;
};

export default withAuthProtected;
