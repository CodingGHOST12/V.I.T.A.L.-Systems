import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, Scale } from 'lucide-react';

export default function Economics() {
  return (
    <section id="economics" className="py-24 relative border-t border-vital-border bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-green-500 mb-2 tracking-widest uppercase">05 / The Business Case</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Unit Economics & Viability</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-vital-surface border border-vital-border p-8 rounded-xl"
          >
            <TrendingUp className="w-10 h-10 text-green-500 mb-6" />
            <h4 className="text-xl font-bold mb-4">Eliminating the 20% Loss</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              V.I.T.A.L. pods are heavier and require higher upfront CapEx than standard styrofoam coolers. However, by eliminating the 15-20% spoilage rate inherent in traditional cold chains, the ROI is achieved within 4.2 transit cycles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-vital-surface border border-vital-border p-8 rounded-xl"
          >
            <ShieldCheck className="w-10 h-10 text-blue-500 mb-6" />
            <h4 className="text-xl font-bold mb-4">Insurance & Compliance</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The cryptographic ledger provides indisputable proof of thermal integrity. This drastically reduces insurance premiums for high-value pharma shipments and eliminates compliance disputes during handoffs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-vital-surface border border-vital-border p-8 rounded-xl"
          >
            <Scale className="w-10 h-10 text-vital-amber mb-6" />
            <h4 className="text-xl font-bold mb-4">Premium Pricing Power</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Logistics providers using V.I.T.A.L. can charge a premium for "Guaranteed Zero-Excursion" transport. The weight trade-off is offset by the ability to ship high-margin goods with absolute certainty.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
