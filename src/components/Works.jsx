export default function Works({ projects }) {
  return (
    <main id="works-archive" className="min-h-screen bg-[#06070d] text-[rgb(227,218,201)] font-serif relative pb-48 pt-24 z-30 shadow-[0_-40px_60px_rgba(6,7,13,0.98)]">
      
      {/* HIGH-DENSITY BLUEPRINT TOP BAR */}
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 flex justify-between items-center pb-6 opacity-30 font-mono text-[9px] tracking-[0.4em] border-b border-neutral-900/50 uppercase">
        <span>DATA_STREAM // CORE_ARCHIVE</span>
        <span>ACT II : COMPILATION</span>
      </div>

      {/* GIANT EDITORIAL HEADER CRAWL */}
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 select-none pt-12">
        <h1 className="text-[14vw] font-normal font-serif tracking-tighter uppercase leading-none text-[#e3dac9]/90 text-left">
          WORKS
        </h1>
      </div>

      {/* THE SEAMLESS FILM REEL GRID */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 xl:px-32 mt-12 grid grid-cols-12 gap-y-48 relative">
        
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={project.num}
              className={`col-span-12 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-12 lg:gap-28 w-full group/row border-t border-neutral-900/60 pt-16`}
            >
              
              {/* CELL TEXT ARCHITECTURE LAYER */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                
                {/* Micro Tagline - Shifts tracking out when hovering the row */}
                <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-500 block mb-4 uppercase transition-all duration-500 group-hover/row:text-[#14213B] group-hover/row:tracking-[0.35em]">
                  // {project.tagline}
                </span>

                {/* Project Headline Log */}
                <h2 className="text-3xl md:text-6xl font-normal tracking-wide uppercase font-serif mb-4 flex items-baseline gap-4 transition-transform duration-500 group-hover/row:translate-x-2">
                  <span className="font-mono text-xs tracking-normal text-neutral-600 italic font-light group-hover/row:text-[#e3dac9]/40">
                    ({project.num})
                  </span>
                  {project.title}
                </h2>

                {/* Sub-label Role metadata */}
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e3dac9]/50 block mb-6">
                  {project.role}
                </span>

                {/* Running Project Narrative block */}
                <p className="font-serif text-xs md:text-sm leading-relaxed tracking-wide text-[#e3dac9]/60 max-w-xl transition-opacity duration-500 group-hover/row:opacity-90">
                  {project.desc}
                </p>
              </div>

              {/* HIGH-END INTERACTIVE METADATA FILM CELL */}
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="relative w-full aspect-[16/10] bg-neutral-950 border border-neutral-900 flex items-center justify-center overflow-hidden group shadow-2xl transition-all duration-700 ease-out group-hover/row:border-neutral-800">
                  
                  {/* Left Sprocket perforations */}
                  <div className="absolute left-3 top-0 bottom-0 w-3 flex flex-col justify-between py-4 opacity-10 transition-all duration-500 group-hover/row:opacity-25">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-3 bg-[#e3dac9] rounded-[1px]" />
                    ))}
                  </div>

                  {/* Right Sprocket perforations */}
                  <div className="absolute right-3 top-0 bottom-0 w-3 flex flex-col justify-between py-4 opacity-10 transition-all duration-500 group-hover/row:opacity-25">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-3 bg-[#e3dac9] rounded-[1px]" />
                    ))}
                  </div>

                  {/* INTERNAL INTERACTION WINDOW */}
                  <div className="w-[85%] h-full bg-neutral-900 relative overflow-hidden border-x border-neutral-950">
                    
                    {/* The Chromatic Color Layer — Swaps blend styles or fades away on context row hover */}
                    <div className="absolute inset-0 bg-[#14213B]/40 mix-blend-multiply z-10 transition-all duration-700 ease-out group-hover/row:bg-transparent" />
                    
                    {/* Background Graphic Asset container placeholder */}
                    <div className="w-full h-full object-cover transform scale-100 group-hover/row:scale-[1.04] transition-transform duration-1000 ease-out flex items-center justify-center text-neutral-700 font-mono text-[9px] tracking-[0.3em] uppercase select-none">
                      [ SCHEMA_PREVIEW_FRAME ]
                    </div>

                    {/* Shading Vignette Accent */}
                    <div className="absolute inset-0 pointer-events-none border border-white/5 shadow-[inset_0_0_40px_rgba(0,0,0,0.95)] z-20" />
                  </div>

                </div>
              </div>

            </div>
          )
        })}

      </div>
    </main>
  )
}