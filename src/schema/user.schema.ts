import * as yup from 'yup'

export const createUserSchema = yup.object().shape({
    name: yup
        .string()
        .required(),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .matches( /[a-z]/,  "it should have  one lowercase letter at least ")
        .matches( /[A-Z]/,  "it should have  one upercase letter at leats  ")
        .matches( /(\W|_)/, "it should have one special character at least ")
        .matches( /(\d)/,   "it should have one number at least            ")
        .matches(/.{8,}/,   "it should have eight digits at least              ")
        .required(),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password')], "the password need be the same put before"),
    module: yup
        .string()
        .required()
})

export const createSessionSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .required()
})