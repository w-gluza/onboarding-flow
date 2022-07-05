import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import FormField from "../../../@common/components/form/form-field/FormField";
import Button from "../../../@common/components/button/Button";
import ButtonGroup from "../../../@common/components/button-group/ButtonGroup";
import FormSubmit from "../../../@common/components/form/form-submit/FormSubmit";
import { UltimateBeneficialOwnerMessagesSchema } from "../../utils/validationSchemas";

const UltimateBeneficialOwnerInitialValues = {
  fullName: "",
  role: "",
  address: "",
  apartment: "",
  zipCode: "",
  city: "",
  email: "",
  passport: "",
  utilityBill: "",
};

function UltimateBeneficialOwner({ id, setActiveIndex, handleStepUpdate }) {
  const step = {
    uboCompleted: true,
  };

  return (
    <article className="spacing-md">
      <p>Who is the Ultimate Beneficial Owner(s)?</p>
      <p>
        UBO of a legal entity are the natural persons who directly or indirectly hold or control the stake of at least
        25% in the capital or at least 25% of the voting rights of the company.
      </p>
      <p>Details on the person(s) acting as representative(s) (the undersigned)</p>
      <Formik
        initialValues={UltimateBeneficialOwnerInitialValues}
        validationSchema={UltimateBeneficialOwnerMessagesSchema}
        onSubmit={(values, { resetForm }) => {
          // console.log(values);
          handleStepUpdate(step);
          setActiveIndex(id + 1);
          resetForm();
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className="form-container">
            <div className="form-fields-double">
              <FormField
                name="fullName"
                label="Full name"
                touched={touched.company}
                error={errors.company}
                isRequired
              />
              <FormField
                name="role"
                label="Role"
                type="select"
                touched={touched.country}
                error={errors.country}
                options={["Individual", "Foundation", "Trust", "Company"]}
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
                name="email"
                label="Email"
                touched={touched.website}
                error={errors.website}
                isRequired={false}
              />
              <FormField
                name="passport"
                label="Upload passport on UBO"
                touched={touched.regNumber}
                error={errors.regNumber}
                isRequired
              />
              <FormField
                name="utilityBill"
                label="Upload utility bill on UBO"
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

UltimateBeneficialOwner.propTypes = {
  id: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  handleStepUpdate: PropTypes.func.isRequired,
};

export default UltimateBeneficialOwner;
