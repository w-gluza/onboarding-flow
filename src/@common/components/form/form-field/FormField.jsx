import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import "./FormField.css";

function FormField({ name, label, touched, error, isRequired }) {
  return (
    <div className="form-field">
      <label className="text--xs" htmlFor={name}>
        {label}
        {isRequired && <span>&#42;</span>}
      </label>
      <Field className="field" name={name} />
      <div className="validation-message">{touched && !!error && error}</div>
    </div>
  );
}

FormField.defaultProps = {
  touched: false,
  error: "",
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
};

export default FormField;
