import PropTypes from "prop-types";

import "./styles.css";

function Navigation({ activePage, onPageChange }) {
  return (
    <div className="row mt-4 mb-4">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activePage === "homePage" ? "active bg-homePage" : ""
            }`}
            onClick={() => onPageChange("homePage")}
          >
            Home Page
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${
              activePage === "notesPage" ? "active bg-notesPage" : ""
            }`}
            onClick={() => onPageChange("notesPage")}
          >
            Notes Page
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${
              activePage === "classCounter" ? "active bg-classCounter" : ""
            }`}
            onClick={() => onPageChange("classCounter")}
          >
            Class Counter
          </button>
        </li>
      </ul>
    </div>
  );
}

Navigation.propTypes = {
  activePage: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Navigation;
