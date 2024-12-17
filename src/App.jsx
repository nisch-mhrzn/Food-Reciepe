import About from "./components/About"
import Contact from "./components/Contact"
<<<<<<< HEAD
import Footer from "./components/Footer"
=======
>>>>>>> 3dc801278f60456a60b5631822a52aaa501844dd
import Header from "./components/Header"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

 
const App = () => {
  return (
    <div className="w-full overflow-hidden">
        <ToastContainer />

      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
<<<<<<< HEAD
      <Footer/>
=======
>>>>>>> 3dc801278f60456a60b5631822a52aaa501844dd
      </div>
  )
}

export default App