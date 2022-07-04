import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../assets/icons";

function FormHeading({ name, text, isCompleted }) {
  return (
    <div className="form-heading">
      {isCompleted ? <Icon name="checkmark" className="icon-md" /> : <Icon name={name} className="icon-md" />}
      <h2>{text}</h2>
    </div>
  );
}

FormHeading.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default FormHeading;
