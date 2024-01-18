import * as yup from "yup";

export const categoriesSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Category name must be at least 3 characters")
    .max(24, "Category name must be at most 24 characters")
    .required("Category name is required"),
});
