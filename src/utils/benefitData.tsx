import { type BenefitType } from '@/types/type'
import { HiHomeModern, HiMiniUserGroup, HiAcademicCap } from 'react-icons/hi2'

export const benefits: Array<BenefitType> = [
	{
		icon: <HiHomeModern className='h-6 w-6' />,
		title: 'State of the Art Facilities',
		description:
			'Our facilities offer top-notch technology, advanced equipment, and modern design for optimal performance',
	},
	{
		icon: <HiMiniUserGroup className='h-6 w-6' />,
		title: "100's of Diverse Classes",
		description:
			'Wide range of classes from cardio to strength training, accommodating all fitness levels accommodating all fitness levels.',
	},
	{
		icon: <HiAcademicCap className='h-6 w-6' />,
		title: 'Expert and Pro Trainers',
		description:
			'Our trainers are highly skilled, certified, and experienced, providing personalized guidance and motivation',
	},
]
