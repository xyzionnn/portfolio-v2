import React, { useEffect, useState } from 'react'

export default function FilmLoader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // 1. Let the film reel wind up and spin for 2.8 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 2800)

    // 2. Allow the curtain pull transition to finish before destroying the loader node
    const destroyTimer = setTimeout(() => {
      if (onComplete) onComplete()
    }, 3600)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(destroyTimer)
    }
  }, [onComplete])

  return (
    <div 
      className={`fixed inset-0 bg-[#050508] z-[9999] flex flex-col items-center justify-center select-none pointer-events-auto transition-all duration-700 ease-in-out ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* LOCAL CSS KEYFRAMES FOR THE CHRONO-MECHANICAL SPIN */}
      <style>{`
        @keyframes reel-wind {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(45deg); }
          40% { transform: rotate(35deg); } /* Subtle mechanical kickback */
          100% { transform: rotate(1080deg); } /* High-speed final winding */
        }
        @keyframes countdown-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        .animate-reel {
          animation: reel-wind 2.6s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .animate-pulse-slow {
          animation: countdown-pulse 1.2s infinite ease-in-out;
        }
      `}</style>

      {/* THE COMPOSITION SPACE */}
      <div className="relative flex flex-col items-center gap-8">
        
        {/* MECHANICAL SVG FILM REEL */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full text-[#C5A880] fill-current animate-reel"
          >
            {/* Outer Rim */}
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.5" />
            {/* Inner Track Ring */}
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-40" />
            {/* Core Center Axis */}
            <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="3" />

            {/* Cutouts representing traditional circular film container windows */}
            <circle cx="50" cy="24" r="9" fill="#050508" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="76" r="9" fill="#050508" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="24" cy="50" r="9" fill="#050508" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="76" cy="50" r="9" fill="#050508" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Diagonal secondary mechanics */}
            <circle cx="32" cy="32" r="5" fill="#050508" stroke="currentColor" strokeWidth="1" />
            <circle cx="68" cy="68" r="5" fill="#050508" stroke="currentColor" strokeWidth="1" />
            <circle cx="32" cy="68" r="5" fill="#050508" stroke="currentColor" strokeWidth="1" />
            <circle cx="68" cy="32" r="5" fill="#050508" stroke="currentColor" strokeWidth="1" />
          </svg>
          
          {/* Subtle glowing center projection point */}
          <div className="absolute inset-0 m-auto w-2 h-2 bg-white rounded-full blur-[2px] opacity-70 animate-pulse" />
        </div>

        {/* LOG SYSTEM METRICS LABELS */}
        <div className="flex flex-col items-center gap-1 font-mono text-[9px] tracking-[0.4em] text-[#e3dac9]/60">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-[#C5A880] rounded-full animate-ping" />
            <span className="text-[#C5A880] font-bold">PRJ_MTRX // THREAD_LOAD</span>
          </div>
          <span className="opacity-40 animate-pulse-slow mt-1">[ WINDING CORE CELL REELS ]</span>
        </div>

      </div>

      {/* FOOTER METRICS DEPLOYMENT */}
      <div className="absolute bottom-8 font-mono text-[8px] tracking-[0.6em] text-[#C5A880]/30 uppercase">
        © OP_04 // System Curtain Rise
      </div>

    </div>
  )
}