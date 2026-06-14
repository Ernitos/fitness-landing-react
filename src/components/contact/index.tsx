import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormType } from '@/utils/contactSchema'
import TextInput from '../formElement/TextInput'
import ContactPageGraphic from '@/assets/images/ContactUsPageGraphic.png'
import { baseMotion, slideLeft, slideRight } from '@/utils/motionPresets'
import Heading from '@/utils/Heading'
import { motion } from 'framer-motion'
const ContactUs = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm<ContactFormType>({
		resolver: zodResolver(contactSchema),
		mode: 'onTouched',
	})
	const onSubmit = async (data: ContactFormType) => {
		try {
			const response = await fetch(
				'https://formsubmit.co/ajax/ernestturkovski@gmail.com',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
					body: JSON.stringify(data),
				},
			)
			const result = await response.json()
			if (result.success === 'true') {
				reset()
			} else {
				console.error('formSubmit response:', result)
			}
		} catch (error) {
			console.error('Error submitting form', error)
		}
	}
	return (
		<section id='contacts' className='mx-auto w-5/6 pb-32 pt-24'>
			<motion.div
				{...baseMotion}
				transition={{ duration: 0.5 }}
				variants={slideLeft}
				className='md:w-3/5'
			>
				<Heading>
					<span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
				</Heading>
				<p className='pt-10 max-w-2xl '>
					Are you ready to transform your life and reach your fitness goals?
					Join our state-of-the-art gym today! With hundreds of diverse classes
					and expert trainers, we offer a wide range of options to help you
					achieve your best self.
				</p>
			</motion.div>
			<div className='mt-10 justify-between gap-8 md:flex'>
				<motion.div
					{...baseMotion}
					transition={{ duration: 0.5 }}
					variants={slideLeft}
					className='mt-10 basis-3/5 md:mt-0'
				>
					<form onSubmit={handleSubmit(onSubmit)} className='relative z-2 '>
						<TextInput
							placeholder='NAME'
							register={register('name')}
							error={errors.name}
						/>

						<TextInput
							type='email'
							placeholder='EMAIL'
							register={register('email')}
							error={errors.email}
						/>
						<TextInput
							className='resize-none'
							type='textarea'
							placeholder='MESSAGE'
							register={register('message')}
							error={errors.message}
						/>
						<button
							className='cursor-pointer mt-5 rounded-lg bg-secondary-500 px-20 animate duration-500 hover:text-white py-2 font-family '
							type='submit'
						>
							SUBMIT
						</button>
						{isSubmitSuccessful && (
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className='mt-4 text-green-300 text-center font-montserrat'
							>
								Message has been sent successfully
							</motion.p>
						)}
					</form>
				</motion.div>
				<motion.div
					{...baseMotion}
					transition={{ duration: 0.5 }}
					variants={slideRight}
					className='mt-10 basis-2/5 md:mt-0'
				>
					<div className='w-full relative before:absolute before:-bottom-20 before:-right-10 before:z-1 md:before:content-evolvetext'>
						<img
							className='z-2 w-full relative'
							src={ContactPageGraphic}
							alt='ContactPageGraphic'
						/>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
export default ContactUs
