import { motion } from 'motion/react';
import { Box, Zap, Satellite, ShieldAlert } from 'lucide-react';

const pods = [
  {
    name: "Basic Pod",
    icon: <Box className="w-8 h-8 text-zinc-400" />,
    color: "bg-zinc-500",
    description: "Passive thermal protection using VIPs and PCMs. Ideal for short-haul agricultural transport.",
    specs: ["Passive PCM + VIP", "Basic Datalogging", "48hr Survival", "Low Cost"]
  },
  {
    name: "Smart Pod",
    icon: <Zap className="w-8 h-8 text-vital-cyan" />,
    color: "bg-vital-cyan",
    description: "Active cooling with edge compute. Real-time tracking and anomaly detection for high-value perishables.",
    specs: ["Active Compressor", "Edge Compute", "Cellular Sync", "72hr Survival"]
  },
  {
    name: "Ultra Pod",
    icon: <Satellite className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-500",
    description: "Multi-zone VBoxes with satellite uplink. Pharma-grade precision for vaccines and biologics.",
    specs: ["Multi-Zone VBoxes", "Satellite Uplink", "±0.5°C Precision", "Crypto Ledger"]
  },
  {
    name: "Defense Pod",
    icon: <ShieldAlert className="w-8 h-8 text-vital-amber" />,
    color: "bg-vital-amber",
    description: "EMP-shielded, ruggedized units for blood and vaccine transport in hostile or disaster environments.",
    specs: ["EMP Shielded", "MIL-SPEC Rugged", "Airdrop Capable", "120hr Survival"]
  }
];

export default function PodTypes() {
  return (
    <section id="pods" className="py-24 relative border-t border-vital-border bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-zinc-500 mb-2 tracking-widest uppercase">03 / Hardware Variants</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">The Pod Ecosystem</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pods.map((pod, index) => (
            <motion.div
              key={pod.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-vital-surface border border-vital-border p-6 rounded-xl hover:bg-zinc-900 transition-colors flex flex-col h-full"
            >
              <div className="mb-6">{pod.icon}</div>
              <h4 className="text-xl font-bold mb-3">{pod.name}</h4>
              <p className="text-zinc-400 text-sm mb-6 flex-grow">{pod.description}</p>
              <ul className="space-y-2 mt-auto">
                {pod.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                    <div className={`w-1 h-1 rounded-full ${pod.color}`}></div>
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
