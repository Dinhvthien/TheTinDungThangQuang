import { Sliedeshow } from "./components/Body/Sliedeshow"
import { Navbar } from "./components/Navbar/navbar"
import Footer from "./components/Footer/Footer"
import { FloatingButton } from "./components/Body/FloatingButton"


const App = () => {
  return (
    <div>
     <div className="min-h-screen bg-gray-100">
          <Navbar/>
          <Sliedeshow/> 
          <Footer/>
          <FloatingButton/>
         </div>
    </div>
  )
}

export default App