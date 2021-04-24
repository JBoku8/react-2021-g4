import { NavLink } from 'react-router-dom';

import './styles.css';

function Navigation(props) {
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
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/profile"
            activeClassName="active bg-classCounter ">
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
