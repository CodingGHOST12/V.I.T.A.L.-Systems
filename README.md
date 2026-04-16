# V.I.T.A.L. Systems

**Variable Intelligent Thermal Assurance Logistics**

> The deep-tech infrastructure ending the global cold-chain crisis.

## Overview

The global cold chain relies on continuous active power and seamless handoffs. A single point of failure—a delayed truck or tarmac exposure—compromises the entire shipment. This is a physical infrastructure failure resulting in billions lost to thermal shocks during transit (including a ₹92,000 Cr annual loss in India alone, alongside 15-20% global cargo degradation).

**V.I.T.A.L.** is not a cooler; it is a self-sustaining thermal fortress. It shifts the paradigm from active cooling dependency to massive passive thermal inertia combined with active edge intelligence.

This repository contains the front-end architecture for the V.I.T.A.L. Systems landing page and B2B product showcase. 

## Features Highlights

*   **Premium Deep-Tech Aesthetic:** High-end, dark-themed UI designed for enterprise B2B customers and deep-tech investors.
*   **Buttery Smooth Animations:** Staggered viewport reveals and custom spring-eased animations driven by Motion.
*   **Fully Responsive Layouts:** Flawless scaling from 4K desktop monitors down to mobile devices, ensuring no horizontal scrolling or broken grids.
*   **High-Conversion CTA Flow:** Clear, integrated pathways for waitlist and demo requests directly linking to corporate forms.

## Tech Stack

*   **Core:** React 19, TypeScript
*   **Build Engine:** Vite 6
*   **Styling:** Tailwind CSS v4 (with custom `@theme` integrations)
*   **Animations:** Motion (`motion/react`)
*   **Iconography:** Lucide React

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── Architecture.tsx   # Visual breakdown of pod layers + VBoxes
│   │   ├── CTA.tsx            # Lead generation / Google Form link
│   │   ├── DataFlow.tsx       # Edge compute and cryptographic ledger explanation
│   │   ├── Economics.tsx      # B2B value proposition and ROI
│   │   ├── Footer.tsx         # Clean corporate footer
│   │   ├── Hero.tsx           # High-impact animated landing section
│   │   ├── Navbar.tsx         # Sticky navigation header
│   │   ├── PodTypes.tsx       # Hardware variants (Basic, Smart, Ultra, Defense)
│   │   └── Problem.tsx        # The cold chain structural failure explanation
│   ├── App.tsx                # Main application layout and assembly
│   ├── index.css              # Global styles, variables, and typography
│   └── main.tsx               # React DOM entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.ts         # Tailwind configuration (CSS-based via v4)
└── vite.config.ts             # Vite configuration
```

## Getting Started

### Prerequisites
* Node.js (v18+ recommended)
* npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## License
© V.I.T.A.L. Systems. All rights reserved.
