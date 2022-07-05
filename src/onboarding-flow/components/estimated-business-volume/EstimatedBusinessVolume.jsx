import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "../../../@common/components/form/form-field/FormField";
import Button from "../../../@common/components/button/Button";
import ButtonGroup from "../../../@common/components/button-group/ButtonGroup";
import FormSubmit from "../../../@common/components/form/form-submit/FormSubmit";

const EstimatedBusinessVolumeMessagesSchema = Yup.object().shape({
  estimatedMonthlyVolume: Yup.string().min(2, "Too Short!").max(56, "Too Long!").required("Required"),
  estimatedTransactionSize: Yup.string().min(2, "Too Short!").max(56, "Too Long!").required("Required"),
});

const EstimatedBusinessVolumeInitialValues = {
  estimatedMonthlyVolume: "",
  estimatedTransactionSize: "",
};

function EstimatedBusinessVolume() {
  return (
    <article className="padding-md">
      <p>What is the estimated monthly volume in € and what is the average transaction size in €?</p>
      <Formik
        initialValues={EstimatedBusinessVolumeInitialValues}
        validationSchema={EstimatedBusinessVolumeMessagesSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className="full-width">
            <div className="form-fields">
              <FormField
                name="estimatedMonthlyVolume"
                label="Estimated monthly volume"
                type="select"
                touched={touched.country}
                error={errors.country}
                options={["AU", "IRL", "GB", "US"]}
                isRequired
              />
              <FormField
                name="estimatedTransactionSize"
                label="Estimated transaction size"
                type="select"
                touched={touched.country}
                error={errors.country}
                options={["AU", "IRL", "GB", "US"]}
                isRequired
              />
            </div>
            <ButtonGroup>
              <Button text="Back" variant="secondary" onClick={() => console.log("back")} />
              <FormSubmit text="Next" variant="primary" disabled={!(isValid && dirty)} />
            </ButtonGroup>
            <p>Items with an asterisk (*) are mandatory.</p>
          </Form>
        )}
      </Formik>
    </article>
  );
}

export default EstimatedBusinessVolume;
