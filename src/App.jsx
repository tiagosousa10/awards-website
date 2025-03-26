import React from 'react'
import './index.css'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-zinc-600'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App
