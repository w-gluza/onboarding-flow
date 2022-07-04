import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Icon } from "../../../assets/One.svg";
import { ReactComponent as Checkmark } from "../../../assets/Checkmark.svg";
import "./FormHeading.css";

function FormHeading({ icon, text, isCompleted }) {
  return (
    <div className="form-heading">
      {isCompleted ? <Checkmark className="icon-md" /> : <Icon className="icon-md" name={icon} />}
      <h2>{text}</h2>
    </div>
  );
}

FormHeading.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default FormHeading;
