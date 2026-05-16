import React from 'react'
import './index.css'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div style={{ padding: '2rem 0' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
          SYSTEM.BOOT // NEURAL_DASHBOARD
        </h1>
      </header>
      
      <main className="bento-grid">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
