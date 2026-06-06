import NavBar from "./components/nav"
import Home from "./components/home"
import Benefits from "./components/benefits"

function App() {

  return (
		<div className='app text-gray-500 bg-gray-50'>
			<NavBar/>
			<Home/>
			<Benefits/>
		</div>
	)
}

export default App
