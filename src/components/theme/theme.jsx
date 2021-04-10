import PropTypes from "prop-types";

import "./theme.css";
function Theme({ children, type = "light" }) {
  return <div className={`bg-${type} p-4`}>{children}</div>;
}

Theme.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Theme;
