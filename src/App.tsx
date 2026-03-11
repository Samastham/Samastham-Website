import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Providers from './pages/Providers';
import Contact from './pages/Contact';
import Medicines from './pages/Medicines';
import Plans from './pages/Plans';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white overflow-x-hidden selection:bg-primary-200 selection:text-primary-900 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
