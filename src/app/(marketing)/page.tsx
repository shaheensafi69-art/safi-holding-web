'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const businessCardStyle = {
    flex: '1',
    minWidth: '300px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '24px',
    border: '1px solid rgba(197, 160, 40, 0.2)',
    overflow: 'hidden' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    transition: '0.4s ease'
  };

  const btnStyle = {
    padding: '14px 28px',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    transition: '0.3s'
  };

  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000', color: 'white' }}>
      
      {/* --- HERO SECTION: EXTENSIVE COMPANY INFO --- */}
      <section style={{ 
        padding: '120px 5% 60px 5%', textAlign: 'center', position: 'relative', overflow: 'hidden' 
      }}>
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #000 80%)',
            zIndex: 0
          }}
        />
        
        <div style={{ position: 'relative', zIndex: 2 }}>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ fontSize: 'clamp(32px, 6vw, 65px)', fontWeight: '900', color: '#C5A028', marginBottom: '30px' }}
          >
            SAFI INTERNATIONAL CAPITAL LTD
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', color: '#aaa', fontSize: '18px', lineHeight: '1.8' }}
          >
            <p>
              <strong>Safi International Capital LTD</strong> is a premier global investment and technology holding company, officially registered in the United Kingdom (Company No: 17063286). Headquartered in the financial heart of London, our firm serves as a strategic bridge connecting emerging markets with global capital infrastructures. We specialize in the development of high-tier Fintech ecosystems, digital asset management, and international payment solutions designed to foster financial inclusion across the globe.
            </p>
            <br />
            <p>
              Guided by the vision of <strong>Shaheen Safi</strong> and supported by a dedicated executive team including <strong>Mujtaba Rahmani</strong> (Operations) and <strong>Sahel Salem</strong> (European Relations), our holding manages a diverse portfolio of market-leading brands. We operate under strict UK standards of excellence, ensuring security, transparency, and innovation in every venture—from digital banking and global credit transfers to international e-commerce and lifestyle branding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SUBSIDIARIES: THE THREE COMPANIES SIDE-BY-SIDE --- */}
      <section style={{ width: '94%', maxWidth: '1400px', margin: '60px auto 120px auto', position: 'relative', zIndex: 3 }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'nowrap', // Forces them to stay side-by-side on desktop
          gap: '20px', 
          justifyContent: 'center',
          overflowX: 'auto' // Allows scrolling on very small mobile screens
        }}>
          
          {/* SafiPay */}
          <motion.div whileHover={{ y: -10, borderColor: '#C5A028' }} style={businessCardStyle}>
            <div style={{ padding: '60px 40px', backgroundColor: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
              <img src="/safipay.png" alt="SafiPay" style={{ width: '100%', maxHeight: '80px', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>SafiPay</h3>
              <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '25px' }}>
                Advanced digital banking providing multi-currency accounts and instant global Visa cards.
              </p>
              <a href="https://www.safipay.net" target="_blank" style={{ ...btnStyle, border: '1px solid #C5A028', color: '#C5A028' }}>GO TO WEBSITE</a>
            </div>
          </motion.div>

          {/* Safi TopUp */}
          <motion.div whileHover={{ y: -10, borderColor: '#C5A028' }} style={businessCardStyle}>
            <div style={{ padding: '60px 40px', backgroundColor: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
              <img src="/safitopup.png" alt="Safi TopUp" style={{ width: '100%', maxHeight: '80px', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>Safi TopUp</h3>
              <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '25px' }}>
                Instant mobile credit and data transfers to 700+ operators in over 150 countries.
              </p>
              <a href="https://www.safitopup.site" target="_blank" style={{ ...btnStyle, border: '1px solid #C5A028', color: '#C5A028' }}>GO TO WEBSITE</a>
            </div>
          </motion.div>

          {/* SafiPro */}
          <motion.div whileHover={{ y: -10, borderColor: '#C5A028' }} style={businessCardStyle}>
            <div style={{ padding: '60px 40px', backgroundColor: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
              <img src="/safipro.png" alt="SafiPro" style={{ width: '100%', maxHeight: '80px', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>SafiPro</h3>
              <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '25px' }}>
                High-end international apparel and e-commerce brand defined by modern style.
              </p>
              <a href="https://www.safipro.site" target="_blank" style={{ ...btnStyle, border: '1px solid #C5A028', color: '#C5A028' }}>GO TO WEBSITE</a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- PERSONAL SECTION: SHAHEEN SAFI --- */}
      <section style={{ width: '100%', padding: '100px 0', backgroundColor: '#050505', borderTop: '1px solid #111' }}>
        <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
          
          <div style={{ flex: '1', minWidth: '320px' }}>
            <span style={{ color: '#C5A028', fontWeight: 'bold', letterSpacing: '4px', fontSize: '12px' }}>FOUNDER & CEO</span>
            <h2 style={{ fontSize: '50px', fontWeight: '900', margin: '20px 0' }}>SHAHEEN SAFI</h2>
            <p style={{ color: '#888', fontSize: '18px', lineHeight: '1.9', marginBottom: '35px' }}>
              Welcome to my official personal space and professional blog. Here, I document the journey of 
              building the Safi ecosystem, providing deep-dive insights into Fintech innovation, 
              strategic entrepreneurship, and the future of global digital economies.
            </p>
            <motion.a 
              href="https://www.shaheensafi.blog" 
              target="_blank"
              whileHover={{ backgroundColor: '#fff', color: '#000' }}
              style={{ ...btnStyle, backgroundColor: '#C5A028', color: '#000', padding: '18px 45px', display: 'inline-block' }}>
              EXPLORE PERSONAL BLOG
            </motion.a>
          </div>

          <div style={{ flex: '1', minWidth: '320px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', top: '-15px', left: '-15px', right: '15px', bottom: '15px', 
                border: '1px solid #C5A028', borderRadius: '40px', zIndex: 0 
              }} />
              <motion.img 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="/safi.png" 
                alt="Shaheen Safi" 
                style={{ 
                  width: '100%', borderRadius: '40px', position: 'relative', zIndex: 1,
                  boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
                }} 
              />
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}