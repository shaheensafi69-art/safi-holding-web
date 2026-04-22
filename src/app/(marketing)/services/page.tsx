'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const serviceCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: '40px',
    borderRadius: '30px',
    border: '1px solid rgba(197, 160, 40, 0.12)',
    display: 'flex',
    flexDirection: 'column' as const,
    transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    height: '100%',
    position: 'relative' as const,
    overflow: 'hidden'
  };

  const downloadBoxStyle = {
    background: 'linear-gradient(180deg, rgba(197, 160, 40, 0.15) 0%, rgba(0, 0, 0, 0) 100%)',
    border: '1px solid rgba(197, 160, 40, 0.4)',
    borderRadius: '40px',
    padding: '50px',
    maxWidth: '1100px',
    margin: '-100px auto 80px auto',
    position: 'relative' as const,
    zIndex: 10,
    backdropFilter: 'blur(25px)',
    textAlign: 'center' as const
  };

  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000', color: 'white' }}>
      
      {/* --- HERO SECTION --- */}
      <section style={{ padding: '180px 5% 160px 5%', textAlign: 'center', background: 'radial-gradient(circle at top, #111 0%, #000 100%)' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 75px)', fontWeight: '900', marginBottom: '20px' }}>
            Our Global <span style={{ color: '#C5A028' }}>Expertise</span>
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666', fontSize: '18px', lineHeight: '1.8' }}>
            Delivering excellence through our integrated ecosystem of fintech solutions, 
            global connectivity, premium commerce, and professional education.
          </p>
        </motion.div>
      </section>

      {/* --- DOWNLOAD BOX (The Resource Vault) --- */}
      <section style={{ padding: '0 5%' }}>
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} style={downloadBoxStyle}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>OFFICIAL CORPORATE ASSETS</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <a href="/downloads/pitch-deck.pdf" download style={{ padding: '15px 30px', borderRadius: '12px', border: '2px solid #C5A028', color: '#C5A028', fontWeight: 'bold', textDecoration: 'none' }}>
              📥 PITCH DECK (PDF)
            </a>
            <a href="/downloads/company-profile.pdf" download style={{ padding: '15px 30px', borderRadius: '12px', border: '2px solid #fff', color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>
              📄 COMPANY PROFILE (PDF)
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- THE SERVICES GRID (4 BOXES) --- */}
      <section style={{ width: '92%', maxWidth: '1400px', margin: '0 auto 150px auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '25px' 
        }}>
          
          {/* 1. SafiPay */}
          <motion.div whileHover={{ y: -10, borderColor: '#C5A028' }} style={serviceCardStyle}>
            <div style={{ marginBottom: '30px' }}>
              <img src="/safipay.png" alt="SafiPay" style={{ height: '45px' }} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>SafiPay Banking</h3>
            <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
              Digital banking infrastructure providing global accounts and instant card issuance for international settlements.
            </p>
            <ul style={{ color: '#aaa', paddingLeft: '18px', fontSize: '13px', lineHeight: '2.2' }}>
              <li>• Multi-currency IBAN (USD, EUR, GBP)</li>
              <li>• Physical & Virtual Visa/Mastercards</li>
              <li>• Cross-border payment gateways</li>
            </ul>
          </motion.div>

          {/* 2. Safi TopUp */}
          <motion.div whileHover={{ y: -10, borderColor: '#fff' }} style={serviceCardStyle}>
            <div style={{ marginBottom: '30px' }}>
              <img src="/safitopup.png" alt="Safi TopUp" style={{ height: '45px' }} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Global Connectivity</h3>
            <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
              Instant mobile credit and data distribution across 700+ operators in 150+ countries worldwide.
            </p>
            <ul style={{ color: '#aaa', paddingLeft: '18px', fontSize: '13px', lineHeight: '2.2' }}>
              <li>• Global Airtime & Data Refills</li>
              <li>• International Gift Card Portal</li>
              <li>• Utility Bill Payments (Global)</li>
            </ul>
          </motion.div>

          {/* 3. SafiPro */}
          <motion.div whileHover={{ y: -10, borderColor: '#C5A028' }} style={serviceCardStyle}>
            <div style={{ marginBottom: '30px' }}>
              <img src="/safipro.png" alt="SafiPro" style={{ height: '45px' }} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Premium Commerce</h3>
            <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
              High-end apparel and e-commerce solutions defined by international quality and modern design.
            </p>
            <ul style={{ color: '#aaa', paddingLeft: '18px', fontSize: '13px', lineHeight: '2.2' }}>
              <li>• Luxury Apparel Design & Production</li>
              <li>• International Supply Chain Management</li>
              <li>• Premium E-commerce Fulfillment</li>
            </ul>
          </motion.div>

          {/* 4. Shaheen Safi Blog (NEW) */}
          <motion.div whileHover={{ y: -10, borderColor: '#C5A028', backgroundColor: 'rgba(197, 160, 40, 0.05)' }} style={serviceCardStyle}>
            <div style={{ marginBottom: '30px', fontSize: '35px' }}>✍️</div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Educational Blog</h3>
            <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
              Expert insights and educational articles on Fintech, Entrepreneurship, and Global Strategy.
            </p>
            <ul style={{ color: '#aaa', paddingLeft: '18px', fontSize: '13px', lineHeight: '2.2', marginBottom: '30px' }}>
              <li>• Step-by-step Fintech Tutorials</li>
              <li>• Investment Strategy Guides</li>
              <li>• Market Analysis & Tech Reflections</li>
            </ul>
            <a href="https://www.shaheensafi.blog" target="_blank" style={{ marginTop: 'auto', color: '#C5A028', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' }}>
              READ ARTICLES →
            </a>
          </motion.div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ padding: '60px 5%', textAlign: 'center', borderTop: '1px solid #111', color: '#444' }}>
        <p>&copy; 2026 Safi International Capital LTD. All Rights Reserved.</p>
      </footer>

    </main>
  );
}