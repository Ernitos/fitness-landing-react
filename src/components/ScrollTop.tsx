import { useEffect,useState } from "react"
import { FaArrowUp } from 'react-icons/fa'

const ScrollTop = () => {

const [isVisible, setIsVisible] = useState(false)
useEffect(()=>{
const toggleVisibility = ()=> {
  setIsVisible(window.scrollY>300)
};

window.addEventListener("scroll", toggleVisibility)
return() =>window.removeEventListener("scroll",toggleVisibility)

},[])


const scrollTop = ()=>{
  window.scroll({
    top:0,
    behavior: "smooth"
  })
}



  return (
		isVisible && (
			<button
				onClick={scrollTop}
				className='cursor-pointer fixed bottom-8 right-8 z-10 p-3 rounded-full bg-primary-500 hover:bg-primary-300 text-white shadow-md hover:bg-primary-700 animate'
				aria-label='Scroll to top'
			>
				<FaArrowUp />
			</button>
		)
	)
}

export default ScrollTop