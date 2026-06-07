import { motion } from 'framer-motion'
import Benefit from './Benefit'
import BenefitsPageGraphic from '@/assets/images/BenefitsPageGraphic.png'
import ActionButton from '@/utils/ActionButton'
import Heading from '@/utils/Heading'
import { benefits } from '@/utils/benefitData'
import {
	baseMotion,
	slideLeft,
	slideRight,
	
} from '@/utils/motionPresets'
const Benefits = () => {
	return (
		<section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
			<motion.div
				{...baseMotion}
				transition={{ duration: 0.5 }}
				variants={slideLeft}
				className='my-5 md:w-3/5 text-center md:text-left'
			>
				<Heading>MORE THAN JUST GYM.</Heading>
				<p className='my-5 text-sm'>
					We provide world class fitness equipment, trainers and classes to get
					you to your ultimate fitness goals with ease. We provide true care
					into each and every member.
				</p>
			</motion.div>
			<motion.div className='mt-5 items-center justify-between gap-8 md:flex'>
				{benefits.map((benefit, index) => (
					<Benefit key={benefit.title} {...benefit} index={index} />
				))}
			</motion.div>
			<motion.div className='mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20'>
				<motion.div
					{...baseMotion}
					transition={{ duration: 0.5 }}
					variants={slideLeft}
					className='flex justify-center md:justify-end md:w-2/5'
				>
					<img
						className='mx-auto h-auto '
						src={BenefitsPageGraphic}
						alt='Benefits Page Graphic'
					/>
				</motion.div>
				<motion.div
					{...baseMotion}
					transition={{ duration: 0.5 }}
					variants={slideRight}
					className='md:w-3/5 relative max-w-125 md:max-w-none'
				>
					<div className='before:absolute hidden md:block before:-left-20 before:-top-20 before:z-1 before:content-abstractwaves'>
						<Heading>
							MILLIONS OF HAPPY MEMBERS GETTING
							<span className='text-primary-500'> FIT</span>
						</Heading>
					</div>
					<div>
						<p className='mb-5'>
							Joining our gym can have a transformative effect on your physical
							and mental health. With state-of-the-art facilities, diverse
							classes, and expert trainers, we offer everything you need to
							achieve your fitness goals, no matter what they may be. Whether
							you are looking to lose weight, build muscle, improve your
							cardiovascular health, or simply feel better and more energized,
							our gym has something for you.
						</p>
						<p className='mb-5'>
							In addition to the physical benefits of regular exercise, joining
							our gym can also have a positive impact on your mental health and
							well-being. Exercise has been shown to reduce stress, anxiety, and
							depression, and can improve your mood and overall sense of
							well-being.
						</p>
					</div>
					<div className='flex flex-wrap mt-10 justify-center md:justify-start items-center gap-8 relative'>
						<ActionButton variant='button'>Join Now</ActionButton>
						<div className='hidden md:block absolute -bottom-10 left-40 w-20 h-20 z-0 before:absolute before:inset-0 before:content-sparkles'></div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default Benefits
