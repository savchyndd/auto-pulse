import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = ({ navLinks }) => {
  return (
    <nav className="blend nav">
      <ul className="nav_list">
        {navLinks.map((link) => {
          return (
            <li key={link.label}>
              <NavLink to={link.href} className="nav_link">
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })
).isRequired;
