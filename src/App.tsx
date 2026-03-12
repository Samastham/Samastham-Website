import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

import Careers from './pages/Careers';

import Healthcare from './pages/Healthcare';
import FoodTech from './pages/FoodTech';
import Engagement from './pages/Engagement';
import Solutions from './pages/Solutions';
import SignIn from './pages/SignIn';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/foodtech" element={<FoodTech />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
