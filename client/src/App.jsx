import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import BackToTop from './components/BackToTop.jsx';
import Placeholder from './pages/Placeholder.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          {/* still to do */}
          <Route path="/assessments" element={<Placeholder title="Assessments & Ratings" />} />
          <Route path="/benchmarking" element={<Placeholder title="Benchmarking" />} />
          <Route path="/recognition" element={<Placeholder title="Recognition & Awards" />} />
          <Route path="/advisory" element={<Placeholder title="Advisory & Consulting" />} />
          <Route path="/capability" element={<Placeholder title="Capability Building & DOJO" />} />
          <Route path="/value-chain" element={<Placeholder title="Value Chain" />} />
          <Route path="/industries" element={<Placeholder title="Industries" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />

          <Route path="*" element={<Placeholder title="Page not found" />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
