'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Scale, 
  Lock, 
  FileText, 
  CheckCircle2, 
  AlertOctagon, 
  Building2,
  Gavel,
  Landmark
} from 'lucide-react';

export default function TermsPage() {
  const sections = [
    { id: 'statutory-covenant', title: '1. Statutory Authority & Institutional Covenant' },
    { id: 'ecosystem-scope', title: '2. Multi-Vertical Governance Scope' },
    { id: 'child-safety', title: '3. Zero-Tolerance Child Protection & Community Trust (ZEV)' },
    { id: 'fintech-sanctions', title: '4. Financial Compliance, Sanctions & Anti-Money Laundering (SafiPay)' },
    { id: 'intellectual-property', title: '5. Sovereign Intellectual Property & Algorithmic Fortress' },
    { id: 'creator-monetization', title: '6. Content Creator Royalty & Revenue Settlements' },
    { id: 'fiduciary-liability', title: '7. Limitation of Fiduciary Liability & Operational Warranty' },
    { id: 'jurisdiction-arbitration', title: '8. Governing Law & Sovereign London Jurisdiction' },
    { id: 'amendments-continuity', title: '9. Amendments, Severability & Corporate Continuity' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#030305] text-[#F0F0F5] relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-[#D4AF37]/15 via-blue-950/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[1400px] left-0 w-[600px] h-[600px] bg-purple-500/8 blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-grid opacity-25 pointer-events-none" />

      {/* Main Content Container with low side margins */}
      <div className="relative z-10 w-[96%] max-w-[1720px] mx-auto px-2 sm:px-4 pt-10 pb-28">
        
        {/* Back navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A0A0B5] hover:text-[#D4AF37] mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Institutional Portal</span>
        </Link>

        {/* Master Header */}
        <div className="space-y-5 mb-14 border-b border-white/10 pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">
              <Scale className="w-3.5 h-3.5" />
              Sovereign Governance Codex
            </span>
            <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
              Companies Act 2006 • English Common Law
            </span>
            <span className="px-3.5 py-1 rounded-full bg-white/[0.02] border border-white/10 text-[#8E8EA0] text-xs font-mono">
              Document Ref: SIC-TERMS-GOV-2026-V9
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            MASTER TERMS OF GOVERNANCE
            <br />
            <span className="text-gold-gradient font-black">& GLOBAL PLATFORM SERVICE</span>
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#8E8EA0] font-mono pt-2">
            <div>DOMICILE: LONDON, UNITED KINGDOM • COMPANY REGISTRATION NO: 17063286</div>
            <div>EXCLUSIVE VENUE: HIGH COURT OF JUSTICE, LONDON • ARBITRATION: LCIA</div>
          </div>
        </div>

        {/* Grid: Table of Contents Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sticky Legal Table of Contents (3 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="rounded-3xl p-6 bg-[#08080E]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] pb-3 border-b border-white/5">
                <Gavel className="w-4 h-4" />
                Index of Articles
              </div>
              <nav className="space-y-1.5 text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block p-2 rounded-xl text-[#A0A0B5] hover:text-[#F9E79F] hover:bg-white/[0.04] transition duration-200"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/5 space-y-2 text-[11px] text-[#7E7E91]">
                <div className="flex items-center gap-2 text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Statutory UK Ratification Active
                </div>
                <div className="flex items-center gap-2 text-[#F9E79F] font-mono">
                  <Landmark className="w-3.5 h-3.5" />
                  LCIA Dispute Standard
                </div>
              </div>
            </div>
          </div>

          {/* Legal Text Body (8 Cols) */}
          <div className="lg:col-span-8 space-y-12 text-sm sm:text-base text-[#B0B0C4] leading-relaxed">
            
            {/* ARTICLE 1 */}
            <section id="statutory-covenant" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article I</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Statutory Covenant § 1.01</span>
              </div>
              <h2 className="text-2xl font-black text-white">Statutory Authority & Institutional Covenant</h2>
              <p>
                These Master Terms of Governance constitute an internationally enforceable legal covenant between <strong>Safi International Capital LTD</strong> (Company No: <strong className="text-white">17063286</strong>, incorporated in England and Wales with corporate headquarters at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom) and any individual, corporation, institutional investor, or sovereign stakeholder accessing or transacting across our technological network.
              </p>
              <p>
                By accessing, deploying, transacting, or operating within any platform, protocol, API, or service maintained by the holding, you unreservedly warrant full legal capacity and irrevocably assent to these governance conditions under the laws of England and Wales.
              </p>
            </section>

            {/* ARTICLE 2 */}
            <section id="ecosystem-scope" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article II</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Multi-Vertical Scope § 2.01</span>
              </div>
              <h2 className="text-2xl font-black text-white">Multi-Vertical Governance Scope</h2>
              <p>
                This covenant establishes unifying governance across all operating subsidiaries and technological assets of Safi International Capital LTD:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <h4 className="font-bold text-cyan-300 mb-1">ZEV Social Network (zevapp.com)</h4>
                  <p className="text-[#8E8EA0]">Governs content dissemination, 60fps reels studio licensing, creator monetization, and live community feeds.</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <h4 className="font-bold text-amber-300 mb-1">SafiPay NeoBanking (safipay.net)</h4>
                  <p className="text-[#8E8EA0]">Governs multi-currency IBAN liquidity, electronic money issuance, cross-border settlements, and Visa payment cards.</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <h4 className="font-bold text-purple-300 mb-1">Safi AI Platform (safiai.site)</h4>
                  <p className="text-[#8E8EA0]">Governs neural agent utilization, intelligent content moderation, and automated corporate representation.</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <h4 className="font-bold text-yellow-300 mb-1">Safi Academy (safiacademy.org)</h4>
                  <p className="text-[#8E8EA0]">Governs institutional curriculum certification, digital diploma validity, and unified Supabase database access.</p>
                </div>
              </div>
            </section>

            {/* ARTICLE 3 */}
            <section id="child-safety" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-rose-500/25 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-rose-400">Article III</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Mandatory Protection Standard</span>
              </div>
              <h2 className="text-2xl font-black text-white">Zero-Tolerance Child Safeguarding & Community Trust (ZEV)</h2>
              <p>
                Safi International Capital LTD enforces an absolute zero-tolerance standard regarding child safety across the ZEV social network and all media modules:
              </p>
              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 text-xs text-[#E0B0B0] leading-relaxed">
                  <strong>Automated Neural CSAM Interception:</strong> Any attempt to upload, generate, distribute, or solicit Child Sexual Abuse Material (CSAM) or exploit minors will trigger immediate algorithmic termination of account access, cryptographic evidence freezing, and immediate statutory referral to the National Center for Missing & Exploited Children (NCMEC), the UK National Crime Agency (NCA), and relevant international law enforcement bodies.
                </div>
                <p className="text-xs text-[#9E9EB0] leading-relaxed">
                  Hate speech, violent extremism, cyber-harassment, non-consensual deepfakes, and targeted intimidation are strictly prohibited and will result in permanent biometric and IP-level blacklisting.
                </p>
              </div>
            </section>

            {/* ARTICLE 4 */}
            <section id="fintech-sanctions" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-[#D4AF37]/25 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article IV</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Financial Sanctions Codex</span>
              </div>
              <h2 className="text-2xl font-black text-white">Financial Compliance, Sanctions & Anti-Money Laundering (SafiPay)</h2>
              <p>
                SafiPay operates in strict alignment with the financial crime frameworks established by the UK Financial Conduct Authority (FCA), the European Banking Authority (EBA), and the Financial Action Task Force (FATF):
              </p>
              <ul className="space-y-2 text-xs sm:text-sm pl-1">
                <li>• <strong>Sanctions Compliance:</strong> No capital, card issuance, or settlement services shall be extended to entities or individuals designated under the UK HM Treasury Sanctions List, US OFAC Specially Designated Nationals (SDN), or EU Consolidated Financial Sanctions.</li>
                <li>• <strong>Anti-Money Laundering (AML/CFT):</strong> We reserve the statutory right to freeze, audit, or report any transaction reasonably suspected of structuring, terrorist financing, or sanctions circumvention pursuant to the UK Proceeds of Crime Act 2002.</li>
                <li>• <strong>Fiduciary Segregation:</strong> User liquidity held in connection with SafiPay cards is segregated in ring-fenced custodial accounts with regulated credit institutions.</li>
              </ul>
            </section>

            {/* ARTICLE 5 */}
            <section id="intellectual-property" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article V</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Proprietary Fortress § 5.01</span>
              </div>
              <h2 className="text-2xl font-black text-white">Sovereign Intellectual Property & Algorithmic Fortress</h2>
              <p>
                All software source code, Flutter UI rendering engines, neural network weights (Safi AI), smart routing algorithms (Safi TopUp), database synchronization schemas, graphic assets, trademarks, and service marks ("SAFI CAPITAL", "ZEV", "SafiPay", "Safi AI", "SafiPro", "Safi Academy") are the exclusive proprietary property of Safi International Capital LTD.
              </p>
              <p>
                Any reverse engineering, decompilation, automated scraping, model weight distillation, or unauthorized redistribution without formal institutional license signed by the Board of Directors constitutes willful infringement subject to maximum damages under UK and international copyright treaties.
              </p>
            </section>

            {/* ARTICLE 6 */}
            <section id="creator-monetization" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article VI</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Royalty Governance § 6.01</span>
              </div>
              <h2 className="text-2xl font-black text-white">Content Creator Royalty & Revenue Settlements</h2>
              <p>
                Verified content creators participating in the ZEV Creator Fund or Safi Academy instructional payouts are entitled to transparent, auditable royalty distributions executed directly via SafiPay rails.
              </p>
              <p>
                Safi Capital reserves the right to withhold payouts pending verification of legitimate engagement or in instances where algorithmic manipulation (view farming, synthetic bot engagement, or intellectual property theft) is detected.
              </p>
            </section>

            {/* ARTICLE 7 */}
            <section id="fiduciary-liability" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article VII</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Liability Limitation § 7.01</span>
              </div>
              <h2 className="text-2xl font-black text-white">Limitation of Fiduciary Liability & Operational Warranty</h2>
              <p>
                While Safi International Capital LTD maintains enterprise-grade disaster recovery, geographic redundancy, and targeted 99.99% system availability:
              </p>
              <p>
                To the maximum extent permitted under applicable law, Safi Capital and its officers, directors, and affiliates shall not be held liable for indirect, incidental, or consequential damages resulting from telecommunications carrier outages, third-party blockchain disruptions, sovereign regulatory interventions, or Force Majeure events beyond our reasonable institutional control.
              </p>
            </section>

            {/* ARTICLE 8 */}
            <section id="jurisdiction-arbitration" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white/[0.04] to-[#120F06] border border-[#D4AF37]/35 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article VIII</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Sovereign London Venue</span>
              </div>
              <h2 className="text-2xl font-black text-white">Governing Law & Sovereign London Jurisdiction</h2>
              <p>
                This Agreement and any dispute or claim arising out of or in connection with it or its subject matter shall be governed by, and construed in accordance with, the <strong>laws of England and Wales</strong>.
              </p>
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-1 font-mono">
                <div className="text-white font-bold">Exclusive Forum & Institutional Arbitration:</div>
                <p className="text-[#A5A5B8] leading-relaxed">
                  Any dispute, controversy, or claim arising under or relating to this covenant shall be submitted to the exclusive jurisdiction of the <strong>High Court of Justice in London</strong> or resolved under the Arbitration Rules of the <strong>London Court of International Arbitration (LCIA)</strong>, whose award shall be final, binding, and enforceable in any court of competent sovereign jurisdiction.
                </p>
              </div>
              <p className="pt-2 text-xs">
                For statutory inquiries or formal institutional notices, address communications to the Corporate Secretary:{' '}
                <a href="mailto:info@safiinternationalcapitalltd.site" className="text-[#D4AF37] underline font-mono">
                  info@safiinternationalcapitalltd.site
                </a>
              </p>
            </section>

          </div>

        </div>

      </div>

    </div>
  );
}