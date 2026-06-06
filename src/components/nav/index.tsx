import  { useState, useEffect } from 'react'
import Logo from '@/assets/images/Logo.png'
import ActionButton from '@/utils/ActionButton'
import CustomLink from './Link'
import { type SectionId, navLinks } from '@/types/type'
import useMediaQuery from '@/hooks/useMediaQuery'
import { HiBars3, HiXMark } from 'react-icons/hi2'
const NavBar = () => {
	const [activeSection, setActiveSection] = useState<SectionId | null>(
		navLinks[0]?.id || null,
	)
	const [isTopPage, setIsTopPage] = useState<boolean>(true)
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

	const isAboveMediaScreen = useMediaQuery('(min-width: 1120px)')

	const navBarBg = isTopPage ? '' : 'bg-primary-100 drop-shadow'

	useEffect(() => {
		const handleScroll = () => {
			setIsTopPage(window.scrollY === 0)
			navLinks.forEach(({ id }) => {
				const element = document.getElementById(id)
				if (element) {
					const offsetTop = element.offsetTop
					const offsetBottom = offsetTop + element.offsetHeight
					if (
						window.scrollY >= offsetTop - 100 &&
						window.scrollY < offsetBottom - 100
					) {
						setActiveSection(id)
					}
				}
			})
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleSetActive = (sectionId: SectionId) => {
		setActiveSection(sectionId)
	}
	return (
		<nav className='relative h-22'>
			<div
				className={`${navBarBg} ${isTopPage ? 'py-6' : 'py-4'} animate fixed top-0 z-30 w-full`}
			>
				<div className='mx-auto w-5/6 flex items-center justify-between'>
					<img src={Logo} alt='Logo' />

					{isAboveMediaScreen ? (
						<div className='flex items-center justify-between w-full ml-20'>
							<div className='flex items-center gap-8 text-sm font-medium'>
								{navLinks.map(link => (
									<CustomLink
										key={link.id}
										section={link.id}
										onClick={handleSetActive}
										activeSection={activeSection}
									>
										{link.label}
									</CustomLink>
								))}
							</div>

							<div className='flex items-center gap-4'>
								<ActionButton
									variant='button'
									className='rounded-md bg-primary-500 px-10 py-2 cursor-pointer hover:bg-secondary-500 hover:text-white animate whitespace-nowrap'
								>
									Sign in
								</ActionButton>
								<ActionButton to='contacts' variant='link'>
									Become a Member
								</ActionButton>
							</div>
						</div>
					) : (
						<>
							<button
								className='rounded-full bg-secondary-500 p-2 cursor-pointer animate hover:bg-primary-500'
								onClick={() => setIsMenuToggled(prev => !prev)}
							>
								<HiBars3 className='h-6 w-6 text-white' />
							</button>
							{!isAboveMediaScreen && isMenuToggled && (
								<div className='fixed top-0 h-screen right-0 z-40 w-75 bg-primary-100 drop-shadow-xl animation'>
									<div className='flex justify-end p-6 '>
										<button onClick={() => setIsMenuToggled(false)}>
											<HiXMark className='h-7 w-7 text-gray-600 animate' />
										</button>
									</div>
									<div className='ml-[20%] flex flex-col gap-10 text-xl '>
										{navLinks.map(link => (
											<CustomLink
												key={link.id}
												section={link.id}
												onClick={sectionId => {
													setActiveSection(sectionId)
													setIsMenuToggled(false)
												}}
												activeSection={activeSection}
											>
												{link.label}
											</CustomLink>
										))}
									</div>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</nav>
	)
}

export default NavBar
