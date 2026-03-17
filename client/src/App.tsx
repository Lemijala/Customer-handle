// File path: src/App.tsx

import Layout from './components/common/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import CaseStudies from './components/sections/CaseStudies';
import Insights from './components/sections/Insights';
import Artifacts from './components/sections/Artifacts';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
