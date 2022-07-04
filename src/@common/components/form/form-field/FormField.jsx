import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

function FormField({ name, label, touched, error, isRequired, type, options }) {
  return (
    <div className="form-field">
      <label className="text--xs" htmlFor={name}>
        {label}
        {isRequired && <span>&#42;</span>}
      </label>
      <Field className="field" as={type || "input"} name={name}>
        {type &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </Field>
      <div className="form-validation">{touched && !!error && error}</div>
    </div>
  );
}

FormField.defaultProps = {
  touched: false,
  error: "",
  options: [],
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
