import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Redirect, Route, Switch, useLocation } from 'react-router';

import { withNoAuth } from '../../hoc';

import SignIn from './sign-in';
import SignUp from './sign-up';

import { SIGN_IN_PATH, SIGN_UP_PATH } from '../../utils/routePaths';

function AuthPage() {
  const location = useLocation();
  return (
    <div className="row bg-light p-5">
      <div className="col-12 mb-5">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link
              to={SIGN_IN_PATH}
              className={classNames('nav-link', {
                active: location.pathname.includes(SIGN_IN_PATH),
              })}>
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={SIGN_UP_PATH}
              className={classNames('nav-link', {
                active: location.pathname.includes(SIGN_UP_PATH),
              })}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <Switch>
          <Route path={SIGN_IN_PATH}>
            <SignIn />
          </Route>
          <Route path={SIGN_UP_PATH}>
            <SignUp />
          </Route>
          <Redirect to={SIGN_IN_PATH} />
        </Switch>
      </div>
    </div>
  );
}

export default withNoAuth(AuthPage);
