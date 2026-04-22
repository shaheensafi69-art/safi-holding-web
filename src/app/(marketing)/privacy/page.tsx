'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  const sectionStyle = {
    marginBottom: '60px'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#C5A028',
    marginBottom: '20px'
  };

  const textStyle = {
    color: '#888',
    lineHeight: '1.8',
    fontSize: '16px',
    textAlign: 'justify' as const
  };

  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000', color: 'white', padding: '180px 10% 100px 10%' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 style={{ fontSize: '60px', fontWeight: '900', marginBottom: '20px' }}>Privacy <span style={{ color: 'transparent', WebkitTextStroke: '1px #fff' }}>Policy</span></h1>
        <p style={{ color: '#444', marginBottom: '80px', letterSpacing: '2px' }}>LAST UPDATED: APRIL 2026</p>

        <div style={sectionStyle}>
          <h2 style={titleStyle}>1. Data Protection Overview</h2>
          <p style={textStyle}>
            Safi International Capital LTD is committed to protecting your personal data. As a UK-registered entity (Reg: 17063286), we comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This policy explains how we collect, process, and secure your information across all our platforms, including SafiPay, Safi TopUp, and SafiPro.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={titleStyle}>2. Information We Collect</h2>
          <p style={textStyle}>
            We collect information necessary to provide our fintech and connectivity services, including identification data (name, email, address), financial data for processing transactions via SafiPay, and technical data such as IP addresses for security and fraud prevention.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={titleStyle}>3. International Data Transfers</h2>
          <p style={textStyle}>
            Given our global footprint across Europe and Asia, your data may be processed in different jurisdictions. However, we ensure that all transfers are protected by standard contractual clauses and high-level encryption, maintaining the strict standards of British data protection laws.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={titleStyle}>4. Your Rights</h2>
          <p style={textStyle}>
            Under UK GDPR, you have the right to access, rectify, or erase your personal data held by Safi International Capital. For any data-related inquiries, you can contact our Compliance Officer at info@safiinternationalcapitalltd.site.
          </p>
        </div>
      </motion.div>
    </main>
  );
}