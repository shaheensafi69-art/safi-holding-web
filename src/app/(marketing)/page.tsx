'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink, 
  Globe2, 
  Database, 
  CreditCard, 
  Radio, 
  ShoppingBag, 
  GraduationCap, 
  Cpu, 
  Smartphone,
  Video,
  Lock,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Layers,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  const ecosystemVentures = [
    {
      id: 'zev',
      name: 'ZEV',
      category: 'Next-Gen Social Network',
      tagline: 'High-speed 60fps vertical reels, authentic community, on-device biometric privacy, and unified database with Safi Academy.',
      badge: 'SOCIAL MEDIA',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      logo: '/zev.png',
      link: 'https://www.zevapp.com',
      isExternal: true,
      buttonText: 'VISIT ZEVAPP.COM',
      stats: '60 FPS Reels • 50+ Nations',
      highlightBorder: 'hover:border-cyan-400/50 hover:shadow-[0_20px_45px_rgba(0,240,255,0.2)]',
      accentGlow: 'from-cyan-500/15 via-blue-500/10 to-transparent'
    },
    {
      id: 'safiai',
      name: 'Safi AI',
      category: 'Artificial Intelligence & Neural Voice',
      tagline: 'The Chief AI Assistant and official spokesperson of the Safi Ecosystem, executing intelligent corporate brand representation.',
      badge: 'NEURAL AI',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      logo: '/SafiAi.png',
      link: 'https://safiai.site',
      isExternal: true,
      buttonText: 'LAUNCH SAFIAI.SITE',
      stats: 'Neural Core • Brand Voice',
      highlightBorder: 'hover:border-purple-400/50 hover:shadow-[0_20px_45px_rgba(168,85,247,0.2)]',
      accentGlow: 'from-purple-500/15 via-pink-500/10 to-transparent'
    },
    {
      id: 'safipay',
      name: 'SafiPay',
      category: 'Global NeoBanking & FinTech',
      tagline: 'Advanced digital banking infrastructure providing multi-currency accounts and instant international Visa cards.',
      badge: 'FINTECH',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      logo: '/safipay.png',
      link: 'https://www.safipay.net',
      isExternal: true,
      buttonText: 'ENTER SAFIPAY.NET',
      stats: 'Multi-Currency • Visa Cards',
      highlightBorder: 'hover:border-amber-400/50 hover:shadow-[0_20px_45px_rgba(245,158,11,0.2)]',
      accentGlow: 'from-amber-500/15 via-yellow-500/10 to-transparent'
    },
    {
      id: 'safitopup',
      name: 'Safi TopUp',
      category: 'Global Telecom Network',
      tagline: 'Instant mobile credit, data transfers, and gaming top-ups across 700+ operators in over 150 countries worldwide.',
      badge: 'TELECOM',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      logo: '/safitopup.png',
      link: 'https://www.safitopup.site',
      isExternal: true,
      buttonText: 'VISIT SAFITOPUP.SITE',
      stats: '700+ Telcos • 150+ Countries',
      highlightBorder: 'hover:border-emerald-400/50 hover:shadow-[0_20px_45px_rgba(16,185,129,0.2)]',
      accentGlow: 'from-emerald-500/15 via-teal-500/10 to-transparent'
    },
    {
      id: 'safipro',
      name: 'SafiPro',
      category: 'Commerce & Enterprise Licensing',
      tagline: 'High-end international software licensing, developer tools, verified accounts, and lifestyle e-commerce.',
      badge: 'COMMERCE',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      logo: '/safipro.png',
      link: 'https://www.safipro.site',
      isExternal: true,
      buttonText: 'SHOP SAFIPRO.SITE',
      stats: 'Global Supply • Developer Tools',
      highlightBorder: 'hover:border-blue-400/50 hover:shadow-[0_20px_45px_rgba(59,130,246,0.2)]',
      accentGlow: 'from-blue-500/15 via-indigo-500/10 to-transparent'
    },
    {
      id: 'safiacademy',
      name: 'Safi Academy',
      category: 'Tech & Financial Education',
      tagline: 'Premier global educational ecosystem delivering IT, algorithmic trading, and software engineering certification with unified database.',
      badge: 'EDUCATION',
      badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
      logo: '/safi-academy.png',
      link: 'https://www.safiacademy.org',
      isExternal: true,
      buttonText: 'VISIT SAFIACADEMY.ORG',
      stats: 'Unified DB • Official Diplomas',
      highlightBorder: 'hover:border-yellow-400/50 hover:shadow-[0_20px_45px_rgba(234,179,8,0.2)]',
      accentGlow: 'from-yellow-500/15 via-amber-500/10 to-transparent'
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#030305] text-[#F0F0F5] relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-gradient-to-b from-[#D4AF37]/15 via-purple-900/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[1200px] right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-grid opacity-25 pointer-events-none" />

      {/* ========================================================
          1. HERO SECTION: MAJESTIC BRITISH HOLDING & VENTURES
         ======================================================== */}
      <section className="relative z-10 w-full min-h-[85vh] flex flex-col justify-center items-center py-16 sm:py-24">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4 text-center space-y-7">
          
          {/* Corporate Verification Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-[#D4AF37]/35 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#E5E5EB] uppercase">
              Incorporated in England & Wales • Company No: <strong className="text-[#F9E79F] font-mono">17063286</strong>
            </span>
          </motion.div>

          {/* Master Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="block text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-[#D4AF37]">
              Premier Global Investment & Technology Holding
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
              SAFI INTERNATIONAL
              <br />
              <span className="text-gold-gradient font-black">CAPITAL LTD</span>
            </h1>
          </motion.div>

          {/* Corporate Manifesto Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-[#A5A5B8] max-w-4xl mx-auto leading-relaxed"
          >
            A premier global investment and technology holding company stewarding transformative digital infrastructures across fintech, consumer social networks, artificial intelligence, telecommunications, and digital academies.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <a
              href="#ecosystem"
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-black bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#AA820A] shadow-[0_10px_35px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore The Ecosystem</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/about"
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white bg-white/[0.04] border border-white/20 hover:border-[#D4AF37] hover:text-[#F9E79F] transition duration-300 flex items-center gap-2"
            >
              <span>Corporate Overview</span>
            </Link>
          </motion.div>

          {/* Scale & Institutional Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-black text-[#F9E79F]">6 Global Entities</div>
              <div className="text-[11px] sm:text-xs text-[#8E8EA0] uppercase tracking-wider font-semibold mt-1">
                Integrated Portfolio
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">ZEV 60FPS</div>
              <div className="text-[11px] sm:text-xs text-[#8E8EA0] uppercase tracking-wider font-semibold mt-1">
                Social Technology
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">150+ Countries</div>
              <div className="text-[11px] sm:text-xs text-[#8E8EA0] uppercase tracking-wider font-semibold mt-1">
                Worldwide Reach
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-black text-[#D4AF37]">Covent Garden</div>
              <div className="text-[11px] sm:text-xs text-[#8E8EA0] uppercase tracking-wider font-semibold mt-1">
                London Headquarters
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================
          2. ECOSYSTEM PORTFOLIO: HERE IS WHERE ZEV & OTHER PROJECTS ARE
         ======================================================== */}
      <section id="ecosystem" className="relative z-10 w-full py-20 border-t border-white/[0.06]">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-black uppercase tracking-[0.26em] text-[#D4AF37]">
              Global Infrastructure Directory
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              The Safi Ecosystem & Projects
            </h2>
            <p className="text-sm sm:text-base text-[#9494A8]">
              Explore our elite portfolio of advanced tech, social networking, fintech, telecommunications, and certified education.
            </p>
          </div>

          {/* 6-Card Grid: ZEV, Safi AI, SafiPay, Safi TopUp, SafiPro, Safi Academy */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ecosystemVentures.map((venture, idx) => (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`group rounded-3xl p-1 bg-gradient-to-b ${venture.accentGlow} border border-white/10 ${venture.highlightBorder} transition-all duration-500 flex flex-col justify-between`}
              >
                <div className="rounded-[22px] bg-[#0A0A10]/95 backdrop-blur-2xl p-7 sm:p-8 h-full flex flex-col justify-between space-y-6">
                  
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-black/70 border border-white/10 p-2.5 flex items-center justify-center group-hover:scale-105 group-hover:border-white/30 transition duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
                        <img 
                          src={venture.logo} 
                          alt={venture.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border ${venture.badgeColor}`}>
                        {venture.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                        {venture.category}
                      </span>
                      <h3 className="text-2xl font-black text-white group-hover:text-[#F9E79F] transition">
                        {venture.name}
                      </h3>
                    </div>

                    <p className="text-sm text-[#A0A0B5] mt-3 leading-relaxed">
                      {venture.tagline}
                    </p>
                  </div>

                  {/* Bottom Stats & Link */}
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#8E8EA0] font-mono">
                      <span>{venture.stats}</span>
                    </div>

                    <a
                      href={venture.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 group-hover:border-[#D4AF37]/50 group-hover:text-[#F9E79F] transition duration-300 flex items-center justify-center gap-2"
                    >
                      <span>{venture.buttonText}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          3. SYNERGY SECTION: THE UNIFIED HOLDING ARCHITECTURE
         ======================================================== */}
      <section className="relative z-10 w-full py-16">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-[#0B0D16] via-[#05060A] to-[#120F06] border border-[#D4AF37]/25 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                Unified Holding Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Seamless Ecosystem Synergy
              </h2>
              <p className="text-sm sm:text-base text-[#A5A5B8]">
                All entities under Safi International Capital operate with mutual interoperability — shared databases, instant financial rails, and AI-driven trust.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#F9E79F]">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Unified Identity & SSO</h3>
                <p className="text-xs sm:text-sm text-[#9494A8] leading-relaxed">
                  ZEV and Safi Academy operate on a synchronized, enterprise Supabase cloud cluster. Students can log in to ZEV with their exact educational credentials and display verified badges.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">SafiPay Liquidity Rails</h3>
                <p className="text-xs sm:text-sm text-[#9494A8] leading-relaxed">
                  Creators earning from ZEV reels and instructors at Safi Academy receive seamless, instant multi-currency payouts via SafiPay with virtual and physical Visa cards.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-400/40 flex items-center justify-center text-purple-300">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Safi AI Autonomous Moderation</h3>
                <p className="text-xs sm:text-sm text-[#9494A8] leading-relaxed">
                  Advanced neural intelligence protects the entire ecosystem, enforcing automated CSAM interception, anti-fraud algorithms, and multi-lingual customer support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. FOUNDER & LEADERSHIP SECTION: SHAHEEN SAFI
         ======================================================== */}
      <section className="relative z-10 w-full py-20 border-t border-white/[0.06]">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">
                Visionary Leadership & Founder
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                SHAHEEN <span className="text-gold-gradient font-black">SAFI</span>
              </h2>
              <p className="text-lg text-[#F9E79F] font-semibold italic">
                "Driving financial independence, high-speed social connectivity, and digital innovation for the global Afghan diaspora and emerging economies."
              </p>
              <p className="text-sm sm:text-base text-[#9E9EB0] leading-relaxed">
                As Founder & Chief Executive Officer of Safi International Capital LTD, Shaheen Safi leads the strategic design of borderless digital architectures. Under his guidance, the group has developed cutting-edge applications in social technology (ZEV), fintech banking (SafiPay), and global education (Safi Academy).
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="https://www.shaheensafi.blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F9E79F] transition shadow-[0_8px_25px_rgba(212,175,55,0.35)] flex items-center gap-2"
                >
                  <span>Read Founder's Blog</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/about"
                  className="px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/5 border border-white/15 hover:border-[#D4AF37] hover:text-[#F9E79F] transition flex items-center gap-2"
                >
                  <span>Meet Executive Board</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Portrait Photo with 3D Luxury Framing */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-3 w-full max-w-md">
                
                {/* Outer decorative gold frame */}
                <div className="absolute inset-0 rounded-3xl border-2 border-[#D4AF37]/50 -rotate-2 shadow-[0_0_40px_rgba(212,175,55,0.25)] pointer-events-none" />
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-black border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
                  <img
                    src="/safi.png"
                    alt="Shaheen Safi - Founder & CEO"
                    className="w-full h-auto object-cover scale-[1.01] hover:scale-105 transition duration-700"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <h3 className="text-lg font-black text-white">Shaheen Safi</h3>
                    <p className="text-xs text-[#D4AF37] font-mono uppercase tracking-wider">
                      Founder & CEO • Safi International Capital LTD
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          5. INSTITUTIONAL INQUIRY & LONDON HQ CTA
         ======================================================== */}
      <section className="relative z-10 w-full py-16 text-center">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-white/[0.04] to-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
              Institutional & Corporate Relations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Partner With Safi Capital
            </h2>
            <p className="text-sm sm:text-base text-[#9E9EB0] max-w-xl mx-auto leading-relaxed">
              Headquartered in London's Covent Garden, our corporate desk welcomes strategic partnerships, institutional investors, and digital collaborations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#F9E79F] transition shadow-[0_8px_30px_rgba(212,175,55,0.4)]"
              >
                Contact Corporate Desk
              </Link>
              <a
                href="https://wa.me/447476620282"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition"
              >
                Direct WhatsApp Desk
              </a>
            </div>

            <div className="pt-4 text-xs text-[#6F6F80] font-mono">
              71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}