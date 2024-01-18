import * as yup from "yup";

export const registerSchema = (user: string) =>
  yup.object().shape({
    [user]: yup.object({
      name: yup.string().required("Name is required"),
    }),
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup.string().min(6).max(32).required("Pasword is required"),
  });
