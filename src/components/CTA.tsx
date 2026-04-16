import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative border-t border-vital-border bg-vital-bg overflow-hidden">
      <div className="absolute inset-0 bg-vital-cyan/5 blur-[100px] rounded-full transform -translate-y-1/2"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to Secure Your Cold Chain?</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Join the waitlist for V.I.T.A.L. early access or request a technical demonstration for your logistics network.
          </p>
          <a 
            href="https://forms.gle/6ofsBBzXcA7t19jD6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-vital-cyan text-black font-bold rounded-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            Request Demo / Apply Access
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
