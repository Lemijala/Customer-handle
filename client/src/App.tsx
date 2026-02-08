// File path: src/App.tsx

import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import CaseStudies from './components/sections/CaseStudies';
import Insights from './components/sections/Insights';
import Artifacts from './components/sections/Artifacts';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden flex flex-col transition-colors duration-300">
      <Navbar />
      
      {/* Add id to each section for navigation */}
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="case-studies">
        <CaseStudies />
      </section>
      
      <section id="insights">
        <Insights />
      </section>
      
      <section id="artifacts">
        <Artifacts />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;