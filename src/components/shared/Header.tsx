'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const navBoxStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    padding: '12px 24px',
    borderRadius: '14px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    transition: 'all 0.3s ease',
    display: 'inline-block',
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '110px', 
        backgroundColor: 'rgba(5, 5, 5, 0.4)', 
        backdropFilter: 'blur(10px)', 
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(197, 160, 40, 0.15)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}>
      <div style={{
        width: '92%',
        maxWidth: '1400px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        
        {/* بخش لوگو و نام برند */}
        <motion.a 
          href="/" 
          whileHover={{ scale: 1.02 }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img 
            src="/logo.png" 
            alt="Safi International" 
            style={{ 
              height: '80px', 
              width: 'auto'
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              color: '#C5A028', 
              fontSize: '28px', 
              fontWeight: '900', 
              letterSpacing: '-1px',
              lineHeight: '1'
            }}>
              SAFI <span style={{ color: 'white' }}>CAPITAL</span>
            </span>
            <span style={{ 
              color: '#666', 
              fontSize: '10px', 
              fontWeight: 'bold', 
              letterSpacing: '3px',
              marginTop: '5px',
              textTransform: 'uppercase'
            }}>
              International LTD
            </span>
          </div>
        </motion.a>

        {/* منوی دکمه‌ای */}
        <nav style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {['HOME', 'ABOUT', 'SERVICES'].map((item) => (
            <motion.a
              key={item}
              href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
              whileHover={{ scale: 1.05, borderColor: '#C5A028', backgroundColor: 'rgba(197, 160, 40, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              style={navBoxStyle}
            >
              {item}
            </motion.a>
          ))}
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(197, 160, 40, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              ...navBoxStyle,
              backgroundColor: '#C5A028',
              color: 'black',
              borderColor: '#C5A028',
              fontWeight: '900',
              boxShadow: '0 8px 20px rgba(197, 160, 40, 0.3)'
            }}>
            CONTACT
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}