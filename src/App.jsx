import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

// Sakura petals floating in the background
const PETALS = ['🌸', '🌺', '✿', '❀', '🌷']

function SakuraBg() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const count = 18

    for (let i = 0; i < count; i++) {
      const petal = document.createElement('div')
      petal.className = 'petal'
      petal.textContent = PETALS[Math.floor(Math.random() * PETALS.length)]

      const size = 0.8 + Math.random() * 0.8
      const left = Math.random() * 100
      const duration = 8 + Math.random() * 12
      const delay = Math.random() * 14
      const swayDuration = 3 + Math.random() * 4

      petal.style.cssText = `
        left: ${left}%;
        font-size: ${size}rem;
        animation-duration: ${duration}s, ${swayDuration}s;
        animation-delay: -${delay}s, -${delay * 0.5}s;
        opacity: ${0.3 + Math.random() * 0.4};
      `

      container.appendChild(petal)
    }

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild)
    }
  }, [])

  return <div className="sakura-container" ref={containerRef} aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <SakuraBg />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
