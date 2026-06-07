import Heading from '@/utils/Heading'
import ClassesSlider from './ClassesSlider'
import { baseMotion, slideLeft  } from '@/utils/motionPresets'
import { motion } from 'framer-motion'

const OurClasses = () => {
	return (
		<section id='classes' className='w-full bg-primary-100 py-40'>
			<div className='mx-auto w-5/6'>
				<motion.div
				{...baseMotion}
				transition={{duration: 0.5}}
				variants={slideLeft}
				className='md:w-3/5'>
					<Heading>OUR CLASSES</Heading>
					<p className='py-5  text-gray-700'>
						<span className='text-secondary-400  font-bold '>EVOGYM </span>
						offers a wide variety of classes to suit every fitness level and
						interest. From high-intensity interval training to yoga, cycling,
						dance, and more, our classes are designed to challenge and inspire
						you while keeping you engaged and motivated
					</p>
				</motion.div>
			</div>
			<div className='mt-10 w-full'>
				<ClassesSlider />
			</div>
		</section>
	)
}
export default OurClasses
