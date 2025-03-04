import React from 'react'
import Navbar from './components1/Navbar'
import Home from './components1/Home'
import About from './components1/About'
import Marque from './components1/Marque'
import Skills from './components1/Skills'
import Achive from './components1/Achive'
import Project from './components1/Project'
import Contact from './components1/Contact'
import Footer from './components1/Footer'

const App = () => {
  return (
    <div >
    <Navbar/>
    <Home/>
    <Marque/>
    <About/>
    <Skills/>
    <Achive/>
    <Project/>
    <Contact/>
    <Footer/>
    
    </div>
  )
}
export default App