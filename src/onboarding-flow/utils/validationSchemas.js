import * as Yup from "yup";
import { US_ZIP, URL } from "./validationHelpers";

export const CompanyDetailsMessagesSchema = Yup.object().shape({
  company: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  country: Yup.string().required("Required"),
  address: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  apartment: Yup.string().min(1, "Too Short!").max(10, "Too Long!"),
  zipCode: Yup.string().matches(US_ZIP, "Enter a valid US zip code").required("Required"),
  city: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  website: Yup.string().matches(URL, "Enter a valid url"),
  regNumber: Yup.string().min(5, "Too Short!").max(10, "Too Long!").required("Required"),
});

export const UltimateBeneficialOwnerMessagesSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  role: Yup.string().required("Required"),
  address: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  apartment: Yup.string().min(1, "Too Short!").max(10, "Too Long!"),
  zipCode: Yup.string().matches(US_ZIP, "Enter a valid US zip code").required("Required"),
  city: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  utilityBill: Yup.string().min(5, "Too Short!").max(10, "Too Long!").required("Required"),
});

export const BusinessNatureMessagesSchema = Yup.object().shape({
  businessNature: Yup.string().required("Required"),
});

export const EstimatedBusinessVolumeMessagesSchema = Yup.object().shape({
  estimatedMonthlyVolume: Yup.number().truncate().positive("Must be more than zero").required("Required"),
  estimatedTransactionSize: Yup.number().truncate().positive("Must be more than zero").required("Required"),
});
