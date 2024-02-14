import * as Yup from "yup"
import YupPassword from "yup-password"
YupPassword(Yup)

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is mandatory")
    .email("Invalid Email Address"),
  password: Yup.string()
    .min(4, "Invalid Password")
    .minLowercase(1, "Invalid Password")
    .minUppercase(1, "Invalid Password")
    .minNumbers(1, "Invalid Password")
    .minSymbols(1, "Invalid Password")
    .required("No password provided."),
})
