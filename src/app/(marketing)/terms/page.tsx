'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsPage() {
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
        <h1 style={{ fontSize: '60px', fontWeight: '900', marginBottom: '20px' }}>Terms of <span style={{ color: 'transparent', WebkitTextStroke: '1px #fff' }}>Service</span></h1>
        <p style={{ color: '#444', marginBottom: '80px', letterSpacing: '2px' }}>LEGAL FRAMEWORK • 2026</p>

        <div style={sectionStyle}>
          <h2 style={titleStyle}>1. Agreement to Terms</h2>
          <p style={textStyle}>
            By accessing the websites and services of Safi International Capital LTD, including our fintech portal SafiPay and retail arm SafiPro, you agree to be bound by these Terms and Conditions. These terms are governed by the laws of England and Wales.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={titleStyle}>2. Service Eligibility</h2>
          <p style={textStyle}>
            To use our financial services, you must be at least 18 years of age and pass our standard KYC (Know Your Customer) and AML (Anti-Money Laundering) checks. Safi International Capital reserves the right to refuse service to any entity that does not meet our compliance requirements.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={titleStyle}>3. Intellectual Property</h2>
          <p style={textStyle}>
            All content, trademarks, and technology associated with the Safi brand, including "Safi AI," are the exclusive property of Safi International Capital LTD. Unauthorized use or reproduction is strictly prohibited under international copyright laws.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={titleStyle}>4. Limitation of Liability</h2>
          <p style={textStyle}>
            While we strive for 100% uptime and accuracy across our digital banking and connectivity networks, Safi International Capital LTD shall not be held liable for indirect or consequential losses resulting from the use of our services, except as required by UK law.
          </p>
        </div>
      </motion.div>
    </main>
  );
}