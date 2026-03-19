// File path: src/App.tsx

import Layout from './components/common/Layout';
import Reveal from './components/common/Reveal';
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
      {/* Hero */}
      <section id="home">
        <Reveal direction="up" duration={1500} delay={100}>
          <Hero />
        </Reveal>
      </section>

      {/* About */}
      <section id="about">
        <Reveal direction="left" duration={1500} delay={100}>
          <About />
        </Reveal>
      </section>

      {/* Skills */}
      <section id="skills">
        <Reveal direction="right" duration={1500} delay={100}>
          <Skills />
        </Reveal>
      </section>

      {/* Case Studies */}
      <section id="case-studies">
        <Reveal direction="zoom" duration={1600} delay={100}>
          <CaseStudies />
        </Reveal>
      </section>

      {/* Insights */}
      <section id="insights">
        <Reveal direction="up" duration={1500} delay={100}>
          <Insights />
        </Reveal>
      </section>

      {/* Artifacts */}
      <section id="artifacts">
        <Reveal direction="left" duration={1500} delay={100}>
          <Artifacts />
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact">
        <Reveal direction="zoom" duration={1600} delay={100}>
          <Contact />
        </Reveal>
      </section>
    </Layout>
  );
}

export default App;
