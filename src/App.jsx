import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Works from './components/Works'
import About from './components/About'
import AboutExtension from './components/AboutExtension'
import Contact from './components/Contact'
import FilmLoader from './components/FilmLoader' // 1. Bring in the new cinematic engine
import BayanihanPreview from './assets/bayanihan-preview.mp4'

import Lenis from '@studio-freight/lenis'

function App() {
  const [view, setView] = useState('home')
  /* LOADER ENGINE MOUNT CONTROL */
  const [loading, setLoading] = useState(true)

  const projects = [
    {
      num: "01",
      title: "BAYANIHAN",
      tagline: "NATIONAL UNIVERSITY MOA - CAPSTONE PROJECT",
      role: "UI/UX Lead & Full-Stack Developer",
      desc: "A Specialized Web Architecture Developed For The Angat Buhay Foundation. My Role Focused On Synthesizing Complex Disaster-Response Logic Into A Streamlined, High-Utility Interface To Optimize Crisis Operations When Every Second Counts.",
      video: BayanihanPreview // 💡 Attached directly to the data layer
    },
    {
      num: "02",
      title: "AMS",
      tagline: "ENDERUN COLLEGES INC. INTERNSHIP",
      role: "UI/UX Lead & Full-Stack Developer",
      desc: "A Specialized Web Architecture Developed For The Angat Buhay Foundation. My Role Focused On Synthesizing Complex Disaster-Response Logic Into A Streamlined, High-Utility Interface To Optimize Crisis Operations When Every Second Counts.",
      video: BayanihanPreview // 💡 Attached directly to the data layer
    }
  ]

  // RUNTIME ENGINE: INITIALIZE INERTIAL SMOOTH SCROLLING
  useEffect(() => {
    // Prevent Lenis scroll tracking while the loader curtain is securely down
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [loading]) // Reactivates setup exactly when loading drops false

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-[#e3dac9] font-serif overflow-x-hidden selection:bg-neutral-800 selection:text-[#e3dac9]">
      
      {/* 2. INJECT MOUNT ENGINE MOUNT CONDITIONAL */}
      {loading && <FilmLoader onComplete={() => setLoading(false)} />}

      {/* GLOBAL RAW ARCHITECTURAL SCROLLBAR INJECTION */}
      <style>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #03040F; }
        ::-webkit-scrollbar-thumb {
          background: rgba(227, 218, 201, 0.25);
          border-radius: 3px;
          transition: background 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover { background: rgba(227, 218, 201, 0.5); }
        html {
          scrollbar-width: thin;
          scrollbar-color: rgba(227, 218, 201, 0.25) #03040F;
        }
      `}</style>
      
      {/* 1. CINEMATIC LANDING HERO */}
      <Hero scrollToSection={scrollToSection} setView={setView} />

      {/* 2. WORKS FILMIC ARCHIVE */}
      <Works projects={projects} />

      {/* 3. ABOUT SECTION */}
      <div id="about-section">
        <About scrollToSection={scrollToSection} setView={setView} />
        <AboutExtension scrollToSection={scrollToSection} setView={setView} />
      </div>

      {/* 4. CONTACT SECTION */}
      <Contact scrollToSection={scrollToSection} setView={setView} />

    </div>
  )
}

export default App