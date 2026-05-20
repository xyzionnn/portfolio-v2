import { useState } from 'react'

export default function About({ scrollToSection, setView }) {
  return (
   <section className="min-h-screen bg-[#0d0d0d] text-[#e3dac9] font-serif relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center overflow-hidden bg-gradient-to-t from-black from-35% via-black/70 to-transparent">
      
      {/* BACKGROUND GRAPH GRID LINES - Enhances the "Schema/Blueprint" feeling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* RUNNING HEADER METADATA */}
      <div className="w-full flex justify-between items-center font-mono text-[9px] md:text-xs tracking-[0.4em] uppercase opacity-40 mb-16 relative z-10 border-b border-neutral-900 pb-4">
        <span>THE OPEN SCHEMA</span>
      </div>

      {/* CORE CONTENT FLEX ARRANGEMENT */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-12 gap-y-16 lg:gap-x-20 items-start relative z-10">
        
        {/* LEFT ZONE: THE FILM CELL CAMERA SLATE (PROFILE CAPTURE) */}
        <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[320px] aspect-[3/4] bg-neutral-950 border border-neutral-800 p-3 group shadow-2xl">
            
            {/* Viewport Bracket Elements (Camera HUD details) */}
            <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-[#e3dac9]/30" />
            <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-[#e3dac9]/30" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-[#e3dac9]/30" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-[#e3dac9]/30" />
            
            {/* The Main Image Asset Box Wrapper */}
            <div className="w-full h-full bg-neutral-900 border border-neutral-800/40 relative overflow-hidden flex items-center justify-center">
              {/* Optional Blue hue overlay to match the home cinematic screen block */}
              <div className="absolute inset-0 bg-[#14213B]/20 mix-blend-multiply z-10" />
              
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-600 uppercase select-none">
                [ HEADSHOT SLATE ]
              </span>
            </div>

            {/* Bottom micro running frame metadata tape label */}
            <div className="absolute -bottom-6 left-3 right-3 flex justify-between font-mono text-[8px] tracking-widest text-neutral-500 uppercase">
              <span>FRAME SEC: 11 // 23</span>
              <span>ISO 400</span>
            </div>
          </div>
        </div>

        {/* RIGHT ZONE: STAGGERED BLUEPRINT DESCRIPTION TEXT BLOCKS */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          
          {/* HUGE ASYMMETRICAL EDITORIAL TITLE LAYER */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight font-serif uppercase mb-10 text-left relative leading-none text-[#e3dac9]/90">
            ABOUT ME
          </h2>

          {/* PARAGRAPH BLOCKS WITH EXPLICIT EDITORIAL SPACING */}
          <div className="space-y-8 max-w-2xl font-serif text-sm md:text-base leading-relaxed tracking-wide text-[#e3dac9]/75">
            <p>
              Kamusta? I'm <span className="font-bold tracking-wider text-[#e3dac9] italic">Zion</span>, a UI/UX Designer and Web Programmer specializing in the intersection of technical logic and human-centered design.
            </p>

            <p>
              I see digital design as a puzzle of logic and empathy. My journey is rooted in a simple goal: taking complex backend requirements and translating them into interfaces that feel natural and human. I believe that a system is only as good as the experience it provides for the person navigating it.
            </p>

            <p className="text-xs md:text-sm text-[#e3dac9]/60 font-light border-l-2 border-neutral-800 pl-4 italic">
              <strong className="font-mono text-[10px] tracking-widest uppercase not-italic block mb-1 text-neutral-500">THE OPEN SCHEMA SOURCE:</strong>
              This platform serves as my professional archive. It documents my transition into a developer-minded designer who builds with structural intent—whether automating core business processes at Enderun Colleges or managing network health modules at Globe Telecom.
            </p>
          </div>

          {/* BLUEPRINT SYSTEM TERMINAL CALL TO ACTION BUTTON */}
          <div className="mt-7 pt-7">
            <a 
              href="#download" 
              className="inline-flex items-center gap-4 font-mono text-xs tracking-[0.3em] uppercase text-[#e3dac9]/70 hover:text-[#e3dac9] transition-colors duration-300 group"
            >
              <span>▼ DOWNLOAD_DOSSIER_SCHEMA.PDF</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-serif text-sm italic text-neutral-500">
                (curriculum_vitae)
              </span>
            </a>
          </div>

        </div>

      </div>

    </section>
  )
}