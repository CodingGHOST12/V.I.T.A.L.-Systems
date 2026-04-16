import { motion } from 'motion/react';
import { Cpu, Shield, ThermometerSnowflake, Activity, Database, Anchor, Zap, ShieldAlert } from 'lucide-react';

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 relative border-t border-vital-border bg-vital-bg overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-vital-cyan mb-2 tracking-widest uppercase">02 / System Architecture</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Anatomy of a V.I.T.A.L. Pod</h3>
          <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
            Autonomous thermal infrastructure. The system is divided into three distinct layers, engineered to guarantee 72 hours of passive operation in hostile environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shield Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-vital-surface border border-vital-border p-8 rounded-xl relative group hover:border-zinc-700 transition-colors"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-800 to-zinc-600 rounded-t-xl"></div>
            <Shield className="w-10 h-10 text-zinc-400 mb-6" />
            <h4 className="text-xl font-bold mb-3">Layer 1: The Shield</h4>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Impact-resistant polymer and carbon-fiber composite exoskeleton. Coated with a solar-reflective layer to deflect ambient radiation on airport tarmacs.
            </p>
            <ul className="space-y-3 font-mono text-xs text-zinc-500">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full"></div> Tensile Strength: 400 MPa</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full"></div> Solar Reflectance: 92%</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full"></div> IP68 Water/Dust Resistance</li>
            </ul>
          </motion.div>

          {/* Core Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-vital-surface border border-vital-border p-8 rounded-xl relative group hover:border-vital-cyan/50 transition-colors"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vital-cyan to-blue-600 rounded-t-xl"></div>
            <ThermometerSnowflake className="w-10 h-10 text-vital-cyan mb-6" />
            <h4 className="text-xl font-bold mb-3">Layer 2: The Core</h4>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Vacuum Insulated Panels (VIPs) combined with tailored Phase Change Materials (PCMs). Provides massive thermal inertia.
            </p>
            <ul className="space-y-3 font-mono text-xs text-zinc-500">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-vital-cyan rounded-full"></div> VIP R-Value: R-50 per inch</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-vital-cyan rounded-full"></div> PCM Latent Heat: 250 J/g</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-vital-cyan rounded-full"></div> Passive Survival: 72 Hours</li>
            </ul>
          </motion.div>

          {/* Brain Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-vital-surface border border-vital-border p-8 rounded-xl relative group hover:border-vital-amber/50 transition-colors"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vital-amber to-orange-600 rounded-t-xl"></div>
            <Cpu className="w-10 h-10 text-vital-amber mb-6" />
            <h4 className="text-xl font-bold mb-3">Layer 3: The Brain</h4>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Edge AI node powered by a 48V LiFePO4 battery system. Controls the active micro-compressor and logs cryptographic sensor data.
            </p>
            <ul className="space-y-3 font-mono text-xs text-zinc-500">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-vital-amber rounded-full"></div> Power: 48V LiFePO4 (2kWh)</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-vital-amber rounded-full"></div> Compute: ARM Cortex-A53 Edge Node</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-vital-amber rounded-full"></div> Active Cooling: BLDC Micro-compressor</li>
            </ul>
          </motion.div>
        </div>

        {/* VBox Section */}
        <div className="mt-24 border border-vital-border bg-[#0a0a0a] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-4">VBoxes: Multi-Zone Modularity</h4>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Inside the main Pod, cargo is stored in modular <strong>VBoxes</strong>. These are smaller, insulated inserts that allow a single Pod to maintain multiple temperature zones simultaneously.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                A single Ultra Pod can carry vaccines at -20°C in one VBox, and biological samples at 2-8°C in another, dynamically routing cooling power where it's needed most based on edge-AI predictions.
              </p>
              <div className="flex gap-4">
                <div className="bg-vital-surface border border-vital-border px-4 py-2 rounded font-mono text-xs text-vital-cyan">Zone A: -20°C</div>
                <div className="bg-vital-surface border border-vital-border px-4 py-2 rounded font-mono text-xs text-green-400">Zone B: +4°C</div>
                <div className="bg-vital-surface border border-vital-border px-4 py-2 rounded font-mono text-xs text-vital-amber">Zone C: +15°C</div>
              </div>
            </div>
            <div className="relative h-64 border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/50 flex items-center justify-center">
              {/* Abstract visualization of VBoxes */}
              <div className="w-3/4 h-3/4 border-2 border-zinc-700 rounded-lg p-2 flex flex-col gap-2 relative">
                <div className="absolute -top-3 -left-3 bg-vital-bg px-2 text-xs font-mono text-zinc-500">MAIN POD</div>
                <div className="flex-1 border border-vital-cyan/30 bg-vital-cyan/5 rounded flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwyNDAsMjU1LDAuMSkiLz48L3N2Zz4=')]"></div>
                  <span className="font-mono text-vital-cyan text-sm z-10">VBOX-1 [-20°C]</span>
                </div>
                <div className="flex-1 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 border border-green-500/30 bg-green-500/5 rounded flex items-center justify-center relative overflow-hidden min-h-[60px]">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwyNTUsMCwwLjEpIi8+PC9zdmc+')]"></div>
                    <span className="font-mono text-green-400 text-sm z-10">VBOX-2 [+4°C]</span>
                  </div>
                  <div className="flex-1 border border-vital-amber/30 bg-vital-amber/5 rounded flex items-center justify-center relative overflow-hidden min-h-[60px]">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDE1MywwLDAuMSkiLz48L3N2Zz4=')]"></div>
                    <span className="font-mono text-vital-amber text-sm z-10">VBOX-3 [+15°C]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
