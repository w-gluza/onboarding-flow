import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { US_ZIP, URL } from "../../utils/validationHelpers";
import FormField from "../../../@common/components/form/form-field/FormField";
import FormFieldSelect from "../../../@common/components/form/form-field-select/FormFieldSelect";
import Button from "../../../@common/components/button/Button";
import ButtonGroup from "../../../@common/components/button-group/ButtonGroup";
import FormSubmit from "../../../@common/components/form/form-submit/FormSubmit";
import "./CompanyDetails.css";

const CompanyDetailsMessagesSchema = Yup.object().shape({
  company: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  country: Yup.string().min(2, "Too Short!").max(56, "Too Long!").required("Required"),
  address: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  apartment: Yup.string().min(1, "Too Short!").max(10, "Too Long!"),
  zipCode: Yup.string().matches(US_ZIP, "Enter a valid US zip code"),
  city: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  website: Yup.string().matches(URL, "Enter a valid url"),
  regNumber: Yup.string().min(5, "Too Short!").max(10, "Too Long!").required("Required"),
});

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

function CompanyDetails() {
  return (
    <article className="padding-md">
      <Formik
        initialValues={CompanyDetailsInitialValues}
        validationSchema={CompanyDetailsMessagesSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className="full-width">
            <div className="form-fields">
              <FormField name="company" label="Company" touched={touched.company} error={errors.company} isRequired />
              <FormFieldSelect
                name="country"
                label="Country"
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
              <Button text="Back" variant="secondary" onClick={() => console.log("back")} />
              <FormSubmit text="Next" variant="primary" disabled={!(isValid && dirty)} />
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </article>
  );
}

export default CompanyDetails;
