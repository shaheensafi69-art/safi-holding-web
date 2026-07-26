'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  // تِم اختصاصی: فقط مشکی و طلایی لوکس
  const theme = {
    black: '#000000',
    darkBg: '#050505',
    goldLight: '#FCE792',
    goldMid: '#C5A028',
    goldDark: '#8A6D1C',
    goldGlow: 'rgba(197, 160, 40, 0.12)',
  };

  const columnTitleStyle = {
    color: theme.goldMid,
    fontSize: '13px',
    fontWeight: '900',
    letterSpacing: '3px',
    marginBottom: '25px',
    textTransform: 'uppercase' as const,
    textShadow: `0 2px 10px ${theme.goldGlow}`
  };

  // کامپوننت لینک سه‌بعدی تعاملی برای داخل فوتر
  const ThreeDLink = ({ href, text, target }: { href: string; text: string; target?: string }) => (
    <motion.div
      whileHover={{ x: 5, translateZ: 15 }}
      style={{ marginBottom: '14px', transformStyle: 'preserve-3d', width: 'fit-content' }}
    >
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        style={{
          color: '#888',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'color 0.3s ease',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = theme.goldLight}
        onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
      >
        {text}
      </a>
    </motion.div>
  );

  return (
    <footer style={{
      width: '100%',
      backgroundColor: theme.black,
      padding: '120px 5% 40px 5%',
      position: 'relative',
      overflow: 'hidden',
      borderTop: `1px solid rgba(197, 160, 40, 0.15)`,
      boxShadow: `0 -15px 40px rgba(0, 0, 0, 0.9)`,
      perspective: '1000px'
    }}>
      
      {/* پارتیکل‌های معلق طلایی پس‌زمینه */}
      <div style={{ 
        position: 'absolute', inset: 0, 
        backgroundImage: `radial-gradient(${theme.goldDark} 1px, transparent 1px)`, 
        backgroundSize: '40px 40px', opacity: 0.04, pointerEvents: 'none' 
      }} />

      {/* خط درخشان طلایی بالای فوتر */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
        background: `linear-gradient(to right, transparent, ${theme.goldMid}, transparent)`,
        boxShadow: `0 0 15px ${theme.goldMid}`
      }} />

      <div style={{ 
        width: '100%', maxWidth: '1400px', margin: '0 auto', 
        position: 'relative', zIndex: 1, transformStyle: 'preserve-3d' 
      }}>
        
        {/* --- گرید اصلی بخش‌های فوتر --- */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '50px',
          paddingBottom: '80px',
          borderBottom: '1px solid rgba(197, 160, 40, 0.1)',
          transformStyle: 'preserve-3d'
        }}>
          
          {/* ۱. ستون برند و لوگوی جدید */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', transform: 'translateZ(20px)' }}>
            <img src="/SafiAi.png" alt="Safi Logo" style={{ height: '50px', marginBottom: '25px', filter: `drop-shadow(0 4px 10px ${theme.goldGlow})` }} />
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.8', maxWidth: '280px', textAlign: 'justify' }}>
              A premier investment and fintech infrastructure hub, driving global innovation and digital transformation under absolute standards of corporate excellence.
            </p>
          </div>

          {/* ۲. ستون ناوبری */}
          <div style={{ transformStyle: 'preserve-3d' }}>
            <h4 style={columnTitleStyle}>Navigation</h4>
            <ThreeDLink href="/" text="Home Portal" />
            <ThreeDLink href="/about" text="About Executive" />
            <ThreeDLink href="/services" text="Global Infrastructure" />
            <ThreeDLink href="/contact" text="Corporate Contact" />
          </div>

          {/* ۳. ستون اکوسیستم (شامل هوش مصنوعی) */}
          <div style={{ transformStyle: 'preserve-3d' }}>
            <h4 style={columnTitleStyle}>Ecosystem</h4>
            <ThreeDLink href="https://safiai.site" text="Safi AI Platform" target="_blank" />
            <ThreeDLink href="https://www.safipay.net" text="SafiPay NeoBanking" target="_blank" />
            <ThreeDLink href="https://www.safitopup.site" text="Safi TopUp Network" target="_blank" />
            <ThreeDLink href="https://www.safipro.site" text="SafiPro International" target="_blank" />
            <ThreeDLink href="https://www.safiacademy.org" text="Safi Academy Portal" target="_blank" />
            <ThreeDLink href="https://www.shaheensafi.blog" text="Founder's Technical Blog" target="_blank" />
          </div>

          {/* ۴. ستون قوانین حقوقی */}
          <div style={{ transformStyle: 'preserve-3d' }}>
            <h4 style={columnTitleStyle}>Governance</h4>
            <ThreeDLink href="/privacy" text="Privacy Policy" />
            <ThreeDLink href="/terms" text="Terms of Service" />
            <div style={{ 
              marginTop: '25px', color: theme.goldLight, fontSize: '11px', fontWeight: 'bold', 
              letterSpacing: '2px', border: `1px solid ${theme.goldDark}`, padding: '8px 15px', 
              borderRadius: '6px', width: 'fit-content', background: theme.darkBg,
              boxShadow: `inset 0 0 5px rgba(0,0,0,1)`
            }}>
              REG NO: 17063286
            </div>
          </div>

          {/* ۵. ستون دفتر مرکزی لندن */}
          <div style={{ transform: 'translateZ(20px)' }}>
            <h4 style={columnTitleStyle}>Headquarters</h4>
            <p style={{ color: '#777', fontSize: '13px', lineHeight: '1.9', fontWeight: '500' }}>
              71-75 Shelton Street,<br />
              Covent Garden, London,<br />
              WC2H 9JQ, United Kingdom
            </p>
          </div>
        </div>

        {/* --- بخش کپی‌رایت نهایی --- */}
        <div style={{ paddingTop: '40px', textAlign: 'center', transform: 'translateZ(10px)' }}>
          <p style={{ color: '#444', fontSize: '10px', letterSpacing: '3px', fontWeight: 'bold' }}>
            © {new Date().getFullYear()} SAFI INTERNATIONAL CAPITAL LTD. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}