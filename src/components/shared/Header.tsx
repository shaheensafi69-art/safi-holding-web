'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // تشخیص اسکرول برای تغییر حالت هدر
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // پالت رنگی هدر
  const theme = {
    goldMid: '#C5A028',
    goldLight: '#FCE792',
    goldDark: '#8A6D1C',
    goldGlow: 'rgba(197, 160, 40, 0.4)',
    blackGlass: 'rgba(5, 5, 5, 0.85)',
    borderGlass: 'rgba(255, 255, 255, 0.08)'
  };

  // استایل دکمه‌های معمولی 3D
  const nav3DStyle = {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    padding: '12px 25px',
    borderRadius: '12px',
    border: `1px solid ${theme.borderGlass}`,
    background: `linear-gradient(145deg, rgba(20,20,20,0.6), rgba(0,0,0,0.8))`,
    boxShadow: `4px 4px 10px rgba(0,0,0,0.6), -2px -2px 8px rgba(255,255,255,0.03)`,
    transition: 'all 0.3s ease',
    transformStyle: 'preserve-3d' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // استایل دکمه ویژه Contact (طلایی 3D)
  const contact3DStyle = {
    ...nav3DStyle,
    color: theme.blackGlass,
    background: `linear-gradient(145deg, ${theme.goldMid}, ${theme.goldDark})`,
    border: `1px solid ${theme.goldLight}`,
    boxShadow: `0 8px 20px ${theme.goldGlow}, inset 0 2px 5px ${theme.goldLight}`,
    fontWeight: '900',
  };

  const navLinks = ['HOME', 'ABOUT', 'SERVICES'];

  return (
    <>
      {/* CSS برای ریسپانسیو کردن هدر در دسکتاپ و موبایل */}
      <style>{`
        .desktop-nav { display: flex; gap: 15px; align-items: center; }
        .mobile-toggle { display: none; background: transparent; border: none; cursor: pointer; }
        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: flex; align-items: center; justify-content: center; }
        }
      `}</style>

      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: isScrolled ? '90px' : '110px', 
          backgroundColor: isScrolled ? theme.blackGlass : 'rgba(5, 5, 5, 0.3)', 
          backdropFilter: 'blur(15px)', 
          WebkitBackdropFilter: 'blur(15px)',
          borderBottom: isScrolled ? `1px solid rgba(197, 160, 40, 0.2)` : '1px solid transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          transition: 'all 0.4s ease',
          boxShadow: isScrolled ? `0 10px 30px rgba(0,0,0,0.8)` : 'none',
          perspective: '1000px'
        }}>
        
        <div style={{
          width: '92%',
          maxWidth: '1400px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transformStyle: 'preserve-3d'
        }}>
          
          {/* --- بخش لوگو --- */}
          <motion.a 
            href="/" 
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px', transformStyle: 'preserve-3d' }}
          >
            <img 
              src="/logo.png" 
              alt="Safi Capital" 
              style={{ 
                height: isScrolled ? '60px' : '75px', 
                width: 'auto', 
                transition: '0.4s ease',
                filter: `drop-shadow(0 5px 10px ${theme.goldGlow})`,
                transform: 'translateZ(20px)'
              }} 
            />
            <div style={{ display: 'flex', flexDirection: 'column', transform: 'translateZ(10px)' }}>
              <span style={{ 
                color: theme.goldMid, fontSize: isScrolled ? '24px' : '28px', fontWeight: '900', 
                letterSpacing: '-1px', lineHeight: '1', transition: '0.4s',
                textShadow: `0 2px 5px rgba(0,0,0,1)`
              }}>
                SAFI <span style={{ color: 'white' }}>CAPITAL</span>
              </span>
              <span style={{ 
                color: '#888', fontSize: '9px', fontWeight: 'bold', letterSpacing: '3px', 
                marginTop: '4px', textTransform: 'uppercase'
              }}>
                International LTD
              </span>
            </div>
          </motion.a>

          {/* --- منوی دسکتاپ --- */}
          <nav className="desktop-nav">
            {navLinks.map((item) => (
              <motion.a
                key={item}
                href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  borderColor: theme.goldMid, 
                  color: '#fff',
                  boxShadow: `0 10px 20px rgba(0,0,0,0.8), 0 0 15px ${theme.goldGlow}`
                }}
                whileTap={{ scale: 0.95 }}
                style={nav3DStyle}
              >
                {item}
              </motion.a>
            ))}
            
            <motion.a 
              href="/contact"
              whileHover={{ 
                scale: 1.08, 
                y: -3,
                boxShadow: `0 15px 30px rgba(0,0,0,0.9), 0 0 25px ${theme.goldGlow}` 
              }}
              whileTap={{ scale: 0.95 }}
              style={contact3DStyle}
            >
              CONTACT
            </motion.a>
          </nav>

          {/* --- دکمه همبرگری موبایل --- */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              padding: '10px', 
              border: `1px solid ${theme.goldMid}`, 
              borderRadius: '8px',
              background: 'rgba(0,0,0,0.5)',
              color: theme.goldMid
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

        </div>
      </motion.header>

      {/* --- منوی بازشوی موبایل (Mobile Menu Overlay) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: isScrolled ? '90px' : '110px',
              left: 0,
              width: '100%',
              backgroundColor: 'rgba(5,5,5,0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: `1px solid ${theme.goldMid}`,
              zIndex: 9998,
              display: 'flex',
              flexDirection: 'column',
              padding: '20px 5%',
              boxShadow: '0 20px 40px rgba(0,0,0,0.9)'
            }}
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  padding: '15px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  textAlign: 'center'
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: theme.blackGlass,
                backgroundColor: theme.goldMid,
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '900',
                letterSpacing: '2px',
                padding: '15px 0',
                borderRadius: '10px',
                textAlign: 'center',
                marginTop: '20px',
                boxShadow: `0 5px 15px ${theme.goldGlow}`
              }}
            >
              CONTACT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}