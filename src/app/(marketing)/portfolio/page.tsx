import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  Layers,
  Cpu, 
  Smartphone, 
  CreditCard, 
  Radio, 
  ShoppingBag, 
  GraduationCap,
  Globe2,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio & Ecosystem | Safi International Capital LTD',
  description: 'Explore the 6 global venture verticals steered by Safi International Capital LTD: ZEV Social Network, Safi AI, SafiPay NeoBanking, Safi TopUp Network, SafiPro Commerce, and Safi Academy.',
  alternates: {
    canonical: 'https://safiinternationalcapitalltd.site/portfolio',
  },
  openGraph: {
    title: 'Portfolio & Ecosystem | Safi International Capital LTD',
    description: 'Transformative digital infrastructure platforms across social media, fintech, telecom, and artificial intelligence.',
    url: 'https://safiinternationalcapitalltd.site/portfolio',
  }
};

export default function PortfolioPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Safi International Capital LTD Venture Portfolio",
    "description": "The authoritative portfolio of technological, financial, and educational platforms incubated and directed by Safi International Capital LTD.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": "ZEV Social Network",
          "url": "https://www.zevapp.com",
          "applicationCategory": "SocialNetworkingApplication",
          "operatingSystem": "iOS, Android, Web",
          "description": "Next-generation 60fps vertical reels social media platform with on-device biometric privacy and diaspora connectivity."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "SoftwareApplication",
          "name": "Safi AI Platform",
          "url": "https://safiai.site",
          "applicationCategory": "BusinessApplication",
          "description": "Agentic corporate AI assistant, brand representation engine, and automated multilingual customer ecosystem."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "FinancialService",
          "name": "SafiPay NeoBanking",
          "url": "https://safipay.net",
          "description": "Cross-border digital banking providing multi-currency accounts and instant international Visa cards."
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Organization",
          "name": "Safi TopUp Network",
          "url": "https://safitopup.site",
          "description": "Global telecom airtime and mobile data network connecting 700+ mobile operators across 150+ nations."
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "EducationalOrganization",
          "name": "Safi Academy",
          "url": "https://safiacademy.org",
          "description": "Global tech, coding, and algorithmic finance academy providing verified digital diplomas."
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Organization",
          "name": "SafiPro International",
          "url": "https://safipro.site",
          "description": "Enterprise software licensing, developer tools distribution, and digital lifestyle commerce."
        }
      }
    ]
  };

  const verticals = [
    {
      id: 'zev',
      name: 'ZEV Social Network',
      category: 'Social Media & 60fps Video',
      badge: 'CONSUMER SOCIAL',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      logo: '/zev.png',
      url: 'https://www.zevapp.com',
      stats: '60 FPS Reels • 50+ Nations • Flutter Native',
      desc: 'ZEV represents our consumer social flagship, engineered with hardware-accelerated 60fps vertical reels, on-device biometric Secure Enclave privacy, and direct creator monetization rails connected to SafiPay.',
      specs: [
        'Hardware-accelerated 60fps Reels engine',
        'Direct creator payouts via SafiPay Visa rails',
        'Unified single database with Safi Academy',
        'Zero-trust cryptographic data protection'
      ],
      glow: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      borderColor: 'hover:border-cyan-400/50'
    },
    {
      id: 'safiai',
      name: 'Safi AI Platform',
      category: 'Artificial Intelligence & Neural Voice',
      badge: 'NEURAL AI',
      badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
      logo: '/SafiAi.png',
      url: 'https://safiai.site',
      stats: 'Neural Core • Brand Voice • Agentic Ops',
      desc: 'Safi AI is the official corporate spokesperson and automated intelligence layer of the holding. Powered by multimodal neural architectures, it handles automated brand representation, multilingual user support, and autonomous operational execution.',
      specs: [
        'Autonomous customer interaction agent',
        'Multilingual natural language reasoning',
        'Direct API integration across all holding apps',
        'Real-time financial verification routines'
      ],
      glow: 'from-purple-500/20 via-fuchsia-500/10 to-transparent',
      borderColor: 'hover:border-purple-400/50'
    },
    {
      id: 'safipay',
      name: 'SafiPay NeoBanking',
      category: 'Cross-Border Digital Banking & Visa',
      badge: 'FINTECH',
      badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      logo: '/safipay.png',
      url: 'https://safipay.net',
      stats: 'Multi-Currency IBANs • Instant Visa Cards',
      desc: 'Our flagship financial technology subsidiary, SafiPay provides modern cross-border financial rails. Users and businesses can create multi-currency accounts (USD, EUR, GBP) and issue instant virtual and physical Visa cards with institutional security.',
      specs: [
        'Direct Visa & Mastercard issuing architecture',
        'Multi-currency treasury management (USD, EUR, GBP)',
        'Zero-latency remittance and P2P transfers',
        'Bank-grade PCI-DSS compliant infrastructure'
      ],
      glow: 'from-amber-500/20 via-yellow-500/10 to-transparent',
      borderColor: 'hover:border-amber-400/50'
    },
    {
      id: 'safitopup',
      name: 'Safi TopUp Network',
      category: 'Global Telecom Airtime & Utilities',
      badge: 'TELECOM',
      badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      logo: '/safitopup.png',
      url: 'https://safitopup.site',
      stats: '700+ Operators • 150+ Countries • 99.99% Uptime',
      desc: 'Safi TopUp links communities across the globe by providing instant mobile top-ups, international data bundles, and utility bill settlements connected to over 700 mobile carriers worldwide.',
      specs: [
        'Integration with 700+ global telecom carriers',
        'Sub-second automated airtime fulfillment',
        'International digital gift cards & vouchers',
        'Wholesale B2B enterprise telecom APIs'
      ],
      glow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderColor: 'hover:border-emerald-400/50'
    },
    {
      id: 'safipro',
      name: 'SafiPro International',
      category: 'Software Licensing & Digital Lifestyle',
      badge: 'COMMERCE',
      badgeColor: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
      logo: '/safipro.png',
      url: 'https://safipro.site',
      stats: 'Developer Tools • Enterprise Licensing • Global Supply',
      desc: 'SafiPro orchestrates commercial digital product distributions, developer utility licenses, verified enterprise accounts, and curated luxury branded merchandise with worldwide logistics fulfillment.',
      specs: [
        'Instant digital license provisioning',
        'Verified enterprise developer accounts',
        'Secure multi-tier commerce gateway',
        'Global logistics & physical merchandise supply'
      ],
      glow: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      borderColor: 'hover:border-blue-400/50'
    },
    {
      id: 'safiacademy',
      name: 'Safi Academy',
      category: 'Technology & Algorithmic Finance Education',
      badge: 'EDUCATION',
      badgeColor: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
      logo: '/safi-academy.png',
      url: 'https://safiacademy.org',
      stats: 'Unified Database • Digital Diplomas • Coding & Trading',
      desc: 'The educational pillar of our group, Safi Academy prepares the next generation of engineers and traders with cutting-edge curricula in computer science, algorithmic trading, and quantitative finance. Built with single sign-on synchronization with ZEV.',
      specs: [
        'Verified cryptographic digital diplomas',
        'Rigorous IT, Python & algorithmic trading curricula',
        'Seamless single sign-on with ZEV accounts',
        'Live mentorship with senior industry architects'
      ],
      glow: 'from-yellow-500/20 via-amber-500/10 to-transparent',
      borderColor: 'hover:border-yellow-400/50'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="w-full flex flex-col items-center bg-[#030305] text-[#F0F0F5] relative overflow-hidden py-14 sm:py-20">
        
        {/* Ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-[#D4AF37]/10 blur-[170px] pointer-events-none" />
        <div className="absolute top-[900px] left-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[180px] pointer-events-none" />

        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4 space-y-16 relative z-10">

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#8E8EA0] uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-[#D4AF37] font-semibold">Portfolio & Ecosystem</span>
          </div>

          {/* Page Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/25">
              <Layers className="w-4 h-4" />
              Institutional Venture Holdings
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              THE SAFI VENTURE <span className="text-gold-gradient font-black">PORTFOLIO</span>
            </h1>
            <p className="text-base sm:text-xl text-[#A5A5B8] leading-relaxed">
              Six transformative digital and financial infrastructures incubated, steered, and capitalized by Safi International Capital LTD (London, UK #17063286).
            </p>
          </div>

          {/* AEO / GEO Entity Summary Box */}
          <section aria-labelledby="portfolio-summary" className="rounded-3xl p-6 sm:p-8 bg-black/60 border border-[#D4AF37]/35 shadow-inner max-w-5xl mx-auto">
            <h2 id="portfolio-summary" className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              Holding Portfolio Architecture & Link Equity Distribution (AEO / GEO Verified)
            </h2>
            <p className="text-sm sm:text-base text-[#D0D0E2] leading-relaxed">
              <strong>Safi International Capital LTD</strong> directs six primary digital entities: <strong>ZEV</strong> (social network), <strong>Safi AI</strong> (neural intelligence), <strong>SafiPay</strong> (digital banking and Visa issuance), <strong>Safi TopUp</strong> (global telecom airtime), <strong>SafiPro</strong> (commercial licensing), and <strong>Safi Academy</strong> (technology education). All platforms operate with shared corporate compliance, unified security protocols, and strategic London holding governance.
            </p>
          </section>

          {/* Grid of 6 Verticals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verticals.map((vert) => (
              <div
                key={vert.id}
                className={`group relative rounded-[32px] p-8 bg-gradient-to-b from-[#0E0E18] to-[#040408] border border-white/10 ${vert.borderColor} shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.95)] transition-all duration-500 flex flex-col justify-between overflow-hidden`}
              >
                {/* Ambient glow */}
                <div className={`absolute top-0 inset-x-0 h-44 bg-gradient-to-b ${vert.glow} blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 space-y-5">
                  
                  {/* Top Bar: Logo & Badge */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-black border border-white/15 p-2 flex items-center justify-center shrink-0 shadow-lg group-hover:border-[#D4AF37]/50 transition duration-300">
                      <img src={vert.logo} alt={vert.name} className="w-full h-full object-contain" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${vert.badgeColor}`}>
                      {vert.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white group-hover:text-[#F9E79F] transition">
                      {vert.name}
                    </h3>
                    <p className="text-xs font-mono text-[#D4AF37] font-semibold">
                      {vert.stats}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#9898AC] leading-relaxed">
                    {vert.desc}
                  </p>

                  {/* Specs List */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {vert.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#B5B5C8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer Dofollow Action Link */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
                  <a
                    href={vert.url}
                    target="_blank"
                    rel="follow"
                    className="w-full py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#AA820A] shadow-[0_10px_25px_rgba(212,175,55,0.3)] hover:brightness-110 transition flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Launch {vert.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* Founder Connection Card */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-white/[0.04] via-[#090912] to-[#141006] border border-[#D4AF37]/35 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-lg shrink-0">
                <img src="/shaheen.jpeg" alt="Shaheen Safi" className="w-full h-full object-cover object-top" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                  The Visionary Behind the Ecosystem
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Founded by Shaheen Safi
                </h3>
                <p className="text-xs sm:text-sm text-[#9A9AA8]">
                  Software Architect, CFTe Technician (IFTA), and Founder of Safi International Capital LTD.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/about/shaheen-safi"
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#F9E79F] hover:bg-white transition flex items-center gap-2"
              >
                <span>Founder Biography</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://shaheensafi.blog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/[0.05] border border-white/20 hover:border-[#D4AF37] transition flex items-center gap-2"
              >
                <span>shaheensafi.blog</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
