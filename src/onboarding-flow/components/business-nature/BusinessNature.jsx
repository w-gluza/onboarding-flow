import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import FormField from "../../../@common/components/form/form-field/FormField";
import Button from "../../../@common/components/button/Button";
import ButtonGroup from "../../../@common/components/button-group/ButtonGroup";
import FormSubmit from "../../../@common/components/form/form-submit/FormSubmit";
import { BusinessNatureMessagesSchema } from "../../utils/validationSchemas";

const BusinessNatureInitialValues = {
  businessNature: "",
};

function BusinessNature({ id, setActiveIndex, handleStepUpdate }) {
  const step = {
    businessNatureCompleted: true,
  };

  return (
    <article className="spacing-md">
      <p>What is the nature of the business?</p>
      <Formik
        initialValues={BusinessNatureInitialValues}
        validationSchema={BusinessNatureMessagesSchema}
        onSubmit={(values, { resetForm }) => {
          // eslint-disable-next-line no-console
          console.log("businessNatureCompleted", values);
          handleStepUpdate(step);
          setActiveIndex(id + 1);
          resetForm();
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className="form-container">
            <div className="form-fields-single">
              <FormField
                name="businessNature"
                label="Choose the type"
                type="select"
                touched={touched.country}
                error={errors.country}
                options={["Private", "Government", "Service", "Manufacturing"]}
                isRequired
              />
            </div>
            <ButtonGroup>
              <Button text="Back" variant="secondary" onClick={() => setActiveIndex(id - 1)} />
              <FormSubmit text="Next" variant="primary" disabled={!(isValid && dirty)} />
            </ButtonGroup>
            <p>Items with an asterisk (*) are mandatory.</p>
          </Form>
        )}
      </Formik>
    </article>
  );
}
BusinessNature.propTypes = {
  id: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  handleStepUpdate: PropTypes.func.isRequired,
};

export default BusinessNature;
