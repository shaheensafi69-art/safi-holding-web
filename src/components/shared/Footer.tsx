'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles, 
  ArrowUpRight,
  Globe2,
  Building2,
  Lock,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const ecosystemLinks = [
    { name: 'ZEV Social Network', href: 'https://www.zevapp.com', badge: 'Next-Gen Social', external: true },
    { name: 'Safi AI Platform', href: 'https://safiai.site', badge: 'Neural AI', external: true },
    { name: 'SafiPay NeoBanking', href: 'https://www.safipay.net', badge: 'FinTech', external: true },
    { name: 'Safi TopUp Network', href: 'https://www.safitopup.site', badge: 'Telecom', external: true },
    { name: 'SafiPro Commerce', href: 'https://www.safipro.site', badge: 'Digital', external: true },
    { name: 'Safi Academy', href: 'https://www.safiacademy.org', badge: 'Education', external: true },
    { name: 'Shaheen Safi Blog', href: 'https://shaheensafi.blog', badge: 'Founder Log', external: true },
  ];

  const corporateLinks = [
    { name: 'Executive Overview', href: '/about' },
    { name: 'Board of Directors', href: '/about#leadership' },
    { name: 'Global Infrastructure & Verticals', href: '/services' },
    { name: 'Official Pitch Deck (PDF)', href: '/downloads/pitch-deck.pdf' },
    { name: 'Corporate Inquiries & Desk', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Institutional Privacy Manifesto', href: '/privacy' },
    { name: 'Master Terms of Governance', href: '/terms' },
    { name: 'Child Safeguarding & Trust', href: 'https://www.zevapp.com/en/child-safety', external: true },
    { name: 'AML & Anti-Fraud Architecture', href: '/terms' },
    { name: 'UK Companies House Official Registry', href: 'https://find-and-update.company-information.service.gov.uk/company/17063286', external: true },
  ];

  return (
    <footer className="relative w-full bg-[#020204] text-[#E0E0EB] mt-16 sm:mt-24 pt-16 sm:pt-20 pb-12 overflow-hidden border-t border-[#D4AF37]/25 rounded-t-[36px] sm:rounded-t-[50px] shadow-[0_-25px_60px_rgba(0,0,0,0.9)]">
      
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/3 w-[700px] h-[250px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Radiant Top Shimmer Beam */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50 shadow-[0_0_20px_#D4AF37]" />

      {/* Main Content Container with low side margins */}
      <div className="w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4 relative z-10 space-y-14">
        
        {/* Top Banner Card: Institutional Holding Authority */}
        <div className="rounded-[30px] p-6 sm:p-8 bg-gradient-to-r from-white/[0.04] via-[#080810] to-[#120F06] border border-[#D4AF37]/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-black border border-[#D4AF37]/40 p-2 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
              <img src="/logo.png" alt="Safi Capital" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black text-white tracking-tight">
                  SAFI INTERNATIONAL <span className="text-gold-gradient font-black">CAPITAL LTD</span>
                </span>
              </div>
              <p className="text-xs text-[#9595A8] mt-0.5">
                Statutory Investment Holding • Incorporated under the Companies Act 2006 (England & Wales)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#D4AF37]/30 text-[11px] font-mono text-[#F9E79F]">
              Company No: <strong>17063286</strong>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#D4AF37]/30 text-[11px] font-mono text-[#F9E79F]">
              SIC Code: <strong>66190</strong>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Status: Active & Registered</span>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Column 1: Institutional Overview (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37] flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5" />
              Institutional Fiduciary
            </h4>
            <p className="text-sm text-[#9494A8] leading-relaxed max-w-sm">
              Safi International Capital LTD stewards high-impact technological and financial infrastructures. Our institutional architecture ensures borderless capital liquidity, zero-trust cryptographic security, and transformative global reach for emerging and established economies.
            </p>

            <div className="space-y-2.5 pt-1 text-xs text-[#9595A8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+447476620282" className="hover:text-white font-mono transition">
                  +44 74 7662 0282
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:info@safiinternationalcapitalltd.site" className="hover:text-white font-mono truncate transition">
                  info@safiinternationalcapitalltd.site
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Ecosystem & Projects (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Safi Ecosystem Verticals
            </h4>
            <ul className="space-y-2.5">
              {ecosystemLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-sm text-[#A0A0B5] hover:text-white transition"
                  >
                    <span className="group-hover:translate-x-1 transition duration-200">
                      {item.name}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-semibold bg-white/[0.04] text-[#8E8EA0] group-hover:text-[#F9E79F] group-hover:bg-[#D4AF37]/15 transition">
                      {item.badge}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate & Governance (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">
              Corporate
            </h4>
            <ul className="space-y-2.5">
              {corporateLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A0A0B5] hover:text-white transition inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Compliance & Secure Hotlines (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37] flex items-center gap-2">
              <Lock className="w-3.5 h-3.5" />
              Statutory Governance
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#8A8A9E] hover:text-[#D4AF37] transition inline-flex items-center gap-1 hover:translate-x-0.5 duration-200"
                    >
                      {link.name} <ArrowUpRight className="w-2.5 h-2.5" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-xs text-[#8A8A9E] hover:text-[#D4AF37] transition inline-block hover:translate-x-0.5 duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Direct Connect Buttons */}
            <div className="pt-3 flex flex-wrap gap-2">
              <a
                href="https://wa.me/447476620282"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition flex items-center gap-1.5"
              >
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="https://t.me/safipayltd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0088cc] bg-[#0088cc]/10 border border-[#0088cc]/30 hover:bg-[#0088cc]/20 transition flex items-center gap-1.5"
              >
                <span>Telegram Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Declarations */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F6F82]">
          <p>
            © {currentYear} Safi International Capital LTD. All Rights Reserved. Incorporated in England and Wales (#17063286).
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#D4AF37] transition">
              Privacy Manifesto
            </Link>
            <Link href="/terms" className="hover:text-[#D4AF37] transition">
              Master Terms
            </Link>
            <a 
              href="https://www.zevapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#A0A0B5] hover:text-[#D4AF37] transition"
            >
              ZEV Social
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}