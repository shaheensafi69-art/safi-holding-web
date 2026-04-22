'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const sectionTitleStyle = {
    fontSize: 'clamp(32px, 5vw, 55px)',
    fontWeight: '900',
    color: '#C5A028',
    marginBottom: '35px',
    letterSpacing: '-1.5px'
  };

  const paragraphStyle = {
    color: '#bbb',
    fontSize: '18px',
    lineHeight: '2',
    marginBottom: '30px',
    textAlign: 'justify' as const
  };

  const glassCard = {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: '60px',
    borderRadius: '45px',
    border: '1px solid rgba(197, 160, 40, 0.12)',
    marginBottom: '80px',
    backdropFilter: 'blur(10px)'
  };

  const teamImageStyle = {
    width: '180px',
    height: '180px',
    borderRadius: '40px',
    border: '2px solid rgba(197, 160, 40, 0.3)',
    marginBottom: '25px',
    objectFit: 'cover' as const,
    boxShadow: '0 15px 35px rgba(0,0,0,0.5)'
  };

  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000', color: 'white', overflowX: 'hidden' }}>
      
      {/* --- 1. IMPACTFUL HERO SECTION --- */}
      <section style={{ padding: '200px 5% 120px 5%', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'radial-gradient(circle at center, #111 0%, #000 80%)', zIndex: 0 }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0px' }} 
            animate={{ opacity: 1, letterSpacing: '6px' }}
            style={{ color: '#C5A028', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>
            The Safi International Legacy
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            style={{ fontSize: 'clamp(45px, 10vw, 95px)', fontWeight: '900', marginTop: '25px', lineHeight: '0.9' }}>
            Powering Global <br /> <span style={{ color: 'transparent', WebkitTextStroke: '1px #C5A028' }}>Excellence</span>
          </motion.h1>
        </div>
      </section>

      {/* --- 2. CORPORATE DEPTH SECTION --- */}
      <section style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        <div style={glassCard}>
          <h2 style={sectionTitleStyle}>Corporate Overview</h2>
          <p style={paragraphStyle}>
            Safi International Capital LTD is a high-impact investment holding company incorporated under the laws of the United Kingdom (Registration No: 17063286). Based in the prestigious Shelton Street of London’s Covent Garden, our organization operates as a strategic hub for global financial innovation and commercial excellence. We are dedicated to the pursuit of creating borderless economic opportunities by leveraging the most advanced technologies in the Fintech and E-commerce sectors.
          </p>
          <p style={paragraphStyle}>
            Our institutional framework is designed to handle complex international operations, ensuring that each subsidiary under the Safi umbrella adheres to the highest standards of British corporate governance and global security protocols. At Safi International Capital, we do not just invest in projects; we architect entire ecosystems that redefine how capital moves, how people communicate, and how brands interact with the modern consumer.
          </p>
          <p style={paragraphStyle}>
            From the bustling financial districts of Europe to the emerging tech landscapes of Central Asia, our footprint is expanding rapidly. We provide the structural stability and visionary leadership required to navigate the complexities of the 21st-century digital economy, making Safi International Capital a trusted name in the global investment community.
          </p>
        </div>

        {/* --- 3. EXECUTIVE LEADERSHIP (THE CORE TEAM) --- */}
        <h2 style={{ ...sectionTitleStyle, textAlign: 'center', marginBottom: '60px' }}>Board of Directors</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '120px' }}>
          
          {/* Shaheen Safi */}
          <motion.div whileHover={{ y: -10 }} style={{ ...glassCard, marginBottom: '0', textAlign: 'center' }}>
            <img src="/safi.png" alt="Shaheen Safi" style={teamImageStyle} />
            <h4 style={{ fontSize: '26px', fontWeight: 'bold' }}>Shaheen Safi</h4>
            <p style={{ color: '#C5A028', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', marginTop: '5px' }}>FOUNDER & CEO</p>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '15px', lineHeight: '1.6' }}>The visionary architect behind the Safi ecosystem, leading global strategy and innovation.</p>
          </motion.div>

          {/* Mujtaba Rahmani */}
          <motion.div whileHover={{ y: -10 }} style={{ ...glassCard, marginBottom: '0', textAlign: 'center' }}>
            <img src="/mujtaba.jpeg" alt="Mujtaba Rahmani" style={teamImageStyle} />
            <h4 style={{ fontSize: '26px', fontWeight: 'bold' }}>Mujtaba Rahmani</h4>
            <p style={{ color: '#C5A028', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', marginTop: '5px' }}>CHIEF OPERATIONS OFFICER</p>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '15px', lineHeight: '1.6' }}>Directing international operations and ensuring seamless execution across all business units.</p>
          </motion.div>

          {/* Sahel Salem */}
          <motion.div whileHover={{ y: -10 }} style={{ ...glassCard, marginBottom: '0', textAlign: 'center' }}>
            <img src="/sahel.jpeg" alt="Sahel Salem" style={teamImageStyle} />
            <h4 style={{ fontSize: '26px', fontWeight: 'bold' }}>Sahel Salem</h4>
            <p style={{ color: '#C5A028', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', marginTop: '5px' }}>EUROPEAN RELATIONS DIRECTOR</p>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '15px', lineHeight: '1.6' }}>Managing strategic partnerships and corporate relations within the European Union.</p>
          </motion.div>

        </div>

        {/* --- 4. THE SUBSIDIARIES: DETAILED BREAKDOWN --- */}
        
        {/* SafiPay Deep Dive */}
        <div style={glassCard}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '40px', flexWrap: 'wrap' }}>
             <img src="/safipay.png" alt="SafiPay" style={{ height: '70px' }} />
             <h2 style={{ ...sectionTitleStyle, marginBottom: '0' }}>SafiPay: The Future of Banking</h2>
          </div>
          <p style={paragraphStyle}>
            SafiPay is the flagship Fintech division of our holding, engineered to solve the most pressing challenges in cross-border finance. In a world where traditional banking often fails to support the unbanked or underbanked, SafiPay provides a secure, digital-first alternative. Our platform empowers users with local bank details for international settlements and multi-currency accounts that eliminate the friction of currency exchange.
          </p>
          <p style={paragraphStyle}>
            With integrated Visa and Mastercard issuance capabilities, SafiPay bridges the gap between digital assets and real-world spending. Whether it is facilitating high-volume corporate transfers or simple daily transactions, SafiPay utilizes cutting-edge blockchain and encryption technologies to ensure every cent is protected and every transfer is instantaneous.
          </p>
        </div>

        {/* Safi TopUp Deep Dive */}
        <div style={glassCard}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '40px', flexWrap: 'wrap' }}>
             <img src="/safitopup.png" alt="Safi TopUp" style={{ height: '70px' }} />
             <h2 style={{ ...sectionTitleStyle, marginBottom: '0' }}>Safi TopUp: Global Connectivity</h2>
          </div>
          <p style={paragraphStyle}>
            Communication is the backbone of global commerce. Safi TopUp was created to ensure that connectivity remains accessible, regardless of geographic boundaries. Our platform connects directly with over 700 mobile operators worldwide, offering airtime, data, and digital services to millions of users across 150+ countries. 
          </p>
          <p style={paragraphStyle}>
            By simplifying the process of sending international mobile credit and managing prepaid utility bills, Safi TopUp has become an essential tool for the global diaspora and international travelers. Our system is built for speed and reliability, processing thousands of transactions every minute with zero downtime, keeping the world connected one top-up at a time.
          </p>
        </div>

        {/* SafiPro Deep Dive */}
        <div style={glassCard}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '40px', flexWrap: 'wrap' }}>
             <img src="/safipro.png" alt="SafiPro" style={{ height: '70px' }} />
             <h2 style={{ ...sectionTitleStyle, marginBottom: '0' }}>SafiPro: International Commerce</h2>
          </div>
          <p style={paragraphStyle}>
            Beyond finance and tech, Safi International Capital believes in the power of branding and lifestyle. SafiPro is our premium e-commerce and apparel division, focused on delivering high-quality, modern design to a global audience. We oversee every step of the process—from the initial design concept to the final international delivery. 
          </p>
          <p style={paragraphStyle}>
            SafiPro represents our commitment to excellence in the physical world. By utilizing a sophisticated global supply chain, we ensure that our customers receive products that meet international luxury standards. It is more than just clothing; it is a statement of professional and personal prestige, crafted for those who demand the best in every aspect of life.
          </p>
        </div>

        {/* --- 5. THE MISSION STATEMENT --- */}
        <section style={{ textAlign: 'center', padding: '120px 0', borderTop: '1px solid #111' }}>
            <h2 style={sectionTitleStyle}>Our Unwavering Mission</h2>
            <p style={{ ...paragraphStyle, textAlign: 'center', maxWidth: '900px', margin: '0 auto', fontSize: '22px', color: '#fff' }}>
              "To dissolve the artificial borders of the global economy through innovation, ensuring that every individual, regardless of their location, has the tools to achieve financial and digital independence."
            </p>
            <div style={{ marginTop: '50px', letterSpacing: '4px', fontWeight: 'bold', color: '#C5A028' }}>SHAHEEN SAFI | FOUNDER</div>
        </section>

      </section>

      {/* --- FOOTER --- */}
      <footer style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid #111', color: '#555', fontSize: '13px', background: '#050505' }}>
        <p>Safi International Capital LTD | 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
        <p style={{ marginTop: '10px' }}>&copy; 2026 Official Corporate Portal. All Rights Reserved.</p>
      </footer>
    </main>
  );
}