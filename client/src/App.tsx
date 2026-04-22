// File path: src/App.tsx

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import Reveal from './components/common/Reveal';
import Hero from './components/sections/Hero';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const CaseStudies = lazy(() => import('./components/sections/CaseStudies'));
const Artifacts = lazy(() => import('./components/sections/Artifacts'));
const Contact = lazy(() => import('./components/sections/Contact'));

const SectionFallback = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin routes — no layout */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Public routes — with layout */}
        <Route path="/*" element={
          <Layout>
            <Suspense fallback={<SectionFallback />}>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<Reveal direction="left" duration={1000} delay={0}><About /></Reveal>} />
                <Route path="/skills" element={<Reveal direction="right" duration={1000} delay={0}><Skills /></Reveal>} />
                <Route path="/case-studies" element={<Reveal direction="up" duration={1000} delay={0}><CaseStudies /></Reveal>} />
                <Route path="/artifacts" element={<Reveal direction="up" duration={1000} delay={0}><Artifacts /></Reveal>} />
                <Route path="/contact" element={<Reveal direction="up" duration={1000} delay={0}><Contact /></Reveal>} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
