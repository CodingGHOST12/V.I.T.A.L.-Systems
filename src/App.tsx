import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Architecture from './components/Architecture';
import PodTypes from './components/PodTypes';
import DataFlow from './components/DataFlow';
import Economics from './components/Economics';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-vital-bg text-white selection:bg-vital-cyan selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Architecture />
        <PodTypes />
        <DataFlow />
        <Economics />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
