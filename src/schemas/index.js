import * as yup from 'yup'

export const basicSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  email: yup.string().email("Enter valid email").required("Email is Required"),
  phoneNumber: yup.string()
    .matches(/^\d+$/, 'Phone number must contain only digits.')
    .min(10, 'Phone number must be at least 10 digits.')
    .max(15, 'Phone number must not exceed 15 digits.')
    .required('Phone number is required.'),
  numberOfPersons: yup.number()
    .integer('Number of persons must be an integer.')
    .positive('Number of persons must be a positive integer.')
    .required('Number of persons is required.'),
})

export const contactFormSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  email: yup.string().email("Enter valid email").required("Email is Required"),
  phoneNumber: yup.string()
    .matches(/^\d+$/, 'Phone number must contain only digits.')
    .min(10, 'Phone number must be at least 10 digits.')
    .max(15, 'Phone number must not exceed 15 digits.')
    .required('Phone number is required.'),
  message: yup.string().required('Message is required'),
})