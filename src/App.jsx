import NavBar from "./components/layout/NavBar/NavBar"
import Footer from "./components/layout/Footer/Footer"
import Home from "./components/pages/Home/Home"
import About from "./components/pages/About/About"
import Projects from "./components/pages/Projects/Projects"
import Services from "./components/pages/Services/Services"
import Clients from "./components/pages/Clients/Clients"
import Contact from "./components/pages/Contact/Contact"

function App() {
  
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Services/>
      <Clients/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
