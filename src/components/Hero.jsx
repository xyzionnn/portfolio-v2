import LandingPage from '../assets/landingpage.mp4' 

export default function Hero({ scrollToSection, setView }) {
  return (
    <section className="relative w-full h-screen overflow-hidden select-none bg-neutral-900 text-[#e3dac9]">
      
      {/* BACKGROUND CINEMATIC VIDEO OVERLAY */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.45] contrast-[1.05] pointer-events-none z-0"
      >
        <source src={LandingPage} type="video/mp4" />
      </video>

      {/* BLUE CHROMATIC OVERLAY LAYER */}
      <div className="absolute inset-0 bg-[#14213B]/30 mix-blend-normal pointer-events-none z-10" />

      {/* TOP RIGHT METADATA YEAR MARK */}
      <div className="absolute top-0 right-0 p-8 md:p-12 z-50 font-mono text-xs md:text-sm tracking-[0.3em] opacity-80">
        2026
      </div>

      {/* ASYMMETRICAL 12-COLUMN SCREEN GRID LAYER */}
      <div className="absolute inset-0 grid grid-cols-12 px-8 md:px-16 lg:px-24 xl:px-32 z-20 pointer-events-none">
        
        {/* HERO TYPOGRAPHY BLOCK */}
        <div className="col-span-12 my-auto flex flex-col items-start justify-center transform -translate-y-4 md:-translate-y-2">
          
          {/* ACT I */}
          <span className="font-serif text-lg md:text-xl tracking-[0.1em] block mb-2 opacity-60 italic">
            ACT I:
          </span>
          
          {/* THE OPEN SCHEMA */}
          <div className="max-w-max">
            <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.6rem] font-normal tracking-wide uppercase leading-none text-[#e3dac9] opacity-75 font-serif whitespace-nowrap">
              THE OPEN SCHEMA
            </h1>
            
            {/* BYLINE */}
            <div className="w-full flex justify-end mt-4">
              <p className="font-mono text-[9px] md:text-xs tracking-[0.25em] uppercase opacity-60 whitespace-nowrap">
                A DIGITAL PORTFOLIO BY <span className="font-serif font-bold tracking-wider opacity-80 uppercase">ZION SEVILLA</span>
              </p>
            </div>
          </div>

        </div>

        {/* LOWER ASYMMETRICAL BIO CONTENT */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 absolute bottom-28 md:bottom-40 left-8 md:left-16 lg:left-24 xl:left-32 max-w-xs lg:max-w-sm pointer-events-auto">
          <p className="font-serif text-xs md:text-sm leading-relaxed tracking-wide opacity-60 underline underline-offset-4 decoration-neutral-500">
            Aspiring UI/UX Designer synthesizing data architecture with visual soul to craft structurally sound, evocative digital systems.
          </p>
        </div>

      </div>

      {/* BOTTOM GLOBAL NAVIGATION LAYER */}
      <nav className="absolute bottom-0 inset-x-0 p-8 md:p-12 flex justify-center items-center z-50 pointer-events-none">
        <div className="flex gap-12 md:gap-24 font-mono text-[11px] md:text-xs tracking-[0.4em] uppercase opacity-90 pointer-events-auto">
          <button 
            onClick={() => scrollToSection('works-archive')} 
            className="transition-opacity duration-300 hover:opacity-60"
          >
            WORKS
          </button>
          <button 
            onClick={() => scrollToSection('about-section')} 
            className="transition-opacity duration-300 hover:opacity-60"
            >
            ZION SEVILLA
          </button>
          <button 
            onClick={() => scrollToSection('contact-section')} 
            className="transition-opacity duration-300 hover:opacity-60"
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* FLOATING SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 font-mono text-[9px] tracking-[0.4em] opacity-40 animate-pulse uppercase">
        ↓ SCROLL TO ARCHIVE
      </div>

    </section>
  )
}