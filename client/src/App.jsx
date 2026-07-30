import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import BackToTop from './components/BackToTop.jsx';
import Placeholder from './pages/Placeholder.jsx';

// Pages are built one per step; each replaces its Placeholder below.
const PAGES = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/assessments', 'Assessments & Ratings'],
  ['/benchmarking', 'Benchmarking'],
  ['/recognition', 'Recognition & Awards'],
  ['/advisory', 'Advisory & Consulting'],
  ['/capability', 'Capability Building & DOJO'],
  ['/value-chain', 'Value Chain'],
  ['/industries', 'Industries'],
  ['/contact', 'Contact']
];

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          {PAGES.map(([path, title]) => (
            <Route key={path} path={path} element={<Placeholder title={title} />} />
          ))}
          <Route path="*" element={<Placeholder title="Page not found" />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
