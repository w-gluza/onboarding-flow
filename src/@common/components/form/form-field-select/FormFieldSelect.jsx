import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

function FormFieldOptions({ name, label, touched, error, isRequired, options }) {
  return (
    <>
      <p>
        {label}
        {isRequired && <span>&#42;</span>}
      </p>
      <Field name={name} as="select">
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </Field>
      <span style={{ color: "red" }}>{touched && !!error && <div>{error}</div>}</span>
    </>
  );
}

FormFieldOptions.defaultProps = {
  touched: false,
  error: "",
};

FormFieldOptions.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FormFieldOptions;
