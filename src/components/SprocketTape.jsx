export default function SprocketTape() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-12 md:w-16 flex flex-col items-center justify-between pointer-events-none z-40 py-8 select-none mix-blend-difference">
      
      {/* SPROCKET HOLES: Replicating authentic 35mm film margins */}
      <div className="w-3 h-full flex flex-col justify-between opacity-40">
        {[...Array(16)].map((_, i) => (
          <div 
            key={i} 
            className="w-2.5 h-4 border border-[#e3dac9] rounded-[2px] transition-all duration-700" 
          />
        ))}
      </div>

      {/* REEL METADATA MARKINGS */}
      <div className="absolute left-9.5 md:left-7 top-1/2 -translate-y-1/2 -rotate-90 origin-left whitespace-nowrap flex items-center gap-6 font-mono text-[5px] tracking-[0.18em] uppercase text-[#e3dac9]/30">
        <span>[ REEL_INDEX // 2026_V1 ]</span>
        <span className="w-1.5 h-1.5 bg-[#e3dac9]/30 rounded-full" />
        <span>THE OPEN SCHEMA</span>
      </div>

    </aside>
  )
}