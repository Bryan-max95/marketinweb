/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import SuccessCases from './pages/SuccessCases';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import WorkWithUs from './pages/WorkWithUs';
import Consulting from './pages/Consulting';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/casos-de-exito" element={<SuccessCases />} />
            <Route path="/equipo" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/trabaja-con-nosotros" element={<WorkWithUs />} />
            <Route path="/consultoria" element={<Consulting />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
