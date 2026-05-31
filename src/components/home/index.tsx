import ActionButton from '@/utils/ActionButton'
import HomePageText from '@/assets/images/HomePageText.png'

import HomePageGraphic from '@/assets/images/HomePageGraphic.png'
import { motion } from 'framer-motion'
import { sponsorImages } from '@/utils/sponsorImages'
const Home = () => {
	return (
		<section id='home' className='gap-16 bg-gray-20 py-10 md:h-full  md:pb-0'>
			<div className='mx-auto w-5/6 items-center  justify-center md:flex md:h-5/6'>
				<div className='z-10 mt-32 md:basis-3/5'>
					<motion.div
						initial='hidden'
						whileInView='visible'
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
						viewport={{ once: true, amount: 0.5 }}
						className='md:-mt-20'
					>
						<div className='relative'>
							<div className=' relative before:absolute before:-top-20 before:-left-20 before:z-[-1] before:w-full before:h-full md:before:content-evolvetext'>
								<img src={HomePageText} alt='home-page' />
							</div>
						</div>
						<p className='mt-8 text-sm'>
							Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
							Studios to get the Body Shapes That you Dream of.. Get Your Dream
							Body Now.
						</p>
					</motion.div>
					<motion.div
						initial='hidden'
						whileInView='visible'
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
						viewport={{ once: true, amount: 0.5 }}
						className='mt-8 flex items-center gap-8'
					>
						<ActionButton to='contacts' variant='link'>
							Join Now
						</ActionButton>
						<ActionButton
							to='contacts'
							variant='link'
							className='animate rounded-md bg-primary-500 px-10 py-2 hover:bg-secondary-500 cursor-pointer hover:text-white '
						>
							Learn More
						</ActionButton>
					</motion.div>
				</div>
				<motion.div
					initial='hidden'
					whileInView='visible'
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: 50 },
						visible: { opacity: 1, x: 0 },
					}}
					className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16'
				>
					<img src={HomePageGraphic} alt='page-graphic' />
				</motion.div>
			</div>
			<div className=' h-[150] w-full bg-primary-100 py-10'>
				<div className='mx-auto w-5/6 flex items-center justify-between gap-8'>
					{sponsorImages.map((image, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: -50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: index * 0.2, duration: 0.5 }}
						>
							<img src={image.src} alt={image.alt} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
export default Home
