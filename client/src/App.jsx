import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import BackToTop from './components/BackToTop.jsx';
import Placeholder from './pages/Placeholder.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* still to do */}
          <Route path="/about" element={<Placeholder title="About" />} />
          <Route path="/services" element={<Placeholder title="Services" />} />
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
