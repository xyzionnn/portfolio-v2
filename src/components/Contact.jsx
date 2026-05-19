import React from 'react'

export default function Contact() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="w-full min-h-screen bg-[#050508] text-[#e3dac9] relative px-6 md:px-16 lg:px-24 xl:px-32 pb-8 pt-24 select-none flex flex-col justify-between overflow-hidden z-40 transition-colors duration-1000">
      
      {/* ------------------------------------------------------------------------- */}
      {/* BACKGROUND SCENERY & LIGHTING (THE FONTAINE THEATER PIT)                 */}
      {/* ------------------------------------------------------------------------- */}
      {/* Constant subtle ambient brass floor glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      
      {/* Dynamic Overhead Projection Light — intensifies dramatically when the user hovers anywhere over the footer area */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[70vw] h-[60vh] bg-gradient-to-b from-[#C5A880]/0 via-[#C5A880]/2 to-transparent rounded-full blur-[100px] opacity-40 transition-all duration-1000 pointer-events-none z-0 group-hover:opacity-100" />

      {/* ------------------------------------------------------------------------- */}
      {/* THEATRICAL MARQUEE ORNAMENTAL FRAMEWORK                                   */}
      {/* ------------------------------------------------------------------------- */}
      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col gap-2">
        <div className="w-full flex items-center justify-between font-mono text-[8px] tracking-[0.5em] text-[#C5A880]/40">
          <span>+ -- OP_REEL // INDEX_04 -- +</span>
          <span>[ CURTAIN_CALL ]</span>
          <span>+ ----------------------- +</span>
        </div>
        <div className="w-full border-b border-[#e3dac9]/5 pb-4 flex items-center justify-between font-mono text-[9px] tracking-[0.4em] text-[#C5A880] opacity-80">
          <span>ACT_IV : TERMINAL INTERACTION</span>
          <span className="hidden md:inline font-light text-[#e3dac9]/40 text-[8px]">CLOCK // ACTIVE STATE</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* THE PROJECTION SCREEN (CENTER TRACK)                                      */}
      {/* ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto my-auto py-8 flex flex-col items-center justify-center text-center z-10">
        <a 
          href="mailto:your.email@domain.com" 
          className="group flex flex-col items-center justify-center w-full py-16 cursor-pointer relative"
        >
          {/* THE THEATER PROJECTION BEAM OVERLAY */}
          {/* Simulates a physical volumetric cone of light emerging from behind the text */}
          <div className="absolute -inset-x-20 inset-y-0 bg-gradient-to-b from-[#C5A880]/15 via-[#C5A880]/5 to-transparent opacity-0 scale-95 blur-md rounded-3xl transition-all duration-1000 ease-out pointer-events-none group-hover:opacity-100 group-hover:scale-100" />

          {/* FIRST TIER: BONJOUR */}
          <h2 className="text-[14vw] md:text-[11vw] font-serif font-light uppercase tracking-[0.04em] leading-[0.85] text-[#e3dac9]/90 transition-all duration-700 ease-out group-hover:text-white group-hover:tracking-[0.08em] shadow-sm select-none">
            BONJOUR
          </h2>

          {/* MECHANICAL INTERMISSION GLYPH */}
          <div className="my-8 flex items-center gap-6 w-full justify-center opacity-30 group-hover:opacity-100 transition-all duration-700 ease-out">
            <span className="font-mono text-[9px] tracking-normal text-[#C5A880] translate-x-2 transition-transform duration-700 group-hover:translate-x-0">[PRJ_01]</span>
            <div className="h-[1px] w-8 bg-[#C5A880] transition-all duration-700 ease-out group-hover:w-20" />
            <span className="text-[12px] text-[#C5A880] rotate-0 transition-transform duration-1000 ease-out group-hover:rotate-[180deg]">❖</span>
            <div className="h-[1px] w-8 bg-[#C5A880] transition-all duration-700 ease-out group-hover:w-20" />
            <span className="font-mono text-[9px] tracking-normal text-[#C5A880] -translate-x-2 transition-transform duration-700 group-hover:translate-x-0">[SYS_LN]</span>
          </div>

          {/* SECOND TIER: CORE TARGET DOMAIN */}
          <h2 className="text-[10vw] md:text-[8.5vw] font-serif font-normal uppercase tracking-tighter leading-[0.85] text-[#e3dac9]/70 transition-all duration-700 ease-out group-hover:text-[#C5A880] group-hover:tracking-normal break-all">
            ZIONDESIGN.PH
          </h2>
          
          {/* THEATRICAL COMPOSITION PROMPT */}
          <div className="mt-12 h-4 overflow-hidden relative w-full flex justify-center">
            <span className="font-mono text-[8px] tracking-[0.5em] text-[#C5A880] uppercase absolute opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-80 group-hover:translate-y-0">
              ▶ INITIATE MAIL_CLIENT COMPOSITION OVERRIDE
            </span>
          </div>
        </a>
      </div>

      {/* ========================================================================= */}
      {/* THE ORCHESTRA PIT (TERMINAL FOOTER METADATA)                              */}
      {/* ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-4 z-10">
        <div className="w-full border-t border-[#e3dac9]/5 pt-6 grid grid-cols-12 gap-y-6 md:gap-y-0 font-mono text-[9px] tracking-widest text-[#e3dac9]/40">
          
          {/* Left Block Vector */}
          <div className="col-span-12 md:col-span-4 flex items-center gap-3">
            <span className="text-[#C5A880] font-bold">LOC //</span>
            <span>MANILA, PH</span>
            <span className="opacity-20">|</span>
            <span>PHT (GMT +8)</span>
          </div>

          {/* Center Production Markers */}
          <div className="col-span-12 md:col-span-4 md:text-center text-[8px] tracking-[0.2em]">
            STAGED METRICS & PRODUCTION DIRECTION BY ZION
          </div>

          {/* Right Archival Ledger */}
          <div className="col-span-12 md:col-span-4 md:text-right text-[8px] tracking-[0.15em]">
            © {currentYear} OPERA CORE WORKSPACE. R_04.
          </div>

        </div>
        
        {/* Technical Terminal Bracket Closure */}
        <div className="w-full text-center font-mono text-[7px] text-[#C5A880]/20 tracking-[0.8em] uppercase">
          [ End of Core Portfolio System Archival Transit ]
        </div>
      </div>

    </footer>
  )
}