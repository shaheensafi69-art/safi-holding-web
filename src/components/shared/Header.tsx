'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ExternalLink, 
  ArrowRight,
  Layers,
  Smartphone,
  Cpu,
  CreditCard,
  Radio,
  ShoppingBag,
  GraduationCap,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsEcosystemOpen(false);
  }, [pathname]);

  const ecosystemItems = [
    {
      name: 'ZEV Social Network',
      tagline: 'Next-Gen 60fps Reels & Diaspora Community',
      badge: 'SOCIAL MEDIA',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      href: 'https://www.zevapp.com',
      logo: '/zev.png',
      icon: Smartphone,
    },
    {
      name: 'Safi AI Platform',
      tagline: 'Chief AI & Intelligent Representation',
      badge: 'NEURAL AI',
      badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
      href: 'https://safiai.site',
      logo: '/SafiAi.png',
      icon: Cpu,
    },
    {
      name: 'SafiPay NeoBanking',
      tagline: 'Multi-Currency Accounts & Instant Visa Cards',
      badge: 'FINTECH',
      badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      href: 'https://www.safipay.net',
      logo: '/safipay.png',
      icon: CreditCard,
    },
    {
      name: 'Safi TopUp Network',
      tagline: '700+ Telco Carriers across 150+ Countries',
      badge: 'TELECOM',
      badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      href: 'https://www.safitopup.site',
      logo: '/safitopup.png',
      icon: Radio,
    },
    {
      name: 'SafiPro International',
      tagline: 'Software Licensing, Developer Tools & Commerce',
      badge: 'COMMERCE',
      badgeColor: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
      href: 'https://www.safipro.site',
      logo: '/safipro.png',
      icon: ShoppingBag,
    },
    {
      name: 'Safi Academy',
      tagline: 'Institutional Tech, Coding & Trading Diplomas',
      badge: 'EDUCATION',
      badgeColor: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
      href: 'https://www.safiacademy.org',
      logo: '/safi-academy.png',
      icon: GraduationCap,
    },
  ];

  return (
    <>
      {/* Floating Island Navigation Container */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300">
        
        {/* Floating Capsule Bar */}
        <div 
          className={`pointer-events-auto w-full max-w-[1450px] transition-all duration-500 rounded-full sm:rounded-[32px] px-3.5 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between ${
            isScrolled
              ? 'bg-[#07070C]/90 backdrop-blur-3xl border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.18)]'
              : 'bg-[#0A0A12]/80 backdrop-blur-2xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.75),0_0_20px_rgba(212,175,55,0.1)]'
          }`}
        >
          
          {/* Brand Logo & Statutory Subtitle */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 text-decoration-none focus:outline-none pl-1"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-[#D4AF37]/25 blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
              <img
                src="/logo.png"
                alt="Safi International Capital LTD"
                className="relative h-9 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-white group-hover:text-white transition">
                  SAFI <span className="text-gold-gradient font-black">CAPITAL</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[8px] sm:text-[9.5px] uppercase tracking-[0.22em] font-semibold text-[#9090A5]">
                  International LTD
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full text-[7.5px] font-mono font-medium tracking-wide bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/25">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  UK #17063286
                </span>
              </div>
            </div>
          </Link>

          {/* Center Navigation Links (Pill Style) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-black/40 p-1 rounded-full border border-white/5">
            <Link
              href="/"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] rounded-full transition-all duration-300 ${
                pathname === '/'
                  ? 'text-[#F9E79F] bg-[#D4AF37]/20 border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'text-[#A5A5B8] hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              Home
            </Link>

            {/* Ecosystem Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsEcosystemOpen(true)}
              onMouseLeave={() => setIsEcosystemOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] rounded-full transition-all duration-300 ${
                  pathname.startsWith('/services') || isEcosystemOpen
                    ? 'text-[#F9E79F] bg-[#D4AF37]/20 border border-[#D4AF37]/40'
                    : 'text-[#A5A5B8] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Ecosystem</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isEcosystemOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
              </button>

              {/* Dropdown Panel */}
              <AnimatePresence>
                {isEcosystemOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[500px] p-3.5 rounded-[28px] bg-[#08080E]/95 backdrop-blur-3xl border border-[#D4AF37]/35 shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.18)]"
                  >
                    <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-white/5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                        Safi Holding Entities
                      </span>
                      <Link 
                        href="/services" 
                        className="text-[11px] text-[#A0A0B5] hover:text-[#F9E79F] flex items-center gap-1 font-medium transition"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-1.5">
                      {ecosystemItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between p-2.5 rounded-2xl hover:bg-white/[0.05] border border-transparent hover:border-[#D4AF37]/30 transition duration-200"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-black/70 border border-white/10 flex items-center justify-center p-1.5 shrink-0 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition">
                              <img 
                                src={item.logo} 
                                alt={item.name} 
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-white group-hover:text-[#F9E79F] transition">
                                  {item.name}
                                </span>
                                <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase border ${item.badgeColor}`}>
                                  {item.badge}
                                </span>
                              </div>
                              <span className="text-[11px] text-[#7E7E91]">
                                {item.tagline}
                              </span>
                            </div>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-[#555] group-hover:text-[#D4AF37] transition shrink-0" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] rounded-full transition-all duration-300 ${
                pathname === '/about'
                  ? 'text-[#F9E79F] bg-[#D4AF37]/20 border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'text-[#A5A5B8] hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              About
            </Link>

            <Link
              href="/services"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] rounded-full transition-all duration-300 ${
                pathname === '/services'
                  ? 'text-[#F9E79F] bg-[#D4AF37]/20 border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'text-[#A5A5B8] hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              Services
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] rounded-full transition-all duration-300 ${
                pathname === '/contact'
                  ? 'text-[#F9E79F] bg-[#D4AF37]/20 border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'text-[#A5A5B8] hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Button (Rounded Capsule) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="relative group px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-extrabold uppercase tracking-[0.18em] text-[#050508] bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#AA820A] border border-[#F9E79F]/60 shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_10px_35px_rgba(212,175,55,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
            >
              <span>Executive Desk</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 sm:p-2.5 rounded-full bg-black/60 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/15 transition duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#D4AF37]" />
              ) : (
                <Menu className="w-5 h-5 text-[#D4AF37]" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Floating Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-3 top-[68px] sm:top-[82px] z-40 mx-auto max-w-lg rounded-[32px] bg-[#07070D]/98 backdrop-blur-3xl border border-[#D4AF37]/35 shadow-[0_30px_70px_rgba(0,0,0,0.95)] overflow-hidden"
          >
            <div className="px-5 py-6 space-y-6 max-h-[calc(100vh-100px)] overflow-y-auto">
              
              {/* Primary Links */}
              <div className="space-y-1">
                {[
                  { name: 'Home Portal', href: '/' },
                  { name: 'About & Leadership', href: '/about' },
                  { name: 'Global Infrastructure & Services', href: '/services' },
                  { name: 'Corporate Contact', href: '/contact' },
                  { name: 'Privacy Manifesto (UK GDPR)', href: '/privacy' },
                  { name: 'Institutional Terms of Service', href: '/terms' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold tracking-wider uppercase transition ${
                      pathname === link.href
                        ? 'text-[#F9E79F] bg-[#D4AF37]/15 border border-[#D4AF37]/40'
                        : 'text-[#C5C5D2] hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

              {/* Ecosystem Quick Links */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D4AF37] mb-3 px-2">
                  Ecosystem Verticals
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {ecosystemItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#D4AF37]/30 transition"
                    >
                      <img src={item.logo} alt={item.name} className="w-6 h-6 object-contain" />
                      <span className="text-[11px] font-semibold text-[#B0B0C0] truncate">
                        {item.name.split(' ')[0]}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Button & UK Badge */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full text-center text-xs font-extrabold uppercase tracking-widest text-black bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#AA820A] block shadow-[0_8px_25px_rgba(212,175,55,0.4)]"
                >
                  Contact London Executive
                </Link>
                <div className="text-center text-[10px] text-[#6E6E80] font-mono">
                  Safi International Capital LTD • UK #17063286
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}