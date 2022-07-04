import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

function FormFieldSelect({ name, label, touched, error, isRequired, options }) {
  return (
    <div className="form-field">
      <label className="text--xs" htmlFor={name}>
        {label}
        {isRequired && <span>&#42;</span>}
      </label>
      <Field name={name} as="select" className="field">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field>
      <div className="form-validation">{touched && !!error && error}</div>
    </div>
  );
}

FormFieldSelect.defaultProps = {
  touched: false,
  error: "",
};

FormFieldSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FormFieldSelect;
