type Props = {
	title: string
	image: string
	description?: string
}


const ClassCard = ({title, image,description}:Props) => {
	return (
		<div className='relative cursor-pointer mx-auto h-95 w-full max-w-112.5 px-4  sm:px-0'>
			<div className='absolute z-20 flex h-full w-full flex-col items-center justify-center px-5 bg-black/40 backdrop-blur-md text-white text-center animate opacity-0 hover:opacity-100 focus-within:opacity-100 mobile-show-overlay rounded-md'>
				<p className='text-2xl font-semibold'>{title}</p>
				{description && <p className='mt-5 text-sm'>{description}</p>}
			</div>
			<img
				src={image}
				alt={title}
				className='h-full w-full object-cover object-center rounded-md shadow-md'
			/>
		</div>
	)
}
export default ClassCard
