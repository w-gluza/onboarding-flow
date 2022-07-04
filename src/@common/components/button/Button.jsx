import React from "react";
import PropTypes from "prop-types";

function Button({ onClick, text, variant }) {
  return (
    <button className={`btn btn--${variant}`} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
