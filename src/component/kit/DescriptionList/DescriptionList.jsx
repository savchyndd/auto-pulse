import PropTypes from "prop-types";

import "./DescriptionList.scss";

const DescriptionList = ({ list = [], size = "large" }) => {
  return (
    <ul className={`description__list ${size}`}>
      {list.map((item) => (
        <li key={`${item}_${Math.random(1)}`}>{item}</li>
      ))}
    </ul>
  );
};

export default DescriptionList;

DescriptionList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  size: PropTypes.string,
};
