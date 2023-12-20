import * as yup from 'yup'

export const schema = yup.object({
	name: yup.string().min(3).max(20).required(),
	email: yup.string().email().required(),
	message: yup.string().max(600).required(),
})

export type FormatData = yup.InferType<typeof schema>
