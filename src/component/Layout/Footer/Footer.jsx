import { NavLink } from "react-router-dom";

import LogoIcon from "images/icons/LogoIcon";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <NavLink to="/" className="footer__logo">
            <LogoIcon />
            AutoPulse
          </NavLink>
          <address>
            <ul className="address__list">
              <li className="address__item">
                <a
                  href="https://goo.gl/maps/CPtrU1FHBa2aNyZL9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="address__link address__link--location"
                >
                  м. Київ, пр-т Лесі Українки, 26
                </a>
              </li>
              <li className="address__item">
                <a href="mailto:info@autopulse.com" className="address__link">
                  info@autopulse.com
                </a>
              </li>
              <li className="address__item">
                <a href="tel:+380674354543" className="address__link">
                  +380 67 43 54 543
                </a>
              </li>
            </ul>
          </address>
        </div>
        <p>© 2023 AutoPulse - оренда авто.</p>
      </div>
    </footer>
  );
};

export default Footer;
