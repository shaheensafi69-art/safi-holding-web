'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink, 
  Download, 
  FileText, 
  CheckCircle2, 
  Video, 
  CreditCard, 
  Cpu, 
  Radio, 
  ShoppingBag, 
  GraduationCap, 
  BookOpen,
  Smartphone,
  Layers,
  Database
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'ZEV Social Network',
      subtitle: 'Next-Gen 60fps Media & Social Tech',
      desc: 'High-speed 60fps vertical reels studio, homeland & diaspora feed connecting 50+ countries, bank-grade biometric privacy, and unified database synergy with Safi Academy.',
      features: [
        '60fps High-Fidelity Reels Studio with music sync',
        'Unified Single Sign-On with Safi Academy accounts',
        'Direct creator monetization payouts via SafiPay Visa',
        'Local Secure Enclave biometric & PIN lock protection'
      ],
      image: '/zev.png',
      badge: 'SOCIAL MEDIA',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      link: 'https://www.zevapp.com',
      isExternal: true
    },
    {
      title: 'Safi AI Platform',
      subtitle: 'Chief AI & Neural Intelligence',
      desc: 'Intelligent corporate voice and autonomous AI assistant. Deploys state-of-the-art neural models to power real-time moderation, automated trust & safety, and global brand communication.',
      features: [
        'Advanced Neural Network Architectures',
        'Automated Trust & Safety and Content Moderation',
        'Real-time Multilingual Customer Intelligence'
      ],
      image: '/SafiAi.png',
      badge: 'NEURAL AI',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      link: 'https://safiai.site',
      isExternal: true
    },
    {
      title: 'SafiPay NeoBanking',
      subtitle: 'Cross-Border Fintech Infrastructure',
      desc: 'Digital banking providing global multi-currency IBAN accounts (USD, EUR, GBP) and instant physical and virtual Visa card issuance for international settlements.',
      features: [
        'Multi-Currency Virtual & Physical Visa Cards',
        'Cross-Border SWIFT & SEPA Liquidity Rails',
        'Instant Monetization Payouts for ZEV Creators'
      ],
      image: '/safipay.png',
      badge: 'FINTECH',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      link: 'https://www.safipay.net',
      isExternal: true
    },
    {
      title: 'Safi TopUp Network',
      subtitle: 'Global Telecom Airtime & Gaming Credit',
      desc: 'Instant mobile credit, data top-up, and digital utility payments connecting over 700 mobile operators in 150+ countries with institutional reliability.',
      features: [
        'Instant Airtime & High-Speed Data Refills',
        '700+ Mobile Network Operators Worldwide',
        'International Digital Gift Cards & Gaming Vouchers'
      ],
      image: '/safitopup.png',
      badge: 'TELECOM',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      link: 'https://www.safitopup.site',
      isExternal: true
    },
    {
      title: 'SafiPro International',
      subtitle: 'Professional Software Licensing & Commerce',
      desc: 'Digital enterprise commerce, verified developer licenses, modern productivity suites, and luxury lifestyle apparel engineered with international craftsmanship.',
      features: [
        'Developer Software Licensing & Enterprise Tools',
        'Global E-Commerce Fulfillment & Supply Chain',
        'Luxury Apparel Design & International Logistics'
      ],
      image: '/safipro.png',
      badge: 'COMMERCE',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      link: 'https://www.safipro.site',
      isExternal: true
    },
    {
      title: 'Safi Academy',
      subtitle: 'Professional Tech & Financial Certification',
      desc: 'Premier educational ecosystem administering professional IT, algorithmic trading, software engineering, and AI certification curricula with unified database SSO.',
      features: [
        'Professional IT & Software Development Curricula',
        'Unified Supabase Cloud Database with ZEV',
        'Official Digitally Verified Course Diplomas'
      ],
      image: '/safi-academy.png',
      badge: 'EDUCATION',
      badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
      link: 'https://www.safiacademy.org',
      isExternal: true
    },
    {
      title: 'Shaheen Safi Technical Blog',
      subtitle: 'Founder Thought Leadership & Analysis',
      desc: 'In-depth articles, strategic frameworks, and technical analysis on global fintech, startup architecture, and digital transformation in emerging markets.',
      features: [
        'Step-by-Step Fintech & Development Tutorials',
        'Global Diaspora Economic Insights',
        'Strategic Directives from Founder & CEO Shaheen Safi'
      ],
      image: '/safi.png',
      badge: 'INSIGHTS',
      badgeColor: 'bg-white/10 text-white border-white/20',
      link: 'https://www.shaheensafi.blog',
      isExternal: true
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#030305] text-[#F0F0F5] relative overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-[#D4AF37]/15 via-blue-900/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-grid opacity-25 pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 w-full pt-16 pb-16 sm:pt-24 sm:pb-24 text-center">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]"
            >
              <Layers className="w-4 h-4" />
              <span>Integrated Global Verticals</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08]"
            >
              GLOBAL <span className="text-gold-gradient font-black">INFRASTRUCTURE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-[#A5A5B8] max-w-3xl mx-auto leading-relaxed"
            >
              Delivering excellence through our unified holding ecosystem spanning social networks (ZEV), artificial intelligence, fintech liquidity rails, global telecom networks, and certified education.
            </motion.p>

          </div>
        </div>
      </section>

      {/* --- CORPORATE DOWNLOAD VAULT --- */}
      <section className="relative z-10 w-full pb-16">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-white/[0.05] via-[#0A0A12] to-black border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Official Holding Documents
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Corporate Assets & Institutional Deck
            </h2>
            <p className="text-sm text-[#9E9EB0] max-w-2xl mx-auto">
              Review our official institutional documentation, regulatory status, and technological architecture.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="/downloads/pitch-deck.pdf"
                download
                className="px-6 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F9E79F] transition shadow-[0_8px_25px_rgba(212,175,55,0.35)] flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Pitch Deck (PDF)</span>
              </a>

              <a
                href="/downloads/company-profile.pdf"
                download
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 transition flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Company Profile (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES & PORTFOLIO GRID --- */}
      <section className="relative z-10 w-full pb-24">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((serv, idx) => (
              <motion.div
                key={serv.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-white/[0.04] to-black/95 border border-white/10 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_50px_rgba(212,175,55,0.18)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-black border border-white/15 p-2 flex items-center justify-center group-hover:scale-105 transition">
                      <img src={serv.image} alt={serv.title} className="w-full h-full object-contain" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border ${serv.badgeColor}`}>
                      {serv.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#F9E79F] transition">
                      {serv.title}
                    </h3>
                    <p className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase mt-1">
                      {serv.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A0A0B5] leading-relaxed">
                    {serv.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {serv.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#C5C5D5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Link */}
                <div className="pt-6 border-t border-white/5 mt-6">
                  <a
                    href={serv.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center text-white bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition flex items-center justify-center gap-2"
                  >
                    <span>Visit {serv.title.split(' ')[0]} Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </a>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}