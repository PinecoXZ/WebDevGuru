export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  metric: string;
  client: string;
  summary: string;
  image: string;
  alt: string;
  year: string;
}

export const ALL_PROJECTS: ProjectItem[] = [
  { 
    id: 'dogemerch', 
    name: "Lumina AI Platform", 
    category: "AI & SaaS", 
    client: "Lumina Systems Inc.",
    metric: "+380% Enterprise Pipeline",
    summary: "Bespoke digital flagship and interactive model canvas engineered for sub-second enterprise conversion, dynamic feature tours, and zero friction.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    alt: "Lumina AI flagship cloud platform interface with sub-second performance",
    year: "2026"
  },
  { 
    id: 'gigachad-crm', 
    name: "Verve Haute Commerce", 
    category: "Luxury D2C", 
    client: "Verve Atelier Paris",
    metric: "+290% Checkout Velocity",
    summary: "Ultra-luxury headless storefront with instant 3D lookbooks, sub-0.5s mobile transitions, and frictionless multi-currency checkout.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    alt: "Verve Haute Commerce luxury digital flagship storefront",
    year: "2026"
  },
  { 
    id: 'brainrot-arcade', 
    name: "Chronos Capital Terminal", 
    category: "Fintech & Web App", 
    client: "Chronos High-Frequency",
    metric: "0.32s Edge Latency",
    summary: "Institutional-grade financial intelligence workspace with real-time streaming charts, zero layout shift, and intuitive keyboard navigation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    alt: "Chronos Capital Terminal realtime financial analytics dashboard",
    year: "2025"
  },
  { 
    id: 'based-nutrition', 
    name: "Synthetix Health Labs", 
    category: "Biotech D2C", 
    client: "Synthetix Dynamics",
    metric: "+340% Subscription MRR",
    summary: "Next-generation cellular longevity storefront with interactive personalized regimen builder, scientific research breakdown, and single-tap checkout.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    alt: "Synthetix Health Labs interactive custom subscription builder",
    year: "2025"
  },
  { 
    id: 'stonks-capital', 
    name: "Kinetix Spatial OS", 
    category: "Hardware & SaaS", 
    client: "Kinetix Technologies",
    metric: "14.2M Launch Views",
    summary: "Cinematic spatial computing product launch page featuring silky scroll-driven hardware breakdowns, 60fps animations, and pre-order velocity.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200",
    alt: "Kinetix Spatial OS launch experience showcasing hardware and interactive UI",
    year: "2025"
  },
  { 
    id: 'zenith-chrono', 
    name: "Zenith Horology Guild", 
    category: "Heritage Luxury", 
    client: "Zenith Horology Guild",
    metric: "4.8x Private Inquiries",
    summary: "Private digital salon and interactive timepiece catalog engineered with high-fidelity macro details for ultra-high-net-worth collectors.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
    alt: "Zenith Horology Guild luxury watch catalog driving VIP consultation inquiries",
    year: "2025"
  }
];
