import * as yup from 'yup';

const regex = /^(?=.*?[1-9])[0-9()-]+$/;

export const loginProfileSchema = yup.object({
  email: yup
    .string()
    .min(3, 'name should have at least 3 symbols')
    .max(50, 'name should have less than 50 symbols')
    .required('Email is reqiered'),
  password: yup
    .string()
    .required('password is reqiered')
    .min(8, 'too short!')
    .matches(regex, 'password is wrong'),
});

export const registrationProfileSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name must be less than 20 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password length must be at least 8 characters')
    .required('Password is required'),
});

export const editProfileSchema = yup.object({
  name: yup
    .string()
    .min(3, 'name should have at least 3 symbols')
    .max(50, 'name should have less than 50 symbols')
    .required('Name is reqiered'),
  number: yup
    .string()
    .required('phone is reqiered')
    .min(3, 'too short!')
    .max(50, 'too long!')
    .matches(regex, 'enter valid number'),
});
