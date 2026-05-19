// src/components/TechLineDivider.jsx
import React from 'react'

export default function FilmDivider() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-40 py-8 select-none pointer-events-none font-mono text-[9px] opacity-25 tracking-[0.5em] flex items-center justify-between gap-4">
      <div className="h-[1px] flex-1 bg-current opacity-40" />
      <span>[ FRAME_BREAK_SYS_LOG ]</span>
      <div className="h-[1px] flex-1 bg-current opacity-40" />
    </div>
  )
}