'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Database, 
  CreditCard, 
  Video, 
  Globe2, 
  Lock, 
  ArrowRight, 
  ExternalLink,
  Zap,
  CheckCircle2,
  Users,
  Layers,
  Cpu,
  Share2
} from 'lucide-react';

export default function ZevPage() {
  const zevFeatures = [
    {
      icon: Video,
      title: 'High-Fidelity 60fps Reels Studio',
      description: 'Record and edit 60fps vertical reels with hardware-accelerated rendering, music synchronization, and smart topic categorization including Coding, Trading, Education, and Lifestyle.',
      highlight: '60 FPS Ultra-Smooth',
      color: 'from-cyan-500/20 to-blue-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: Globe2,
      title: 'Global & Homeland Feed',
      description: 'Bridging communities across Afghanistan and 50+ countries worldwide. Engage with family, friends, and trending diaspora creators in real time.',
      highlight: '50+ Countries Connected',
      color: 'from-purple-500/20 to-pink-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Lock,
      title: 'Bank-Grade Privacy & App Lock',
      description: 'Engineered with strict TLS 1.3 protocol encryption, local device biometric authentication (Apple Secure Enclave & Android Biometrics), and optional numeric PIN vaulting.',
      highlight: 'Biometric + PIN Lock',
      color: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      icon: Database,
      title: 'Unified Single Database Architecture',
      description: 'Revolutionary Single Sign-On (SSO): Safi Academy students and members log into ZEV with identical credentials. Synchronized profile badges, security vaults, and cloud database on enterprise Supabase.',
      highlight: 'Safi Academy SSO',
      color: 'from-amber-500/20 to-yellow-500/10',
      borderColor: 'border-amber-500/30'
    },
    {
      icon: CreditCard,
      title: 'SafiPay Monetization & Visa Cards',
      description: 'Direct integration with SafiPay NeoBanking allows verified ZEV creators to receive instant multi-currency payouts and spend royalties globally via physical and virtual Visa cards.',
      highlight: 'Instant Creator Payouts',
      color: 'from-yellow-500/20 to-amber-600/10',
      borderColor: 'border-[#D4AF37]/35'
    },
    {
      icon: Cpu,
      title: 'Universal Flutter Cross-Platform Engine',
      description: 'Single high-performance codebase running natively with native GPU acceleration across iOS, Android, Desktop (Windows, macOS, Linux), and web browsers at web.zevapp.com.',
      highlight: 'Native GPU Speed',
      color: 'from-blue-500/20 to-cyan-500/10',
      borderColor: 'border-blue-500/30'
    }
  ];

  const categories = [
    { name: 'Coding & Engineering', count: '10K+ Videos', icon: '💻' },
    { name: 'Financial Trading & Crypto', count: '25K+ Videos', icon: '📈' },
    { name: 'Language & Education', count: '18K+ Videos', icon: '🎓' },
    { name: 'Culture & Diaspora Life', count: '40K+ Videos', icon: '🇦🇫' },
    { name: 'Motivation & Tech', count: '15K+ Videos', icon: '⚡' },
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-[#F0F0F5] relative overflow-hidden">
      
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-purple-600/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[600px] h-[600px] bg-[#D4AF37]/8 blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-grid opacity-30 pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(0,240,255,0.25)]"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>The Safi Ecosystem Flagship Social Platform</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]"
          >
            MEET <span className="text-zev-gradient">ZEV</span>
            <br />
            <span className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-normal">
              The Next-Gen Social Network
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-[#A5A5B8] max-w-2xl mx-auto leading-relaxed"
          >
            Share high-speed 60fps vertical reels, discover authentic conversations, and connect across Afghanistan and 50+ countries worldwide. Engineered with Flutter, bank-grade biometric privacy, and unified database synergy.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="https://web.zevapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_10px_35px_rgba(0,240,255,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
            >
              <span>Launch Web App</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://www.zevapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-white bg-white/[0.05] border border-white/20 hover:border-cyan-400 hover:bg-cyan-950/20 hover:text-cyan-300 transition duration-300 flex items-center gap-2"
            >
              <span>Visit ZevApp.com</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Live Trust Metrics */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">60 FPS</div>
              <div className="text-xs text-[#8E8EA0] uppercase tracking-wider font-semibold mt-1">High-Speed Reels</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-[#F9E79F]">TLS 1.3</div>
              <div className="text-xs text-[#8E8EA0] uppercase tracking-wider font-semibold mt-1">Biometric Privacy</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-purple-400">SSO Cloud</div>
              <div className="text-xs text-[#8E8EA0] uppercase tracking-wider font-semibold mt-1">Shared Supabase DB</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">50+</div>
              <div className="text-xs text-[#8E8EA0] uppercase tracking-wider font-semibold mt-1">Global Nations</div>
            </div>
          </div>

        </div>
      </section>

      {/* --- ZEV HERO SHOWCASE MOCKUP --- */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-cyan-500/40 via-purple-500/30 to-[#D4AF37]/30 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_60px_rgba(0,240,255,0.2)]">
          <div className="rounded-[22px] bg-[#07070E] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual Brand & App Features */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-black border border-cyan-500/40 p-2 shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                    <img src="/zev.png" alt="ZEV Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">ZEV Social Engine</h3>
                    <p className="text-xs sm:text-sm text-cyan-400 font-mono">web.zevapp.com • iOS • Android • Desktop</p>
                  </div>
                </div>

                <p className="text-base text-[#B0B0C4] leading-relaxed">
                  Crafted by Afghan visionaries for global unity, ZEV replaces sluggish legacy feeds with fluid 60fps video, creator monetization via SafiPay, and instantaneous sign-in for all students of Safi Academy.
                </p>

                <div className="space-y-3">
                  {[
                    'Instant Single Sign-On with Safi Academy unified login credentials',
                    'Direct Visa card monetization payouts powered by SafiPay',
                    'Smart topic feeds: Trading, Software Engineering, Languages, Culture',
                    'End-to-End encrypted private messaging with on-device biometric lock'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-[#D0D0E0]">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://web.zevapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition shadow-[0_4px_20px_rgba(0,240,255,0.35)]"
                  >
                    Open Web Studio
                  </a>
                  <a
                    href="https://www.zevapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 transition border border-white/15"
                  >
                    Explore ZevApp.com
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Mock Phone / Interface Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[320px] rounded-[36px] bg-[#0A0A12] border-4 border-white/15 p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(0,240,255,0.25)] relative">
                  
                  {/* Phone Notch / Speaker */}
                  <div className="w-28 h-4 bg-black rounded-full mx-auto mb-3 border border-white/10 flex items-center justify-center">
                    <div className="w-8 h-1 rounded-full bg-white/20" />
                  </div>

                  {/* App Screen Simulation */}
                  <div className="rounded-[24px] bg-gradient-to-b from-[#0F1424] to-[#04060B] border border-white/10 p-4 space-y-4">
                    
                    {/* Header of Feed */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <img src="/zev.png" alt="ZEV" className="w-6 h-6 object-contain" />
                        <span className="text-xs font-black text-white tracking-widest">ZEV REELS</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                        LIVE 60FPS
                      </span>
                    </div>

                    {/* Reel Simulation Card */}
                    <div className="relative rounded-2xl h-56 bg-gradient-to-br from-cyan-950/70 via-black to-purple-950/70 border border-cyan-500/30 p-3.5 flex flex-col justify-between overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/20">
                          #Coding & Trading
                        </span>
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      </div>

                      <div className="space-y-1.5 z-10">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#D4AF37] text-black font-black text-xs flex items-center justify-center">
                            SS
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white flex items-center gap-1">
                              Shaheen Safi
                              <span className="text-[10px] text-cyan-400">✓</span>
                            </div>
                            <div className="text-[9px] text-[#A0A0B5]">Safi Academy Instructor</div>
                          </div>
                        </div>
                        <p className="text-[11px] text-white/90 line-clamp-2 leading-snug">
                          "Connecting financial algorithms, Flutter development, and global diaspora innovation."
                        </p>
                      </div>

                      {/* Right action bar simulation */}
                      <div className="absolute right-2.5 bottom-12 flex flex-col items-center gap-2 text-white text-[10px]">
                        <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-rose-400">
                          ♥
                        </div>
                        <span>4.8k</span>
                        <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-cyan-400">
                          💬
                        </div>
                        <span>320</span>
                      </div>
                    </div>

                    {/* Unified SSO Badge inside UI */}
                    <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center gap-2 text-[10px] text-[#F9E79F]">
                      <Database className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span className="leading-tight">
                        Single Sign-On Active: Authenticated via <strong>Safi Academy ID</strong>
                      </span>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- SIX CORE PILLARS OF ZEV --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-cyan-400">
            Engineered for Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Architecture & Features
          </h2>
          <p className="text-sm sm:text-base text-[#9494A8]">
            Discover why ZEV is the most advanced social platform engineered for the modern Afghan diaspora and global youth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zevFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`rounded-2xl p-6 sm:p-8 bg-gradient-to-b ${feat.color} border ${feat.borderColor} backdrop-blur-xl relative group hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:border-cyan-400 transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-white/5 text-[#E0E0EB] border border-white/10">
                      {feat.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-[#A0A0B5] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6">
                  <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Feature Verified <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- UNIFIED DATABASE SYNERGY EXPLAINER --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0C1220] via-[#08080E] to-[#141208] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                Safi Ecosystem Integration
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                How ZEV Connects with Safi Academy & SafiPay
              </h2>
              <p className="text-sm sm:text-base text-[#A5A5B8] leading-relaxed">
                Unlike isolated social networks, ZEV is directly coupled into the Safi International Capital technological umbrella. When you study at <strong>Safi Academy</strong> or bank with <strong>SafiPay</strong>, your digital identity travels with you seamlessly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-[#D4AF37]/30">
                  <h4 className="text-sm font-bold text-[#F9E79F] mb-1 flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#D4AF37]" />
                    Unified Single Database
                  </h4>
                  <p className="text-xs text-[#8E8EA0] leading-relaxed">
                    Safi Academy students log into ZEV without creating a new profile. Course milestones, verified badges, and credentials sync on enterprise Supabase infrastructure.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-cyan-500/30">
                  <h4 className="text-sm font-bold text-cyan-300 mb-1 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-cyan-400" />
                    Fintech Creator Monetization
                  </h4>
                  <p className="text-xs text-[#8E8EA0] leading-relaxed">
                    Verified creators cash out their rewards instantly through SafiPay into multi-currency IBANs or spend directly with international SafiPay Visa cards.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Safi Ecosystem Entities</span>
                  <span className="text-[10px] text-[#D4AF37] font-mono">100% Interconnected</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs">
                    <span className="text-cyan-300 font-bold">ZEV Social Network</span>
                    <span className="text-[#8E8EA0]">Consumer Media & Reels</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs">
                    <span className="text-[#F9E79F] font-bold">Safi Academy</span>
                    <span className="text-[#8E8EA0]">Unified SSO & Training</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs">
                    <span className="text-amber-300 font-bold">SafiPay</span>
                    <span className="text-[#8E8EA0]">Fintech Rails & Visa Cards</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs">
                    <span className="text-purple-300 font-bold">Safi AI</span>
                    <span className="text-[#8E8EA0]">Automated Trust & Safety</span>
                  </div>
                </div>
              </div>

              <a
                href="https://web.zevapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl text-center text-xs font-black uppercase tracking-widest text-black bg-cyan-400 hover:bg-cyan-300 transition shadow-[0_8px_25px_rgba(0,240,255,0.35)]"
              >
                Experience Unified ZEV Portal
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTENT CATEGORIES --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-white">Explore Trending Content Channels</h3>
          <p className="text-xs text-[#8E8EA0] mt-1">Smart topic categorization crafted for knowledge, ambition, and authentic community.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 transition group cursor-default"
            >
              <span className="text-base">{cat.icon}</span>
              <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition">{cat.name}</span>
              <span className="text-[10px] text-[#6F6F80] font-mono">{cat.count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          Step Into the Future of Social Networking
        </h2>
        <p className="text-base text-[#9A9AB0] max-w-xl mx-auto">
          Join thousands of creators, engineers, and visionaries across the Afghan diaspora and beyond. Fast, authentic, and secure.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="https://web.zevapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest text-black bg-cyan-400 hover:bg-cyan-300 transition shadow-[0_10px_30px_rgba(0,240,255,0.4)]"
          >
            Launch Web App Now
          </a>
          <a
            href="https://www.zevapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-white bg-white/5 border border-white/20 hover:border-white/40 transition"
          >
            Visit ZevApp.com
          </a>
          <Link
            href="/"
            className="px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 hover:bg-[#D4AF37]/20 transition"
          >
            Return to Safi Capital Home
          </Link>
        </div>
      </section>

    </div>
  );
}
