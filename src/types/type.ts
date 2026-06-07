import type { JSX } from "react";

export type SectionId = 'home' | 'benefits' | 'classes' | 'contacts'

export const navLinks: { id: SectionId; label: string }[] = [
	{ id: 'home', label: 'Home' },
	{ id: 'benefits', label: 'Benefits' },
	{ id: 'classes', label: 'Our Classes' },
	{ id: 'contacts', label: 'Contact Us' },
]

export type BenefitType = {
	icon?: JSX.Element;
	title: string;
	description: string;
}
export type ClassType = {
	title:string;
	description?: string;
	image: string;
}