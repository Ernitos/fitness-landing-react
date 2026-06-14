import NavBar from "./components/nav"
import Home from "./components/home"
import Benefits from "./components/benefits"
import OurClasses from "./components/ourClasses"
import ContactUs from "./components/contact"
import Footer from './components/footer'
import ScrollTop from './components/ScrollTop'
function App() {

  return (
		<div className='app text-gray-500 bg-gray-50'>
			<NavBar/>
			<Home/>
			<Benefits/>
			<OurClasses/>
			<ContactUs/>
			<Footer/>
			<ScrollTop/>
		</div>
	)
}

export default App
