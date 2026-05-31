import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

	useEffect(() => {
		const media = window.matchMedia(query)
		const listener = () => setMatches(media.matches)

		window.addEventListener('resize', listener)

		return () => window.removeEventListener('resize', listener)
	}, [query])

	return matches
}

export default useMediaQuery
