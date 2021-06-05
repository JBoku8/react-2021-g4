import { Redirect } from 'react-router-dom';
import { AUTH_TOKEN } from '../utils/constants';
import { HOME_PATH } from '../utils/routePaths';

export const withNoAuth = (Component) => {
  const WithNoAuth = (props) => {
    const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
    if (token) {
      return <Redirect to={HOME_PATH} />;
    }

    return <Component {...props} />;
  };

  return WithNoAuth;
};

export default withNoAuth;
