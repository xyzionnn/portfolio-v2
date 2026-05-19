// src/components/AboutExtension.jsx
import React from 'react'
import FilmBurn from '../assets/burn.mp4'

export default function AboutExtension() {
  return (
<section className="w-full bg-[#03040F] text-[#e3dac9] py-32 relative overflow-hidden font-mono text-[11px] tracking-widest selection:bg-neutral-800 bg-gradient-to-b from-black from-10% via-[#03040F]/60 to-transparent">

    {/* BACKGROUND CINEMATIC VIDEO OVERLAY */}
    <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.45] contrast-[1.05] pointer-events-none z-0">
        <source src={FilmBurn} type="video/mp4" />
    </video>
      
      {/* VINTAGE STREET BACKDROP IMAGE OVERLAY CONTAINER */}
      <div className="absolute inset-0 bg-neutral-950/40 mix-blend-multiply z-0 pointer-events-none" />

      {/* THE LAYOUT ENGINE: 
        We use a strict 12-column global grid across the entire outer container.
        This forces the text inside block 1, 2, and 3 to snap to the exact same vertical guidelines.
      */}
      <div className="w-full flex flex-col gap-7 relative z-10">
        
        {/* ========================================================================= */}
        {/* BLOCK 1: SKILLS & STACK (Anchored Left, Cuts Off Right)                   */}
        {/* ========================================================================= */}
        {/* Container spans from the far left of screen, cutting off dynamically around col-span-11 */}
        <div className="w-full xl:w-[91.666667%] mr-auto bg-[#14213B]/90 border-y border-r border-neutral-900/40 py-16 px-6 md:px-16 lg:px-24 xl:px-32 grid grid-cols-12 gap-x-8 items-start">
          
          {/* Main Title Category Section (Snapped to column anchor 1) */}
          <div className="col-span-12 md:col-span-4 lg:col-span-4 text-neutral-400 font-bold uppercase tracking-[0.25em] pt-1">
            SKILLS & STACK
          </div>

          {/* First Text Column (Snapped to column anchor 2) */}
          <div className="col-span-6 md:col-span-4 lg:col-span-4 flex flex-col gap-3 text-neutral-400/90">
            <span>JAVASCRIPT</span>
            <span>HTML5/CSS3/SCSS</span>
            <span>FRAMEWORKS</span>
            <span>TOOLS</span>
            <span>GIT</span>
          </div>

          {/* Second Text Column (Snapped to column anchor 3) */}
          <div className="col-span-6 md:col-span-4 lg:col-span-4 flex flex-col gap-3 text-neutral-300">
            <span>REACT, TAILWIND, NEXT</span>
            <span>FIGMA, ADOBE SUITE</span>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BLOCK 2: VALUES & MOTIVES (Full Center-Bleed Block Matrix)                 */}
        {/* ========================================================================= */}
        {/* Container spans completely full-width edge-to-edge across the viewport */}
        <div className="w-full bg-[#14213B]/90 border-y border-neutral-900/40 py-16 px-6 md:px-16 lg:px-24 xl:px-32 grid grid-cols-12 gap-x-8 items-start">
          
          {/* Main Title Category Section (Snapped perfectly with block 1) */}
          <div className="col-span-12 md:col-span-4 lg:col-span-4 text-neutral-400 font-bold uppercase tracking-[0.25em] pt-1">
            VALUES & MOTIVES
          </div>

          {/* First Data Text Column (Snapped perfectly with block 1) */}
          <div className="col-span-12 md:col-span-8 lg:col-span-8 flex flex-col gap-3 text-neutral-300">
            <span>STRUCTURED LOGIC</span>
            <span>HUMAN-CENTERED</span>
            <span>ACCESSIBILITY</span>
            <span>ATOMIC DESIGN SYSTEM</span>
            <span>SYSTEMIC EFFICIENCY</span>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BLOCK 3: CORE CONTRIBUTIONS (Anchored Right, Cuts Off Left)               */}
        {/* ========================================================================= */}
        {/* Container starts late from the left edge, matching your exact asymmetric offset layout */}
        <div className="w-full xl:w-[83.333333%] ml-auto bg-[#14213B]/90 border-y border-l border-neutral-900/40 py-16 px-6 md:px-16 lg:px-24 xl:px-32 grid grid-cols-12 gap-x-8 items-start">
          
          {/* Main Title Category Section (Shifted to stay perfectly inline with blocks 1 & 2) */}
          {/* Because the outer shell is shifted right by 2 columns, we adjust the grid offset to stay structurally flush */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 text-neutral-400 font-bold uppercase tracking-[0.25em] pt-1 xl:-ml-12">
            CORE CONTRIBUTIONS
          </div>

          {/* First Data Text Column (Aligned exactly under previous column vectors) */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col gap-3 text-neutral-300 xl:pl-4">
            <span>PROCESS AUTOMATION</span>
            <span>SYSTEMS LOGIC</span>
            <span>CRISIS ARCHITECTURE</span>
            <span>OPERATIONAL TRANSIT</span>
          </div>

        </div>

      </div>
    </section>
  )
}