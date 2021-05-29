import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelector } from '../../redux/selectors';

import './styles.css';

function Navigation() {
  const authorized = useSelector(authSelector);

  return (
    <div className="row mt-4 mb-4">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
            exact
            activeClassName="active bg-homePage">
            Home Page
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/notes"
            activeClassName="active bg-notesPage">
            Notes Page
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/counter"
            activeClassName="active bg-classCounter ">
            Class Counter
          </NavLink>
        </li>

        {authorized && (
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/profile"
              activeClassName="active bg-classCounter ">
              Profile
            </NavLink>
          </li>
        )}

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/credit-cards"
            activeClassName="active bg-classCounter ">
            Credit Cards
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/redux-counter"
            activeClassName="active bg-classCounter ">
            Redux Counter
          </NavLink>
        </li>

        {!authorized && (
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/auth"
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
