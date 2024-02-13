import * as Yup from "yup"
import YupPassword from "yup-password"
YupPassword(Yup)

export const registrationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is mandatory"),
  lastName: Yup.string(),
  email: Yup.string()
    .required("Email is mandatory")
    .email("Invalid Email Address"),
  password: Yup.string()
    .min(
      4,
      "Password must contain 4 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minSymbols(1, "Password must contain at least 1 special character")
    .required("No password provided."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
})
