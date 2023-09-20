import PropTypes from "prop-types";

import "./Button.scss";

const Button = (props) => {
  const {
    type = "button",
    children = "Button",
    variant = "contained",
    size = "small",
    className,
    onClick,
  } = props;

  return (
    <button
      type={type}
      className={`button 
      ${variant === "text" ? "button--text" : ""} 
      ${size === "large" ? "button--large-size" : "button--small-size"}
      ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
