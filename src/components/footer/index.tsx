import Logo from '@/assets/images/Logo.png'
import { footerLinks } from '@/utils/footerLinks'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import {
	baseMotion,
	slideUp,
	withDelay,
} from '@/utils/motionPresets'

const Footer = () => {
	return (
		<footer className='bg-primary-100 py-16'>
			<div className='mx-auto w-5/6 flex flex-col gap-16 md:flex-row md:justify-between'>
				<div className='mt-16 basis-1/2 md:mt-0'>
					<motion.div
						{...baseMotion}
						custom={0}
						variants={slideUp}
						transition={withDelay(0)}
					>
						<img src={Logo} alt='Logo' className='w-32' />
						<p className='my-5 '>
							EVOGYM is a state-of-the-art fitness center offering a wide range
							of classes, expert trainers, and top-notch facilities. Join us for
							an unparalleled fitness experience that will help you achieve your
							health goals.
						</p>
						<p>© Evogym All Rights Reserved.</p>
					</motion.div>
				</div>
				<div className='mt-16 basis-1/2 md:mt-0'>
					<motion.div
						{...baseMotion}
						custom={1}
						variants={slideUp}
						transition={withDelay(1)}
					>
						<h4 className='font-bold'>Links</h4>
						{footerLinks && (
							<div className='cursor-pointer flex flex-col mt-3 gap-2'>
								{footerLinks.length > 0 &&
									footerLinks.map((item, idx) => (
										<Link
											to={item.link}
											key={idx}
											className='hover:text-primary-500 animate'
										>
											{item.label}
										</Link>
									))}
							</div>
						)}
					</motion.div>
				</div>
				<div className='mt-16 basis-1/2 md:mt-0'>
					<motion.div
						{...baseMotion}
						custom={2}
						variants={slideUp}
						transition={withDelay(2)}
					>
						<h4 className='font-bold'>Contact Us</h4>
						<p className='my-3'>Tempus metus mattis risus volutpat egestas.</p>
						<a href='#' className='my-4'>
							(91) 95201 00001
						</a>
					</motion.div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
