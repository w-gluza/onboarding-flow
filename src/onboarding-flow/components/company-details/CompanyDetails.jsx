import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import FormField from "../../../@common/components/form/form-field/FormField";
import Button from "../../../@common/components/button/Button";
import ButtonGroup from "../../../@common/components/button-group/ButtonGroup";
import FormSubmit from "../../../@common/components/form/form-submit/FormSubmit";
import { CompanyDetailsMessagesSchema } from "../../utils/validationSchemas";

const CompanyDetailsInitialValues = {
  company: "",
  country: "",
  address: "",
  apartment: "",
  zipCode: "",
  city: "",
  website: "",
  regNumber: "",
};

function CompanyDetails({ id, setActiveIndex, handleStepUpdate }) {
  const step = {
    companyDetailsCompleted: true,
  };
  return (
    <article className="spacing-md">
      <Formik
        initialValues={CompanyDetailsInitialValues}
        validationSchema={CompanyDetailsMessagesSchema}
        onSubmit={(values, { resetForm }) => {
          handleStepUpdate(step);
          setActiveIndex(id + 1);
          resetForm();
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className="form-container">
            <div className="form-fields-double">
              <FormField name="company" label="Company" touched={touched.company} error={errors.company} isRequired />
              <FormField
                name="country"
                label="Country"
                type="select"
                touched={touched.country}
                error={errors.country}
                options={["AU", "IRL", "GB", "US"]}
                isRequired
              />
              <FormField name="address" label="Address" touched={touched.address} error={errors.address} isRequired />
              <FormField
                name="apartment"
                label="Apartment, suite etc."
                touched={touched.apartment}
                error={errors.apartment}
                isRequired={false}
              />
              <FormField
                name="zipCode"
                label="Postal code/Zip"
                touched={touched.zipCode}
                error={errors.zipCode}
                isRequired
              />
              <FormField name="city" label="City" touched={touched.city} error={errors.city} isRequired />
              <FormField
                name="website"
                label="Website"
                touched={touched.website}
                error={errors.website}
                isRequired={false}
              />
              <FormField
                name="regNumber"
                label="Company Registration"
                touched={touched.regNumber}
                error={errors.regNumber}
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

CompanyDetails.propTypes = {
  id: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  handleStepUpdate: PropTypes.func.isRequired,
};

export default CompanyDetails;
