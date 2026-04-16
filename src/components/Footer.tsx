export default function Footer() {
  return (
    <footer className="py-12 border-t border-vital-border bg-black text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold tracking-tighter mb-4">V.I.T.A.L.</h2>
        <p className="text-zinc-500 text-sm mb-8 max-w-xl mx-auto">
          Autonomous edge-compute infrastructure guaranteeing thermal survival.
        </p>
        <div className="flex justify-center gap-6 text-sm font-mono text-zinc-600">
          <span className="cursor-default">PRIVACY POLICY</span>
          <span className="cursor-default">TERMS OF SERVICE</span>
        </div>
        <div className="mt-12 text-xs text-zinc-700 font-mono">
          © {new Date().getFullYear()} V.I.T.A.L. Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
