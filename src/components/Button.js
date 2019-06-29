import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, children, onClick, type }) => (
  <button
    type={type}
    className={className}
    onClick={onClick}
    style={{ marginLeft: "4px" }}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button;
