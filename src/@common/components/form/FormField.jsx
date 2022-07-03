import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

function FormField({ name, label, touched, error, isRequired }) {
  return (
    <>
      <p>
        {label}
        {isRequired && <span>&#42;</span>}
      </p>
      <Field name={name} />
      <span style={{ color: "red" }}>{touched && !!error && <div>{error}</div>}</span>
    </>
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
