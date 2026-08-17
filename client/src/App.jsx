import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import BackToTop from './components/BackToTop.jsx';
import Placeholder from './pages/Placeholder.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Assessments from './pages/Assessments.jsx';
import Benchmarking from './pages/Benchmarking.jsx';
import Recognition from './pages/Recognition.jsx';
import Advisory from './pages/Advisory.jsx';
import Capability from './pages/Capability.jsx';
import ValueChain from './pages/ValueChain.jsx';
import Industries from './pages/Industries.jsx';
import Contact from './pages/Contact.jsx';

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
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/benchmarking" element={<Benchmarking />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/capability" element={<Capability />} />
          <Route path="/value-chain" element={<ValueChain />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Placeholder title="Page not found" />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
