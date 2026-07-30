import Hero from '../components/home/Hero.jsx';
import Marquee from '../components/home/Marquee.jsx';
import About from '../components/home/About.jsx';
import Services from '../components/home/Services.jsx';
import ValueChain from '../components/home/ValueChain.jsx';
import Stats from '../components/home/Stats.jsx';
import Serve from '../components/home/Serve.jsx';
import Awards from '../components/home/Awards.jsx';
import Testimonial from '../components/home/Testimonial.jsx';
import Cta from '../components/home/Cta.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <ValueChain />
      <Stats />
      <Serve />
      <Awards />
      <Testimonial />
      <Cta />
    </>
  );
}
