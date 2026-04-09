import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Providers from './pages/Providers';
import Contact from './pages/Contact';
import Plans from './pages/Plans';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col selection:bg-primary-200 selection:text-primary-900 font-sans">
        <Navbar />
        {/* Main content wrapper to ensure content is visible and takes up space */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plans" element={<Plans />} />
            {/* Redirect old medicines path to home */}
            <Route path="/medicines" element={<Navigate to="/" replace />} />
            {/* Fallback to home for any unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
