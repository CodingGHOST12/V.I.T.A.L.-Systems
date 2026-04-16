import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-vital-border py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">
          V.I.T.A.L.
        </div>
        <div className="hidden lg:flex gap-8 text-sm font-mono text-zinc-400">
          <a href="#problem" className="hover:text-white transition-colors">01. CRISIS</a>
          <a href="#architecture" className="hover:text-white transition-colors">02. ARCHITECTURE</a>
          <a href="#pods" className="hover:text-white transition-colors">03. HARDWARE</a>
          <a href="#data" className="hover:text-white transition-colors">04. INTELLIGENCE</a>
        </div>
      </div>
    </motion.nav>
  );
}
