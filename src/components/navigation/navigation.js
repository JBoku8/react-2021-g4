import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelector } from '../../redux/selectors';
import * as routes from '../../utils/routePaths';

import './styles.css';

function Navigation() {
  const authorized = useSelector(authSelector);

  return (
    <div className="row mt-4 mb-4">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={routes.HOME_PATH}
            exact
            activeClassName="active bg-homePage">
            Home Page
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={routes.NOTES_PATH}
            activeClassName="active bg-notesPage">
            Notes Page
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={routes.COUNTER_PATH}
            activeClassName="active bg-classCounter ">
            Class Counter
          </NavLink>
        </li>

        {authorized && (
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={routes.PROFILE_PATH}
              activeClassName="active bg-classCounter ">
              Profile
            </NavLink>
          </li>
        )}

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={routes.CREDIT_CARDS_PATH}
            activeClassName="active bg-classCounter ">
            Credit Cards
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={routes.REDUX_COUNTER_PATH}
            activeClassName="active bg-classCounter ">
            Redux Counter
          </NavLink>
        </li>

        {!authorized && (
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={routes.AUTH_PATH}
              activeClassName="active bg-classCounter ">
              Auth
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navigation;
