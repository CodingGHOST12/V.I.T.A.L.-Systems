import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-vital-bg">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vital-cyan/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vital-amber/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-vital-border bg-vital-surface/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-vital-cyan animate-pulse"></span>
            <span className="text-xs font-mono tracking-widest text-zinc-300">SYSTEM ONLINE</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
            V.I.T.A.L.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto mb-12 px-4">
            Variable Intelligent Thermal Assurance Logistics. <br className="hidden md:block" />
            Solving the structural failure of global thermal logistics.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center w-full px-6 sm:px-0">
            <a 
              href="https://forms.gle/6ofsBBzXcA7t19jD6" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-vital-cyan text-black font-bold rounded-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center uppercase tracking-wide"
            >
              Request Access
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
