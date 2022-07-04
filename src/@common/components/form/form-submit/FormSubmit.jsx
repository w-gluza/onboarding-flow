import React from "react";
import PropTypes from "prop-types";

function FormSubmit({ text, variant, disabled }) {
  return (
    <button className={`btn btn--${variant}`} type="submit" disabled={disabled}>
      {text}
    </button>
  );
}

FormSubmit.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default FormSubmit;
