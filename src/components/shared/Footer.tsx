'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const linkStyle = {
    color: '#888',
    textDecoration: 'none',
    fontSize: '14px',
    transition: '0.3s',
    marginBottom: '12px',
    display: 'block'
  };

  const columnTitleStyle = {
    color: '#C5A028',
    fontSize: '12px',
    fontWeight: '900',
    letterSpacing: '2px',
    marginBottom: '25px',
    textTransform: 'uppercase' as const
  };

  return (
    <footer style={{
      width: '100%',
      background: 'radial-gradient(circle at bottom, #0a0e17 0%, #050505 100%)',
      padding: '100px 0 40px 0',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid #1a1a1a',
      marginTop: '100px'
    }}>
      {/* Galaxy Effect Animation */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(white, rgba(255,255,255,0.1) 1px, transparent 30px)',
          backgroundSize: '80px 80px', pointerEvents: 'none'
        }}></motion.div>

      <div style={{ width: '90%', maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* --- بخش لینک‌ها و اطلاعات --- */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '50px',
          paddingBottom: '80px',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
          {/* ستون برند */}
          <div style={{ gridColumn: 'span 1' }}>
            <img src="/logo.png" alt="Safi Logo" style={{ height: '45px', marginBottom: '25px' }} />
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.8', maxWidth: '250px' }}>
              A premier investment and fintech infrastructure hub, driving global innovation from the heart of London.
            </p>
          </div>

          {/* ستون ناوبری */}
          <div>
            <h4 style={columnTitleStyle}>Navigation</h4>
            <a href="/" style={linkStyle}>Home</a>
            <a href="/about" style={linkStyle}>About Us</a>
            <a href="/services" style={linkStyle}>Services</a>
            <a href="/contact" style={linkStyle}>Contact</a>
          </div>

          {/* ستون خدمات اختصاصی */}
          <div>
            <h4 style={columnTitleStyle}>Ecosystem</h4>
            <a href="/services" style={linkStyle}>SafiPay Banking</a>
            <a href="/services" style={linkStyle}>Safi TopUp</a>
            <a href="https://www.safipro.site" target="_blank" style={linkStyle}>SafiPro Apparel</a>
            <a href="https://www.shaheensafi.blog" target="_blank" style={linkStyle}>Educational Blog</a>
          </div>

          {/* ستون حقوقی - جدید */}
          <div>
            <h4 style={columnTitleStyle}>Legal</h4>
            <a href="/privacy" style={linkStyle}>Privacy Policy</a>
            <a href="/terms" style={linkStyle}>Terms of Service</a>
            <div style={{ marginTop: '20px', color: '#444', fontSize: '11px', fontWeight: 'bold' }}>
              REG NO: 17063286
            </div>
          </div>

          {/* ستون آدرس لندن */}
          <div>
            <h4 style={columnTitleStyle}>Headquarters</h4>
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.8' }}>
              71-75 Shelton Street,<br />
              Covent Garden, London,<br />
              WC2H 9JQ, United Kingdom
            </p>
          </div>
        </div>

        {/* بخش کپی‌رایت نهایی */}
        <div style={{ paddingTop: '40px', textAlign: 'center' }}>
          <p style={{ color: '#333', fontSize: '10px', letterSpacing: '3px', fontWeight: 'bold' }}>
            © 2026 SAFI INTERNATIONAL CAPITAL LTD. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}