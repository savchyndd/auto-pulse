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
                  c. Kyiv, 26 Lesi Ukrainky Ave.
                </a>
              </li>
              <li className="address__item">
                <a href="mailto:info@autopulse.com" className="address__link">
                  info@autopulse.com
                </a>
              </li>
              <li className="address__item">
                <a href="tel:+380730000000" className="address__link">
                  +380 73 000 00 00
                </a>
              </li>
            </ul>
          </address>
        </div>
        <p>© 2023 AutoPulse - rental cat.</p>
      </div>
    </footer>
  );
};

export default Footer;
