import { NavLink } from "react-router-dom";

import Navigation from "component/core/Navigation/Navigation";
import LogoIcon from "images/icons/LogoIcon";

import "./Header.scss";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Catalog", href: "/catalog" },
  { label: "Favorites", href: "/favorites" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          <LogoIcon />
          AutoPulse
        </NavLink>
        <Navigation navLinks={navLinks} />
        <ul className="addition-data__list">
          <li>
            <p className="addition-data__text">Schedule from 8:00 to 21:00</p>
          </li>
          <li>
            <a href="tel:+380674354543" className="addition-data__link">
              +380 67 43 54 543
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
