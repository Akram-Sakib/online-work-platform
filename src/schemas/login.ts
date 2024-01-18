import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().min(6).max(32).required(),
});
