import classNames from 'classnames';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { withNoAuth } from '../../hoc';

import SignIn from './sign-in';
import SignUp from './sign-up';

function AuthPage(props) {
  const location = useLocation();
  return (
    <div className="row bg-light p-5">
      <div className="col-12 mb-5">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link
              to="/auth/sign-in"
              className={classNames('nav-link', {
                active: location.pathname.includes('/sign-in'),
              })}>
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/auth/sign-up"
              className={classNames('nav-link', {
                active: location.pathname.includes('/sign-up'),
              })}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <Switch>
          <Route path="/auth/sign-in">
            <SignIn />
          </Route>
          <Route path="/auth/sign-up">
            <SignUp />
          </Route>
          <Redirect to="/auth/sign-in" />
        </Switch>
      </div>
    </div>
  );
}

export default withNoAuth(AuthPage);
