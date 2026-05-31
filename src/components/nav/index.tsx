import React, {useState,} from 'react'
import Logo from '@/assets/images/Logo.png'
import ActionButton from '@/utils/ActionButton'
import CustomLink from './Link'
import { type SectionId, navLinks } from '@/types/type'
const NavBar = () => {
	const [activeSection, setActiveSection] = useState<SectionId | null>
	(navLinks[0]?.id||null)
	const handleSetActive = (sectionId:SectionId) =>{
		setActiveSection(sectionId)
	}
	return (
		<nav className='relative h-88px'>
			<div className='fixed top-0 z-30 w-full'>
				<div className='mx-auto w-5/6 flex-between'>
					<div className='flex-between gap-20 w-full'>
						<img src={Logo} alt='Logo' />
						<div className='flex-between  w-full'>
							<div className='flex-between  gap-8 text-sm'>
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
						</div>
						<div className='flex-between gap-8'>
							<button className='rounded-md bg-primary-500 px-10 py-2 cursor-pointer hover:bg-secondary-500 hover:text-white animate whitespace-nowrap '>
								Sign in
							</button>
							<ActionButton to='contactus' variant='link'>
								Become a Member
							</ActionButton>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
