import PropTypes from "prop-types";

import "./Section.scss";

const Section = ({ title, children }) => {
  return (
    <section className="section">
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
