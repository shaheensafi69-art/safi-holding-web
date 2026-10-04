'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Lock, 
  Database, 
  FileText, 
  Globe2, 
  Cpu, 
  CreditCard,
  Building2,
  CheckCircle2,
  AlertTriangle,
  Scale
} from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    { id: 'statutory-framework', title: '1. Statutory Jurisdiction & Fiduciary Authority' },
    { id: 'scope-operations', title: '2. Multi-Vertical Institutional Scope' },
    { id: 'cryptographic-architecture', title: '3. Zero-Knowledge Cryptography & Biometrics (ZEV)' },
    { id: 'fintech-aml', title: '4. Institutional Financial Compliance & AML (SafiPay)' },
    { id: 'federated-db', title: '5. Federated Enterprise Cloud Infrastructure (Supabase)' },
    { id: 'cross-border', title: '6. Trans-Jurisdictional Data Sovereignty' },
    { id: 'fiduciary-rights', title: '7. Statutory Rights of Global Principals' },
    { id: 'retention-erasure', title: '8. Cryptographic Retention & Shredding Schedules' },
    { id: 'governance-ico', title: '9. Supervisory Escalation & UK Regulatory Directives' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#030305] text-[#F0F0F5] relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-[#D4AF37]/15 via-purple-900/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[1400px] right-0 w-[600px] h-[600px] bg-cyan-500/8 blur-[180px] pointer-events-none" />
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
              <ShieldCheck className="w-3.5 h-3.5" />
              Statutory Fiduciary Standard
            </span>
            <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              UK GDPR • DPA 2018 • ISO 27001
            </span>
            <span className="px-3.5 py-1 rounded-full bg-white/[0.02] border border-white/10 text-[#8E8EA0] text-xs font-mono">
              Document Ref: SIC-DATAPROT-2026-V8
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            INSTITUTIONAL PRIVACY MANIFESTO
            <br />
            <span className="text-gold-gradient font-black">& DATA FIDUCIARY FRAMEWORK</span>
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#8E8EA0] font-mono pt-2">
            <div>JURISDICTION: ENGLAND & WALES (UNITED KINGDOM) • REG: 17063286</div>
            <div>LAST REVISED & RATIFIED: OCTOBER 2026 • ANNUAL COMPLIANCE AUDIT CERTIFIED</div>
          </div>
        </div>

        {/* Grid: Table of Contents Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sticky Legal Table of Contents (3 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="rounded-3xl p-6 bg-[#08080E]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] pb-3 border-b border-white/5">
                <FileText className="w-4 h-4" />
                Table of Articles
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
                  Zero-Knowledge Ingestion Active
                </div>
                <div className="flex items-center gap-2 text-[#F9E79F] font-mono">
                  <Lock className="w-3.5 h-3.5" />
                  TLS 1.3 / Quantum-Resilient Ciphers
                </div>
              </div>
            </div>
          </div>

          {/* Legal Text Body (8 Cols) */}
          <div className="lg:col-span-8 space-y-12 text-sm sm:text-base text-[#B0B0C4] leading-relaxed">
            
            {/* ARTICLE 1 */}
            <section id="statutory-framework" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article I</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Legal Codification § 1.01</span>
              </div>
              <h2 className="text-2xl font-black text-white">Statutory Jurisdiction & Fiduciary Authority</h2>
              <p>
                Safi International Capital LTD is a premier global technology and financial holding company incorporated in England and Wales pursuant to the Companies Act 2006 (Company No: <strong className="text-white">17063286</strong>), maintaining its sovereign corporate domicile at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.
              </p>
              <p>
                Under the statutory mandates of the United Kingdom General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 (DPA 2018), and trans-jurisdictional fiduciary mandates, Safi International Capital LTD acts as the designated Institutional Data Controller. We exercise absolute fiduciary stewardship, guaranteeing that all digital interactions across our global operations adhere to the highest Tier-1 standards of security, privacy, and systemic integrity.
              </p>
            </section>

            {/* ARTICLE 2 */}
            <section id="scope-operations" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article II</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Legal Codification § 2.01</span>
              </div>
              <h2 className="text-2xl font-black text-white">Multi-Vertical Institutional Scope</h2>
              <p>
                This Manifesto governs all computational endpoints, cryptographic vaults, APIs, microservices, and mobile and web interfaces across the Safi International Capital portfolio:
              </p>
              <ul className="space-y-2.5 pt-1 pl-1">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <span><strong>ZEV Social Network (zevapp.com):</strong> Next-generation 60fps vertical reels studio, homeland & diaspora community feeds, and local biometric vaulting.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                  <span><strong>Safi AI Platform (safiai.site):</strong> Autonomous neural models, corporate spokesperson intelligence, and real-time automated trust & safety enforcement.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <span><strong>SafiPay NeoBanking (safipay.net):</strong> Multi-currency accounts, SWIFT/SEPA liquidity rails, and instant international Visa and Mastercard card issuance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span><strong>Safi TopUp Network (safitopup.site):</strong> High-volume telecommunications infrastructure connecting over 700 operators in 150+ countries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <span><strong>SafiPro International (safipro.site):</strong> Enterprise developer licensing, digital supply fulfillment, and international luxury commerce.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-1" />
                  <span><strong>Safi Academy (safiacademy.org):</strong> Premier educational portal with institutional IT, algorithmic trading, and software engineering credentials.</span>
                </li>
              </ul>
            </section>

            {/* ARTICLE 3 */}
            <section id="cryptographic-architecture" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-cyan-500/25 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-cyan-400">Article III</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Zero-Knowledge Specifications</span>
              </div>
              <h2 className="text-2xl font-black text-white">Zero-Knowledge Cryptography & Biometric Architecture (ZEV)</h2>
              <p>
                Our consumer media ecosystem, <strong>ZEV</strong>, is built upon strict cryptographic zero-knowledge and privacy-by-design foundations:
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <h4 className="text-sm font-bold text-white mb-1">Local Secure Enclave Isolation</h4>
                  <p className="text-xs text-[#9E9EB0] leading-relaxed">
                    Biometric signatures (Apple Face ID, Touch ID, Android Biometrics Keystore) and numerical PIN locks never leave the principal’s physical hardware. Authentication occurs in isolated hardware cryptographic coprocessors. Raw biometric vectors are mathematically inaccessible to Safi Capital or any third party.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <h4 className="text-sm font-bold text-white mb-1">Post-Quantum Transport Encryption</h4>
                  <p className="text-xs text-[#9E9EB0] leading-relaxed">
                    All audio, video, chat frames, and metadata are transmitted exclusively via Transport Layer Security (TLS 1.3) utilizing authenticated cipher suites (ChaCha20-Poly1305 and AES-256-GCM) with perfect forward secrecy (PFS).
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <h4 className="text-sm font-bold text-white mb-1">Zero Commercial Telemetry Monetization</h4>
                  <p className="text-xs text-[#9E9EB0] leading-relaxed">
                    Safi International Capital LTD explicitly proscribes and rejects the sale, rental, or commercial brokering of user media, watch history, or private behavioral graphs.
                  </p>
                </div>
              </div>
            </section>

            {/* ARTICLE 4 */}
            <section id="fintech-aml" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-[#D4AF37]/25 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article IV</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Statutory Financial Standard</span>
              </div>
              <h2 className="text-2xl font-black text-white">Institutional Financial Compliance & AML (SafiPay)</h2>
              <p>
                In operating global neobanking and cross-border settlement rails through <strong>SafiPay</strong>, data collection is strictly bounded by statutory financial regulations:
              </p>
              <p>
                1. <strong>Customer Due Diligence (CDD / KYC):</strong> Under the UK Money Laundering Regulations 2017, the 5th and 6th EU Anti-Money Laundering Directives, and Proceeds of Crime Act 2002 (POCA), verified identity verification is performed under cryptographic hashing.
              </p>
              <p>
                2. <strong>PCI-DSS Level 1 Cryptographic Vaulting:</strong> Payment card numbers (PANs) and transaction logs are vaulted within Tier-4 PCI-compliant tokenization engines. Safi Capital does not store plaintext card security values (CVV/CVC).
              </p>
              <p>
                3. <strong>Instant Creator Monetization Rails:</strong> Content creator payouts on ZEV are processed with cryptographic ledger reconciliation, ensuring full auditability and preventing illicit capital routing.
              </p>
            </section>

            {/* ARTICLE 5 */}
            <section id="federated-db" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article V</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Cloud Federation Protocols</span>
              </div>
              <h2 className="text-2xl font-black text-white">Federated Enterprise Cloud Infrastructure (Supabase)</h2>
              <p>
                ZEV and Safi Academy utilize a synchronized enterprise Supabase cloud database cluster engineered with multi-region redundancy, cryptographic field-level encryption, and automated failover.
              </p>
              <p>
                <strong>Single Sign-On (SSO) Isolation:</strong> While user credentials allow authenticated access across both ZEV and Safi Academy, strict PostgreSQL Row-Level Security (RLS) ensures that academic progress, trading assessments, and private coursework are completely cordoned off from public social visibility unless explicitly published by the principal.
              </p>
            </section>

            {/* ARTICLE 6 */}
            <section id="cross-border" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article VI</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Trans-Jurisdictional Protocol</span>
              </div>
              <h2 className="text-2xl font-black text-white">Trans-Jurisdictional Data Sovereignty & Borderless Routing</h2>
              <p>
                Because Safi International Capital LTD bridges the United Kingdom, European Union, and the global Afghan diaspora in over 50 countries, cross-border transmission is inevitable.
              </p>
              <p>
                All extra-territorial transfers are executed pursuant to the United Kingdom International Data Transfer Agreement (IDTA), standard contractual clauses approved by the European Commission, and supplementary technical safeguards (including end-to-end payload encryption at rest and in transit) to ensure that the rigorous protections of British data privacy laws follow the data irrespective of geographical boundaries.
              </p>
            </section>

            {/* ARTICLE 7 */}
            <section id="fiduciary-rights" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article VII</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Fiduciary Guarantees</span>
              </div>
              <h2 className="text-2xl font-black text-white">Statutory Rights of Global Principals</h2>
              <p>
                Under Chapters 3 of the UK GDPR and statutory data protection laws, every user maintains irrevocable rights:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[#F9E79F] font-bold block mb-1">Right to Complete Access</span>
                  Obtain full machine-readable extracts of vaulted personal records within 30 statutory days.
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[#F9E79F] font-bold block mb-1">Right to Cryptographic Erasure</span>
                  Permanent deletion ("Right to be Forgotten") from all production databases and warm backups.
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[#F9E79F] font-bold block mb-1">Right to Data Portability</span>
                  Structured JSON/CSV transmission of account records to third-party custodians.
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[#F9E79F] font-bold block mb-1">Right to Restrict Processing</span>
                  Halt algorithmic evaluation, profiling, or non-essential telemetry at any moment.
                </div>
              </div>
            </section>

            {/* ARTICLE 8 */}
            <section id="retention-erasure" className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article VIII</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Cryptographic Disposal § 8.01</span>
              </div>
              <h2 className="text-2xl font-black text-white">Cryptographic Retention & Shredding Schedules</h2>
              <p>
                Personal data is retained only for the duration strictly necessary to fulfill institutional purposes. Upon account termination or verified erasure request:
              </p>
              <p>
                • Consumer social data (ZEV reels, comments, messaging metadata) is subjected to cryptographic shredding across all primary databases within 72 hours.
                <br />
                • Financial and transactional ledgers (SafiPay) are retained for 5 years strictly pursuant to Section 40 of the UK Money Laundering Regulations 2017, held in cold, air-gapped immutable storage accessible only under court order.
              </p>
            </section>

            {/* ARTICLE 9 */}
            <section id="governance-ico" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white/[0.04] to-[#120F06] border border-[#D4AF37]/35 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#D4AF37]">Article IX</span>
                <span className="text-[10px] font-mono text-[#7E7E91]">Regulatory Directives</span>
              </div>
              <h2 className="text-2xl font-black text-white">Supervisory Escalation & UK Regulatory Directives</h2>
              <p>
                Principals have the statutory right to lodge inquiries or regulatory complaints with the official supervisory authority of the United Kingdom:
              </p>
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-1 font-mono">
                <div className="text-white font-bold">The Information Commissioner’s Office (ICO)</div>
                <div>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, United Kingdom</div>
                <div>Helpline: +44 303 123 1113 • Website: ico.org.uk</div>
              </div>
              <p className="pt-2 text-xs">
                To contact our dedicated Institutional Data Protection Secretariat, address formal correspondence to:{' '}
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