import * as yup from "yup";

const registerSchema = yup.object({
  name: yup.string().min(3).required("Name is required"),
  lastName: yup.string().min(3).required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  job: yup.string().min(2).required("Job is required"),
  phone: yup
    .string()
    .matches(/^09\d{9}$/, "Invalid phone number")
    .required("Phone number is required"),
  gender : yup.string().required("Gender is Required"),
  birthday: yup.string().required("Birth date is required")  
});

export default registerSchema
