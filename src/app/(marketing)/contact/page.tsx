'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  ExternalLink, 
  ArrowRight,
  Sparkles,
  Smartphone,
  CreditCard,
  Radio,
  ShoppingBag,
  GraduationCap
} from 'lucide-react';

export default function ContactPage() {
  const departments = [
    {
      title: 'ZEV Social & Creator Desk',
      desc: 'Creator verification, content partnerships, and technical escalations for the ZEV App.',
      email: 'support@zevapp.com',
      portal: 'https://www.zevapp.com/en/support',
      icon: Smartphone,
      accent: 'border-cyan-500/40 text-cyan-300'
    },
    {
      title: 'SafiPay FinTech Operations',
      desc: 'Corporate IBAN accounts, cross-border settlements, and Visa card issuance inquiries.',
      email: 'info@safipay.net',
      portal: 'https://www.safipay.net',
      icon: CreditCard,
      accent: 'border-amber-500/40 text-amber-300'
    },
    {
      title: 'Safi TopUp Telecom Network',
      desc: 'Carrier partnerships, API integrations, and international mobile credit distribution.',
      email: 'info@safitopup.site',
      portal: 'https://www.safitopup.site',
      icon: Radio,
      accent: 'border-emerald-500/40 text-emerald-300'
    },
    {
      title: 'SafiPro Enterprise Commerce',
      desc: 'Bulk software licensing, developer tool verification, and corporate procurement.',
      email: 'info@safipro.site',
      portal: 'https://www.safipro.site',
      icon: ShoppingBag,
      accent: 'border-blue-500/40 text-blue-300'
    },
    {
      title: 'Safi Academy Institutional',
      desc: 'Institutional certifications, academic enrollment, and curriculum accreditation.',
      email: 'info@safiacademy.org',
      portal: 'https://www.safiacademy.org',
      icon: GraduationCap,
      accent: 'border-yellow-500/40 text-yellow-300'
    },
    {
      title: 'Founder & Executive Secretariat',
      desc: 'Direct correspondence regarding media, keynote requests, and strategic investments.',
      email: 'info@shaheensafi.blog',
      portal: 'https://www.shaheensafi.blog',
      icon: Sparkles,
      accent: 'border-[#D4AF37]/50 text-[#F9E79F]'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#030305] text-[#F0F0F5] relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#D4AF37]/15 via-purple-900/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[1000px] right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-grid opacity-25 pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 w-full pt-16 pb-14 sm:pt-24 sm:pb-20 text-center">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Official Corporate Communication Desks</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08]"
            >
              CONNECT WITH <span className="text-gold-gradient font-black">SAFI CAPITAL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-[#A5A5B8] max-w-2xl mx-auto leading-relaxed"
            >
              Reach our central corporate executive desk in London’s Covent Garden or route your inquiry directly to our specialized subsidiary divisions.
            </motion.p>

          </div>
        </div>
      </section>

      {/* --- PRIMARY SECURE DESK & HOLDING HEADQUARTERS --- */}
      <section className="relative z-10 w-full pb-14">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-white/[0.05] via-[#0A0A14] to-black border border-[#D4AF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#D4AF37]">
                  UK Executive Holding Desk
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  Safi International Capital LTD
                </h2>
                <p className="text-sm text-[#A0A0B5] leading-relaxed">
                  Direct hotline and instant messaging channels for institutional investors, regulatory bodies, and global corporate partners.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
                    +44 74 7662 0282
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://wa.me/447476620282"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition flex items-center gap-2"
                    >
                      <span>WhatsApp Desk</span>
                    </a>
                    <a
                      href="https://t.me/safipayltd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0088cc] bg-[#0088cc]/10 border border-[#0088cc]/30 hover:bg-[#0088cc]/20 transition flex items-center gap-2"
                    >
                      <span>Telegram Desk</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2 text-xs text-[#8E8EA0] font-mono">
                  Official Holding Email:{' '}
                  <a 
                    href="mailto:info@safiinternationalcapitalltd.site" 
                    className="text-white hover:text-[#D4AF37] underline transition"
                  >
                    info@safiinternationalcapitalltd.site
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-white">London Headquarters</h4>
                    <p className="text-sm text-[#B0B0C0] mt-1 leading-snug">
                      71-75 Shelton Street,<br />
                      Covent Garden, London,<br />
                      WC2H 9JQ, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 space-y-1.5 text-xs font-mono text-[#8E8EA0]">
                  <div>UK Company Registration: <strong className="text-[#F9E79F]">17063286</strong></div>
                  <div>Standard Industrial Class: <strong className="text-[#F9E79F]">66190</strong></div>
                  <div className="text-emerald-400">Status: Active & Registered (Companies House)</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- DEPARTMENTAL DIRECTORY --- */}
      <section className="relative z-10 w-full pb-20">
        {/* Full-width container with low side margins */}
        <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">
              Direct Routing
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Subsidiary & Operational Desks
            </h2>
            <p className="text-xs sm:text-sm text-[#8E8EA0]">
              Connect directly with department heads and technical support units across the Safi group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.title}
                  className="rounded-3xl p-6 sm:p-7 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-black border border-white/15 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{dept.title}</h3>
                    <p className="text-xs text-[#9E9EB0] leading-relaxed">
                      {dept.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-xs font-mono text-[#D4AF37] hover:underline block truncate"
                    >
                      {dept.email}
                    </a>
                    <a
                      href={dept.portal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-white hover:text-[#D4AF37] transition flex items-center gap-1.5"
                    >
                      <span>Visit Operational Portal</span>
                      <ExternalLink className="w-3 h-3 text-[#888]" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}