'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  MapPin,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Globe2,
  Database,
  Users,
  Award,
  Video,
  CreditCard,
  Cpu,
  Radio,
  ShoppingBag,
  GraduationCap
} from 'lucide-react';

export default function AboutPage() {
  const leadership = [
    {
      name: 'Shaheen Safi',
      role: 'FOUNDER & DIRECTOR',
      titlePill: 'Director & Founder',
      image: '/safi.png',
      desc: 'The visionary architect and founder behind the Safi ecosystem, directing global corporate strategy, fintech innovation, and high-capital ecosystem expansion across Europe and Central Asia.',
      badge: 'Founder & Director',
      focus: 'Strategy • FinTech • Global M&A',
      blogLink: 'https://www.shaheensafi.blog',
      accentGlow: 'from-[#D4AF37]/25 via-amber-500/10 to-transparent',
      glowColor: 'rgba(212,175,55,0.25)',
      badgeStyle: 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-extrabold shadow-[0_4px_15px_rgba(212,175,55,0.4)]',
      borderHover: 'group-hover:border-[#D4AF37]'
    },
    {
      name: 'Sahel Salem',
      role: 'CEO & EUROPE RELATIONS',
      titlePill: 'Chief Executive Officer',
      image: '/sahel.jpeg',
      desc: 'Serving as Chief Executive Officer and managing European relations, directing strategic institutional partnerships, UK & EU capital alliances, and sovereign corporate governance protocols throughout European jurisdictions.',
      badge: 'CEO & Europe Relations',
      focus: 'Executive Leadership • EU Alliances',
      accentGlow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      glowColor: 'rgba(16,185,129,0.25)',
      badgeStyle: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-[0_4px_15px_rgba(16,185,129,0.3)]',
      borderHover: 'group-hover:border-emerald-400'
    },
    {
      name: 'Mujtaba Rahmani',
      role: 'CHIEF OPERATIONS OFFICER',
      titlePill: 'Operations Directorship',
      image: '/mujtaba.jpeg',
      desc: 'Directing international corporate execution, cross-border regulatory logistics, and multi-subsidiary operational scaling across all Safi holdings.',
      badge: 'Operations & Execution',
      focus: 'Cross-Border Rails • Compliance',
      accentGlow: 'from-blue-500/20 via-cyan-500/10 to-transparent',
      glowColor: 'rgba(59,130,246,0.25)',
      badgeStyle: 'bg-blue-500/15 text-blue-300 border border-blue-500/40 shadow-[0_4px_15px_rgba(59,130,246,0.3)]',
      borderHover: 'group-hover:border-blue-400'
    },
    {
      name: 'Shirin Gol Ahmadi',
      role: 'ALL ECOSYSTEM MANAGER',
      titlePill: 'Ecosystem Management',
      image: '/shirin.jpeg',
      desc: 'Directing and orchestrating unified operations across the entire Safi ecosystem, overseeing synergy between ZEV, SafiPay, Safi AI, Safi TopUp, SafiPro, and corporate operations.',
      badge: 'All Ecosystem Manager',
      focus: 'Ecosystem Ops • Systems Synergy',
      accentGlow: 'from-purple-500/20 via-fuchsia-500/10 to-transparent',
      glowColor: 'rgba(168,85,247,0.25)',
      badgeStyle: 'bg-purple-500/15 text-purple-300 border border-purple-500/40 shadow-[0_4px_15px_rgba(168,85,247,0.3)]',
      borderHover: 'group-hover:border-purple-400'
    },
    {
      name: 'Mobin Hassani',
      role: 'LEAD DEVELOPER & SOFTWARE ARCHITECT',
      titlePill: 'Core Development',
      image: '/mobin-hassani.jpg',
      desc: 'Directing core software engineering and scalable systems architecture, building high-resilience API infrastructures, and driving end-to-end technical development across the digital ecosystem.',
      badge: 'Lead Developer',
      focus: 'Architecture • Cloud & Security',
      accentGlow: 'from-cyan-500/20 via-sky-500/10 to-transparent',
      glowColor: 'rgba(6,182,212,0.25)',
      badgeStyle: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-[0_4px_15px_rgba(6,182,212,0.3)]',
      borderHover: 'group-hover:border-cyan-400'
    },
  ];

  const subsidiaries = [
    {
      name: 'ZEV Social Network',
      tagline: 'Next-Generation Social Media & 60fps Media Hub',
      logo: '/zev.png',
      desc: 'ZEV is a next-generation consumer social network engineered with Flutter, 60fps video acceleration, and bank-grade privacy with local biometric Secure Enclave protection. Uniquely bridges the global Afghan diaspora across 50+ countries while sharing a unified single database with Safi Academy and direct creator payouts through SafiPay.',
      specs: ['60FPS High-Speed Reels', 'Unified SSO with Safi Academy', 'SafiPay Instant Visa Monetization', 'Global & Homeland Feeds'],
      link: 'https://www.zevapp.com',
      isExternal: true
    },
    {
      name: 'Safi AI Platform',
      tagline: 'Intelligent Brand Voice & Agentic Neural Networks',
      logo: '/SafiAi.png',
      desc: 'Safi AI acts as the Chief AI Assistant and official corporate spokesperson of the Safi holding. Built on state-of-the-art neural architectures, it automates customer interactions, enforces community trust and safety across ZEV, and represents the brand internationally.',
      specs: ['Automated Multilingual Moderation', 'Real-Time Financial Inquiries', 'Agentic Workflow Orchestration'],
      link: 'https://safiai.site',
      isExternal: true
    },
    {
      name: 'SafiPay NeoBanking',
      tagline: 'Cross-Border Digital Banking & Instant Visa Issuance',
      logo: '/safipay.png',
      desc: 'SafiPay is our flagship fintech division delivering multi-currency IBANs (USD, EUR, GBP) and instant virtual and physical Visa cards. Enables borderless capital transfers for businesses and frictionless creator royalties for ZEV creators.',
      specs: ['Multi-Currency Accounts', 'Direct Visa & Mastercard Issuance', 'Global Remittance Rails'],
      link: 'https://www.safipay.net',
      isExternal: true
    },
    {
      name: 'Safi TopUp Network',
      tagline: 'Global Telecom Credit & Airtime Distribution',
      logo: '/safitopup.png',
      desc: 'Connecting millions worldwide by facilitating instant mobile top-ups, high-speed data bundles, and utility payments across 700+ mobile network operators in over 150 countries with 99.99% uptime.',
      specs: ['700+ Global Mobile Operators', 'Instant Credit Delivery', 'International Gift Cards & Utilities'],
      link: 'https://www.safitopup.site',
      isExternal: true
    },
    {
      name: 'SafiPro International',
      tagline: 'Professional Software Licensing & Luxury Lifestyle',
      logo: '/safipro.png',
      desc: 'Managing commercial digital product licensing, verified developer utilities, enterprise software distribution, and luxury branded merchandise with international logistics.',
      specs: ['Enterprise Software Distribution', 'Developer License Verification', 'Global Logistics Supply Chain'],
      link: 'https://www.safipro.site',
      isExternal: true
    },
    {
      name: 'Safi Academy',
      tagline: 'Global Tech, Coding & Algorithmic Trading Certification',
      logo: '/safi-academy.png',
      desc: 'The educational cornerstone of the group, delivering rigorous curricula in software development, AI engineering, and financial market trading. Operates on a synchronized Supabase database cluster shared with ZEV for seamless cross-platform student verification.',
      specs: ['Professional IT & Trading Curricula', 'Unified Database Single Sign-On', 'Official Digital Diploma Verification'],
      link: 'https://www.safiacademy.org',
      isExternal: true
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#030305] text-[#F0F0F5] relative overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#D4AF37]/15 via-purple-900/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[1800px] left-0 w-[600px] h-[600px] bg-cyan-500/8 blur-[180px] pointer-events-none" />
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
              <ShieldCheck className="w-4 h-4" />
              <span>The Safi International Legacy & Governance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08]"
            >
              POWERING GLOBAL
              <br />
              <span className="text-gold-gradient font-black">EXCELLENCE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-[#A5A5B8] max-w-3xl mx-auto leading-relaxed"
            >
              Safi International Capital LTD is a high-impact technology and financial investment holding incorporated in the United Kingdom (Company No: <strong>17063286</strong>), stewarding transformative innovations across the globe.
            </motion.p>

          </div>
        </div>
      </section>

      {/* --- CORPORATE PROFILE & STATUTORY DETAILS --- */}
      <section className="relative z-10 w-full pb-20">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-white/[0.04] to-black/90 border border-[#D4AF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)] space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Institutional Framework & Governance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-[#B0B0C4] leading-relaxed">
              <p>
                Headquartered in the prestigious Shelton Street of London’s Covent Garden, Safi International Capital LTD serves as the strategic holding entity for our global enterprise. Registered under the statutory laws of England and Wales, the company adheres to strict standards of British corporate governance, UK GDPR compliance, and global AML/KYC anti-fraud frameworks.
              </p>
              <p>
                We do not merely invest capital; we architect holistic technological ecosystems. From our consumer social network <strong>ZEV</strong>, to borderless fintech with <strong>SafiPay</strong> and institutional tech education at <strong>Safi Academy</strong>, our portfolio eliminates artificial barriers and empowers users worldwide with authentic financial and digital autonomy.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="text-xs text-[#8E8EA0] block">Jurisdiction</span>
                <span className="text-sm font-bold text-white mt-1 block">England & Wales</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="text-xs text-[#8E8EA0] block">Registration No.</span>
                <span className="text-sm font-bold text-[#F9E79F] font-mono mt-1 block">17063286</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="text-xs text-[#8E8EA0] block">Industry SIC Code</span>
                <span className="text-sm font-bold text-[#F9E79F] font-mono mt-1 block">66190</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <span className="text-xs text-[#8E8EA0] block">London Headquarters</span>
                <span className="text-sm font-bold text-white mt-1 block">Covent Garden</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP & BOARD OF DIRECTORS --- */}
      <section id="leadership" className="relative z-10 w-full py-20 border-t border-white/5">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">
              Executive Governance
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Board of Directors & Management
            </h2>
            <p className="text-sm sm:text-base text-[#9494A8]">
              Meet the visionary architects leading global strategy, engineering, operations, and cross-border partnerships.
            </p>
          </div>

          {/* Unified 5-Column High-Aesthetic Executive Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-7">
            {leadership.map((exec) => (
              <div
                key={exec.name}
                className="group relative rounded-[32px] p-6 sm:p-7 bg-gradient-to-b from-[#11111E]/90 via-[#0A0A14]/95 to-[#030307] border border-white/10 hover:border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.2)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Ambient radial color aura behind portrait */}
                <div className={`absolute top-0 inset-x-0 h-44 bg-gradient-to-b ${exec.accentGlow} blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Top glowing edge shimmer */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Upper title pill / Governance tag */}
                <div className="relative z-10 mb-5 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/25">
                    <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                    {exec.titlePill}
                  </span>
                </div>

                {/* Portrait container with glowing rim */}
                <div className="relative z-10 mb-5">
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 p-1 rounded-[30px] bg-gradient-to-b from-white/20 via-white/5 to-transparent group-hover:from-[#D4AF37] group-hover:to-[#D4AF37]/40 shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-all duration-500">
                    <div className="w-full h-full rounded-[28px] overflow-hidden bg-black/60 relative">
                      <img
                        src={exec.image}
                        alt={exec.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      {/* Subtle bottom vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Floating badge across portrait bottom */}
                  <span className={`absolute -bottom-2.5 inset-x-0 mx-auto w-fit px-3 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-extrabold ${exec.badgeStyle}`}>
                    {exec.badge}
                  </span>
                </div>

                {/* Identity & Role */}
                <div className="relative z-10 space-y-1 mb-2.5">
                  <h3 className="text-xl sm:text-[22px] font-black text-white group-hover:text-[#FDF8E1] transition-colors duration-300">
                    {exec.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-[#D4AF37] leading-snug">
                    {exec.role}
                  </p>
                </div>

                {/* Key Competency / Focus Tag */}
                <div className="relative z-10 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[9.5px] font-mono text-[#A8A8C0] bg-white/[0.03] border border-white/5">
                    {exec.focus}
                  </span>
                </div>

                {/* Bio Description */}
                <p className="relative z-10 text-xs sm:text-[12.5px] text-[#9898AC] leading-relaxed mb-5">
                  {exec.desc}
                </p>

                {/* Card Footer CTA */}
                <div className="relative z-10 mt-auto pt-4 border-t border-white/5 w-full flex items-center justify-center">
                  {exec.blogLink ? (
                    <a
                      href={exec.blogLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] hover:brightness-110 shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Founder's Official Blog</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#C5C5D8] bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 transition flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Executive Desk Routing</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-1 transition" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DETAILED BREAKDOWN OF ALL SUBSIDIARIES (FEATURING ZEV & PROJECTS) --- */}
      <section className="relative z-10 w-full py-20 border-t border-white/5">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">
              Ecosystem Entities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Our Global Subsidiaries & Projects
            </h2>
            <p className="text-sm sm:text-base text-[#9494A8]">
              Every division functions as an autonomous powerhouse unified under the technological and capital governance of Safi International Capital LTD.
            </p>
          </div>

          <div className="space-y-6">
            {subsidiaries.map((sub) => (
              <div
                key={sub.name}
                className="rounded-3xl p-6 sm:p-9 bg-gradient-to-r from-white/[0.04] to-black/90 border border-white/10 hover:border-[#D4AF37]/40 transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                  {/* Logo & Headline */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-black border border-white/15 p-2 shadow-lg shrink-0">
                        <img src={sub.logo} alt={sub.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-white">{sub.name}</h3>
                        <p className="text-xs text-[#D4AF37] font-semibold">{sub.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description & Specs */}
                  <div className="lg:col-span-5 space-y-3">
                    <p className="text-xs sm:text-sm text-[#B0B0C4] leading-relaxed">
                      {sub.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {sub.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#A0A0B5]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-3 flex flex-col gap-2.5">
                    <a
                      href={sub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center text-white bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition flex items-center justify-center gap-2"
                    >
                      <span>Visit {sub.name.split(' ')[0]} Portal</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION STATEMENT --- */}
      <section className="relative z-10 w-full py-20 text-center">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#101018] to-black border border-[#D4AF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] space-y-6">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">
              Our Unwavering Mission
            </span>
            <p className="text-xl sm:text-3xl text-white font-bold italic leading-relaxed max-w-4xl mx-auto">
              "To dissolve the artificial borders of the global economy through technological innovation, ensuring that every individual, regardless of their geography, possesses the digital and financial tools to achieve true independence."
            </p>
            <div className="pt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Shaheen Safi • Founder & Director
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}