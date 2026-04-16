import { motion } from 'motion/react';
import { Database, Network, Lock, Activity } from 'lucide-react';

export default function DataFlow() {
  return (
    <section id="data" className="py-24 relative border-t border-vital-border bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-blue-500 mb-2 tracking-widest uppercase">04 / Intelligence Layer</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Edge Compute & Data Flow</h3>
          <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
            V.I.T.A.L. pods do not rely on constant cloud connectivity. They are autonomous edge nodes capable of making real-time thermal decisions offline, syncing to a cryptographic ledger only when connectivity is available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="mt-1"><Activity className="w-6 h-6 text-vital-cyan" /></div>
              <div>
                <h4 className="text-lg font-bold mb-2">1. Sensor Ingestion</h4>
                <p className="text-zinc-400 text-sm">Continuous polling of internal/external temperature, humidity, shock (accelerometer), and gas levels. Data is sampled at 10Hz.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1"><Network className="w-6 h-6 text-vital-amber" /></div>
              <div>
                <h4 className="text-lg font-bold mb-2">2. Edge AI Processing</h4>
                <p className="text-zinc-400 text-sm">Local ARM Cortex processor runs anomaly detection models. If external heat spikes, the AI preemptively engages the micro-compressor before internal temps rise.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1"><Lock className="w-6 h-6 text-blue-500" /></div>
              <div>
                <h4 className="text-lg font-bold mb-2">3. Cryptographic Ledger</h4>
                <p className="text-zinc-400 text-sm">All thermal data and door-open events are cryptographically signed locally. This creates an immutable, audit-proof record for insurance and pharma compliance.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1"><Database className="w-6 h-6 text-zinc-400" /></div>
              <div>
                <h4 className="text-lg font-bold mb-2">4. Asynchronous Sync</h4>
                <p className="text-zinc-400 text-sm">When cellular or satellite networks are detected, the pod pushes the compressed, signed ledger to the V.I.T.A.L. cloud platform.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-vital-surface border border-vital-border rounded-xl p-6 font-mono text-xs text-zinc-400 overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="mb-4 text-blue-500">SYSTEM.LOG // LIVE FEED</div>
            <div className="space-y-2 opacity-80 overflow-x-auto whitespace-nowrap pb-2 text-[10px] sm:text-xs">
              <p>[10:42:01] SENSOR_POLL: EXT_TEMP=38.2C INT_TEMP=4.1C</p>
              <p>[10:42:02] AI_PREDICT: THERMAL_BREACH_RISK_IN_45M</p>
              <p className="text-vital-amber">[10:42:02] ACTION: ENGAGE_COMPRESSOR (PWR=40%)</p>
              <p>[10:42:05] SENSOR_POLL: EXT_TEMP=38.3C INT_TEMP=4.0C</p>
              <p>[10:42:10] NET_STATUS: OFFLINE</p>
              <p>[10:42:10] LEDGER: SIGNING_BLOCK_#89234</p>
              <p className="text-vital-cyan">[10:42:15] ACTION: PCM_PHASE_CHANGE_DETECTED (LATENT_HEAT_ABSORPTION)</p>
              <p>[10:42:20] SENSOR_POLL: EXT_TEMP=38.5C INT_TEMP=4.0C</p>
              <p>[10:42:25] NET_STATUS: OFFLINE</p>
              <p>[10:42:25] LEDGER: SIGNING_BLOCK_#89235</p>
              <p>[10:42:30] SENSOR_POLL: EXT_TEMP=38.6C INT_TEMP=4.0C</p>
              <p className="text-green-400">[10:42:35] STATUS: THERMAL_EQUILIBRIUM_MAINTAINED</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
