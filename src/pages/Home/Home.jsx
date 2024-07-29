import arrow from '../../Assets/up-arrow.png'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Project from '../../Components/Projects/Project'
import About from '../../Components/About/About'
import Skills from '../../Components/Skills/Skills'
import Contact from '../../Components/Contact/Contact'
import "../../App.css"

const Home = () => {
  return (

    <>
      <a href="#header">
        <button  className="up-arrow">
          <img src={arrow} alt='arrow'/>
        </button>
      </a>
      <Navbar/>
      <Header/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default Home
