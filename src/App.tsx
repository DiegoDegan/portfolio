import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import ArtigoAntigravity from './pages/ArtigoAntigravity';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors duration-300 dark:bg-brand-dark dark:text-gray-100">
        <Header />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/projetos" element={<Projects />} />
              <Route path="/projeto/:id" element={<ProjectDetail />} />
              <Route path="/artigos" element={<ArtigoAntigravity />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
