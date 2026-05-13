import { useState } from 'react' // Import this at the top
import projects from './data/projects.json'

function App() {
  const [view, setView] = useState('home') // This tracks where we are

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-200">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div onClick={() => setView('home')} className="text-xl font-black cursor-pointer">ZS.DEV</div>
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
          <button onClick={() => setView('work')} className="hover:text-purple-600">Work</button>
          <button onClick={() => setView('about')} className="hover:text-purple-600">About</button>
        </div>
      </nav>

      {/* Conditional Rendering - The Architect's Logic */}
      {view === 'home' && (
        <section className="px-10 pt-40 pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* The Signature Header Line */}
          <div className="flex flex-wrap gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">
            <span>Aspiring Data Architect</span>
            <span>|</span>
            <span>UI/UX Designer</span>
            <span>|</span>
            <span>Front-end Developer</span>
          </div>

          <h1 className="text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter uppercase mb-12">
            Zion <br /> 
            <span className="text-slate-200 hover:text-purple-600 transition-colors duration-500 cursor-default">Sevilla</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <p className="text-xl md:text-2xl text-slate-500 max-w-xl leading-snug font-medium">
              Designing the <span className="text-slate-900 italic">catalyst</span> for human potential through structured art and logical architecture.
            </p>
            
            <button 
              onClick={() => setView('work')} 
              className="group relative px-12 py-5 bg-black text-white rounded-full font-bold overflow-hidden"
            >
              <span className="relative z-10">Explore Selected Works</span>
              <div className="absolute inset-0 bg-purple-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </section>
      )}
    </div>
  )
}

export default App