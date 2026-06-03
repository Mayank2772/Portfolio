import React from 'react'
import Navbar from './layout/Navbar'
import Hero from "./assets/sections/Hero"
import About from "./assets/sections/About"
import Projects from './assets/sections/Projects'
import Experience from './assets/sections/Experience'
import Testimonials from './assets/sections/Testimonials'
import Contact from "./assets/sections/Contact"
const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
    </div>
  )
}

export default App
