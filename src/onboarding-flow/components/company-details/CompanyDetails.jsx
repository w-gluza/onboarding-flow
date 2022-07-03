import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { US_ZIP, URL } from "../../utils/validationHelpers";
import FormField from "../../../@common/components/form/FormField";

const CompanyDetailsMessagesSchema = Yup.object().shape({
  company: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  country: Yup.string().min(2, "Too Short!").max(56, "Too Long!").required("Required"),
  address: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  apartment: Yup.string().min(1, "Too Short!").max(10, "Too Long!"),
  zipCode: Yup.string().matches(US_ZIP, "Enter a valid US zip code"),
  city: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  website: Yup.string().matches(URL, "Enter a valid url"),
  regNumber: Yup.string().min(1, "Too Short!").max(10, "Too Long!"),
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
    <div>
      <h1>Company Details</h1>
      <Formik
        initialValues={CompanyDetailsInitialValues}
        validationSchema={CompanyDetailsMessagesSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <FormField name="company" label="Company" touched={touched.company} error={errors.company} isRequired />
            <FormField name="country" label="Country" touched={touched.country} error={errors.country} isRequired />
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
              label="Company Registration from official register"
              touched={touched.regNumber}
              error={errors.regNumber}
              isRequired
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CompanyDetails;
