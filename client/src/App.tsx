// File path: src/App.tsx

import { lazy, Suspense } from 'react';
import Layout from './components/common/Layout';
import Reveal from './components/common/Reveal';
import Hero from './components/sections/Hero';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const CaseStudies = lazy(() => import('./components/sections/CaseStudies'));
const Insights = lazy(() => import('./components/sections/Insights'));
const Artifacts = lazy(() => import('./components/sections/Artifacts'));
const Contact = lazy(() => import('./components/sections/Contact'));

const SectionFallback = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

function App() {
  return (
    <Layout>
      <section id="home">
        <Hero />
      </section>

      <Suspense fallback={<SectionFallback />}>
        <section id="about">
          <Reveal direction="left" duration={1000} delay={0}>
            <About />
          </Reveal>
        </section>

        <section id="skills">
          <Reveal direction="right" duration={1000} delay={0}>
            <Skills />
          </Reveal>
        </section>

        <section id="case-studies">
          <Reveal direction="up" duration={1000} delay={0}>
            <CaseStudies />
          </Reveal>
        </section>

        <section id="insights">
          <Reveal direction="up" duration={1000} delay={0}>
            <Insights />
          </Reveal>
        </section>

        <section id="artifacts">
          <Reveal direction="up" duration={1000} delay={0}>
            <Artifacts />
          </Reveal>
        </section>

        <section id="contact">
          <Reveal direction="up" duration={1000} delay={0}>
            <Contact />
          </Reveal>
        </section>
      </Suspense>
    </Layout>
  );
}

export default App;
