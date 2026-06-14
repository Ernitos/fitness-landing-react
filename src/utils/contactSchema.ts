import {z} from "zod"

export const contactSchema = z.object({
	name: z.string().min(2, 'The name is short').max(20, 'Long name'),
	email: z.string().email('Invalid email'),
	message: z.string().min(10, 'The massage is short').max(200, 'Massage too long')
})
export type ContactFormType = z.infer<typeof contactSchema>