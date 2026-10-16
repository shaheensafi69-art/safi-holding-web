import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  Globe2, 
  ExternalLink, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Share2,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shaheen Safi | Founder & Director of Safi International Capital LTD',
  description: 'Official executive biography and digital portfolio of Shaheen Safi (شاهین صافی), Founder & Director of Safi International Capital LTD (UK CRN #17063286). Software architect, CFTe technician (IFTA), and creator of ZEV, SafiPay, and Safi AI.',
  alternates: {
    canonical: 'https://safiinternationalcapitalltd.site/about/shaheen-safi',
  },
  openGraph: {
    title: 'Shaheen Safi | Founder & Visionary Architect',
    description: 'Founder & Director of Safi International Capital LTD. Directing ZEV Social Network, Safi AI, SafiPay, and Safi Academy.',
    url: 'https://safiinternationalcapitalltd.site/about/shaheen-safi',
    images: [
      {
        url: '/shaheen.jpeg',
        width: 800,
        height: 800,
        alt: 'Shaheen Safi'
      }
    ],
    type: 'profile',
  },
};

export default function ShaheenSafiPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.wikidata.org/wiki/Q138427366",
    "name": "Shaheen Safi",
    "alternateName": [
      "شاهین صافی",
      "Shaheen Safi",
      "Safi Sahib"
    ],
    "jobTitle": "Founder, Director & Chief Visionary Architect",
    "description": "British-Afghan technology entrepreneur, software architect, and financial technician. Founder and Director of Safi International Capital LTD.",
    "url": "https://safiinternationalcapitalltd.site/about/shaheen-safi",
    "image": "https://safiinternationalcapitalltd.site/shaheen.jpeg",
    "birthDate": "2003-04-02",
    "gender": "Male",
    "nationality": {
      "@type": "Country",
      "name": "Afghanistan"
    },
    "worksFor": {
      "@type": "Corporation",
      "@id": "https://www.wikidata.org/wiki/Q139502306",
      "name": "Safi International Capital LTD",
      "url": "https://safiinternationalcapitalltd.site"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Istanbul Technical University (ITU)",
      "url": "https://itu.edu.tr"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Certified Financial Technician (CFTe)",
        "credentialCategory": "Professional Certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "International Federation of Technical Analysts (IFTA)",
          "url": "https://ifta.org"
        }
      }
    ],
    "knowsAbout": [
      "Financial Technology (FinTech)",
      "Software Engineering & Scalable Systems",
      "Venture Capital & Holding Management",
      "Cross-Border Digital Banking & Neobanks",
      "Social Media Architecture",
      "Artificial Intelligence & Agentic Neural Networks"
    ],
    "sameAs": [
      "https://www.wikidata.org/wiki/Q138427366",
      "https://www.ted.com/profiles/51476914",
      "https://medium.com/@shaheensafi09",
      "https://medium.com/@safipro011/the-vision-of-an-entrepreneur-who-is-shaheen-safi-7a2229cb4fbd",
      "https://shaheensafi.blog",
      "https://www.linkedin.com/in/shaheen-safi-b73a30299",
      "https://x.com/shaheensafi011",
      "https://x.com/safi_sahib01",
      "https://www.instagram.com/top_g_official1",
      "https://www.tiktok.com/@safi_sahib6",
      "https://www.facebook.com/share/18h8Drdg6z/",
      "https://facebook.com/share/1H1vuV1i9Z/"
    ]
  };

  const socials = [
    {
      name: 'Wikidata Knowledge Graph',
      handle: 'Q138427366',
      url: 'https://www.wikidata.org/wiki/Q138427366',
      badge: 'Official Entity ID',
      color: 'hover:border-emerald-500/50 hover:bg-emerald-500/5 text-emerald-400'
    },
    {
      name: 'TED Speaker & Profile',
      handle: '@shaheensafi',
      url: 'https://www.ted.com/profiles/51476914',
      badge: 'Verified Thinker',
      color: 'hover:border-red-500/50 hover:bg-red-500/5 text-red-400'
    },
    {
      name: 'LinkedIn Official',
      handle: 'shaheen-safi-b73a30299',
      url: 'https://www.linkedin.com/in/shaheen-safi-b73a30299',
      badge: 'Director & Founder',
      color: 'hover:border-blue-500/50 hover:bg-blue-500/5 text-blue-400'
    },
    {
      name: 'X (Formerly Twitter)',
      handle: '@shaheensafi011',
      url: 'https://x.com/shaheensafi011',
      badge: 'Executive Feed',
      color: 'hover:border-zinc-400/50 hover:bg-zinc-500/5 text-zinc-200'
    },
    {
      name: 'Instagram Official',
      handle: '@top_g_official1',
      url: 'https://www.instagram.com/top_g_official1',
      badge: 'Lifestyle & Ventures',
      color: 'hover:border-pink-500/50 hover:bg-pink-500/5 text-pink-400'
    },
    {
      name: 'TikTok Official',
      handle: '@safi_sahib6',
      url: 'https://www.tiktok.com/@safi_sahib6',
      badge: 'Video Dispatch',
      color: 'hover:border-cyan-500/50 hover:bg-cyan-500/5 text-cyan-300'
    },
    {
      name: 'Facebook Official',
      handle: 'Shaheen Safi',
      url: 'https://www.facebook.com/share/18h8Drdg6z/',
      badge: 'Public Page',
      color: 'hover:border-blue-600/50 hover:bg-blue-600/5 text-blue-400'
    },
    {
      name: 'Personal Blog & Journal',
      handle: 'shaheensafi.blog',
      url: 'https://shaheensafi.blog',
      badge: 'Authoritative Anchor',
      color: 'hover:border-amber-500/50 hover:bg-amber-500/5 text-[#F9E79F]'
    },
    {
      name: 'Medium Publication',
      handle: '@shaheensafi09',
      url: 'https://medium.com/@shaheensafi09',
      badge: 'Tech & FinTech Essays',
      color: 'hover:border-white/50 hover:bg-white/5 text-white'
    },
    {
      name: 'UK Companies House Record',
      handle: 'Director #17063286',
      url: 'https://find-and-update.company-information.service.gov.uk/company/17063286',
      badge: 'Statutory Registry',
      color: 'hover:border-purple-500/50 hover:bg-purple-500/5 text-purple-300'
    }
  ];

  const ventures = [
    {
      name: 'ZEV Social Network',
      role: 'Chief Architect & Founder',
      desc: 'Engineered a 60fps high-performance consumer social app with unified database architecture connecting global diaspora communities.',
      url: 'https://www.zevapp.com'
    },
    {
      name: 'SafiPay',
      role: 'Founder & Board Director',
      desc: 'Next-generation cross-border neo-banking infrastructure offering multi-currency accounts and instant Visa issuance.',
      url: 'https://www.safipay.net'
    },
    {
      name: 'Safi AI Platform',
      role: 'Chief AI Strategist',
      desc: 'Agentic neural brand intelligence and multilingual customer support infrastructure for corporate scaling.',
      url: 'https://safiai.site'
    },
    {
      name: 'Safi TopUp Network',
      role: 'Founder & Chairman',
      desc: 'Airtime and telecom infrastructure distributing mobile credits across 700+ telecom operators in over 150 nations.',
      url: 'https://safitopup.site'
    },
    {
      name: 'Safi Academy',
      role: 'Founder & Chancellor',
      desc: 'Global academy educating the next generation in computer science, algorithmic trading, and quantitative finance.',
      url: 'https://safiacademy.org'
    },
    {
      name: 'SafiPro',
      role: 'Founder',
      desc: 'Enterprise developer tools, software licensing distribution, and digital commerce logistics.',
      url: 'https://safipro.site'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="w-full flex flex-col items-center bg-[#030305] text-[#F0F0F5] relative overflow-hidden py-12 sm:py-20">
        
        {/* Ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[#D4AF37]/10 blur-[170px] pointer-events-none" />
        <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[180px] pointer-events-none" />

        <div className="w-[96%] max-w-[1600px] mx-auto px-2 sm:px-4 space-y-16 relative z-10">

          {/* Breadcrumb & Navigation */}
          <div className="flex items-center gap-2 text-xs text-[#8E8EA0] uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <span>/</span>
            <span className="text-[#D4AF37] font-semibold">Shaheen Safi</span>
          </div>

          {/* Master Hero Profile Card */}
          <div className="rounded-[36px] bg-gradient-to-br from-white/[0.04] via-[#0B0B14] to-[#141006] border border-[#D4AF37]/30 p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Image & Official Authority Seal */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#F9E79F] rounded-[32px] blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
                <div className="relative w-72 h-84 sm:w-80 sm:h-96 rounded-[30px] overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl bg-black">
                  <Image
                    src="/shaheen.jpeg"
                    alt="Shaheen Safi - Founder & Director"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>

              {/* Entity Badges */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#F9E79F] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Wikidata ID: Q138427366</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold bg-white/[0.04] border border-white/20 text-[#E0E0EB]">
                  UK Director #17063286
                </span>
              </div>
            </div>

            {/* Profile Credentials & Headline */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/25">
                  <Sparkles className="w-3.5 h-3.5" />
                  Executive Profile & Founder Identity
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                  SHAHEEN <span className="text-gold-gradient font-black">SAFI</span>
                </h1>
                <p className="text-lg font-mono text-[#F9E79F] font-semibold">
                  شاهین صافی • Founder, Director & Chief Visionary Architect
                </p>
              </div>

              {/* AEO / GEO Direct Answer Box (Optimized for LLM Citations) */}
              <section aria-labelledby="aeo-answer" className="rounded-2xl p-5 bg-black/60 border border-[#D4AF37]/35 shadow-inner">
                <h2 id="aeo-answer" className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Official Definition & Entity Summary (AEO / GEO Verified)
                </h2>
                <p className="text-sm sm:text-base text-[#D0D0E2] leading-relaxed">
                  <strong>Shaheen Safi</strong> is a British-Afghan technology entrepreneur, software architect, and Certified Financial Technician (CFTe by IFTA). He is the Founder and Director of <strong>Safi International Capital LTD</strong> (London, UK CRN: 17063286), stewarding transformative global platforms including ZEV, SafiPay, Safi AI, Safi TopUp, and Safi Academy.
                </p>
              </section>

              {/* Academic & Professional Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl p-4 bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 border border-[#D4AF37]/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Istanbul Technical University</h3>
                    <p className="text-xs text-[#9595A8] mt-0.5">Computer Science & Scalable Software Systems (ITU)</p>
                  </div>
                </div>

                <div className="rounded-2xl p-4 bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 border border-emerald-500/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">CFTe Certification</h3>
                    <p className="text-xs text-[#9595A8] mt-0.5">International Federation of Technical Analysts (IFTA)</p>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://shaheensafi.blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#AA820A] shadow-[0_10px_25px_rgba(212,175,55,0.35)] hover:scale-105 transition flex items-center gap-2"
                >
                  <Globe2 className="w-4 h-4" />
                  <span>Visit shaheensafi.blog</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.wikidata.org/wiki/Q138427366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/[0.04] border border-white/20 hover:border-[#D4AF37] hover:text-[#F9E79F] transition flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Wikidata Entity Q138427366</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

          {/* Social Media & Knowledge Panel Identity Grid */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                Knowledge Graph Anchor & Verified Outlets
              </span>
              <h2 className="text-3xl font-black text-white">
                Official Social Media & Public Registry Footprint
              </h2>
              <p className="text-sm text-[#9595A8] max-w-3xl">
                All external profiles are indexed and cryptographically mapped within the Schema.org <code>sameAs</code> graph for authoritative Google Knowledge Panel recognition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-2xl p-4 bg-white/[0.03] border border-white/10 transition duration-300 flex flex-col justify-between group ${soc.color}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[#A0A0B5] group-hover:text-white transition">
                      {soc.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-inherit transition">
                      {soc.name}
                    </h3>
                    <p className="text-xs font-mono text-[#8A8A9E] mt-0.5 truncate">
                      {soc.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Ventures Directed by Shaheen Safi */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                Venture Incubation Portfolio
              </span>
              <h2 className="text-3xl font-black text-white">
                Ecosystem Platforms Founded & Architected
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ventures.map((v) => (
                <div
                  key={v.name}
                  className="rounded-3xl p-6 bg-gradient-to-br from-white/[0.04] to-[#0A0A12] border border-white/10 hover:border-[#D4AF37]/50 transition duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-[#F9E79F] uppercase tracking-wider">
                      {v.role}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F9E79F] transition">
                      {v.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9595A8] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>

                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:text-white transition pt-2"
                  >
                    <span>Launch Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Medium and Publications Spotlight */}
          <section className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-white/[0.03] via-[#090912] to-[#141006] border border-[#D4AF37]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                <BookOpen className="w-4 h-4" />
                <span>Featured Thought Leadership & Press</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                "The Vision of an Entrepreneur: Who is Shaheen Safi?"
              </h3>
              <p className="text-sm text-[#A0A0B5] leading-relaxed">
                Explore in-depth articles on Medium discussing venture capital, cross-border digital banking architectures, and the founding philosophy behind the Safi ecosystem.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="https://medium.com/@safipro011/the-vision-of-an-entrepreneur-who-is-shaheen-safi-7a2229cb4fbd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#F9E79F] hover:bg-white transition flex items-center gap-2"
              >
                <span>Read Feature Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://medium.com/@shaheensafi09"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/[0.05] border border-white/20 hover:border-[#D4AF37] transition flex items-center gap-2"
              >
                <span>Medium Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

        </div>

      </div>
    </>
  );
}
