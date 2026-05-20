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

      {/* ========================================================================= */}
      {/* REFINED BOTTOM GLOBAL NAVIGATION LAYER                                    */}
      {/* ========================================================================= */}
      <nav className="absolute bottom-0 inset-x-0 p-8 md:p-12 flex justify-center items-center z-50 pointer-events-none">
        <div className="flex gap-8 md:gap-16 font-mono text-[10px] md:text-xs tracking-[0.35em] uppercase pointer-events-auto items-center selection:bg-transparent">
          
          {/* WORKS ACTION */}
          <button 
            onClick={() => scrollToSection('works-archive')} 
            className="group relative text-[#e3dac9]/60 hover:text-[#e3dac9] transition-colors duration-500 py-2"
          >
            <span className="relative z-10 transition-transform duration-500 block group-hover:-translate-y-0.5">WORKS</span>
            {/* Sliding Underline Gauge */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C5A880] transition-all duration-500 ease-out group-hover:w-full opacity-80" />
          </button>

          {/* SEPARATOR VECTOR */}
          <span className="text-[#C5A880]/30 font-serif text-[10px] select-none">❖</span>

          {/* HOME / CORE ANCHOR */}
         <button 
            onClick={() => scrollToSection('about-section')} 
            className="group relative text-[#e3dac9]/60 hover:text-[#e3dac9] transition-colors duration-500 py-2"
          >
            <span className="relative z-10 transition-transform duration-500 block group-hover:-translate-y-0.5">PROFILE</span>
            {/* Sliding Underline Gauge */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C5A880] transition-all duration-500 ease-out group-hover:w-full opacity-80" />
          </button>

          {/* SEPARATOR VECTOR */}
          <span className="text-[#C5A880]/30 font-serif text-[10px] select-none">❖</span>

          {/* CONTACT ACTION */}
          <button 
            onClick={() => scrollToSection('contact')} 
            className="group relative text-[#e3dac9]/60 hover:text-[#e3dac9] transition-colors duration-500 py-2"
          >
            <span className="relative z-10 transition-transform duration-500 block group-hover:-translate-y-0.5">CONTACT</span>
            {/* Sliding Underline Gauge */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C5A880] transition-all duration-500 ease-out group-hover:w-full opacity-80" />
          </button>

        </div>
      </nav>

      {/* ========================================================================= */}
      {/* THEATRICAL TICKER SCROLL INDICATOR                                       */}
      {/* ========================================================================= */}
      {/* Added custom keyframe style to handle the looping film tracking shutter motion */}
      <style>{`
        @keyframes shutter-drop {
          0% { transform: translateY(-10px); opacity: 0; }
          30% { transform: translateY(0); opacity: 0.5; }
          70% { transform: translateY(0); opacity: 0.5; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-shutter {
          animation: shutter-drop 2.2s infinite cubic-bezier(0.76, 0, 0.24, 1);
        }
      `}</style>

    </section>
  )
}