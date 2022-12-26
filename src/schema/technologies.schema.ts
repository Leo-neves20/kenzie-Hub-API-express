import * as yup from 'yup'

export const createTechnologySchema = yup.object().shape({
    technology: yup.string().required(),
    status: yup.string().required()
})

export const updateTecnologySchema = yup.object().shape({
    technology: yup.string(),
    status: yup.string()
})