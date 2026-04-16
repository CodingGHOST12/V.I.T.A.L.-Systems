import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problem" className="py-24 relative border-t border-vital-border bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm font-mono text-vital-amber mb-2 tracking-widest uppercase">01 / The Crisis</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Structural Failure</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              The global cold chain relies on continuous active power and seamless handoffs. A single point of failure—a delayed truck or tarmac exposure—compromises the entire shipment.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              This is a physical infrastructure failure, resulting in billions lost to thermal shocks during transit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-vital-surface border border-vital-border p-6 sm:p-8 rounded-xl flex flex-col justify-between min-h-[12rem]">
              <AlertTriangle className="w-8 h-8 text-vital-amber mb-4" />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">₹92,000 Cr</div>
                <div className="text-xs sm:text-sm font-mono text-zinc-500 uppercase">Annual Loss (India)</div>
              </div>
            </div>
            
            <div className="bg-vital-surface border border-vital-border p-6 sm:p-8 rounded-xl flex flex-col justify-between min-h-[12rem]">
              <TrendingDown className="w-8 h-8 text-red-500 mb-4" />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">15-20%</div>
                <div className="text-xs sm:text-sm font-mono text-zinc-500 uppercase">Cargo Degradation</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
