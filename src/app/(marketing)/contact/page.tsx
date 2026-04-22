'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const luxuryCard = {
    background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.9) 0%, rgba(5, 5, 5, 1) 100%)',
    border: '1px solid rgba(197, 160, 40, 0.15)',
    borderRadius: '40px',
    padding: '40px',
    position: 'relative' as const,
    overflow: 'hidden',
    transition: '0.5s cubic-bezier(0.23, 1, 0.32, 1)'
  };

  const goldAccent = {
    position: 'absolute' as const,
    top: '-20%',
    right: '-10%',
    width: '150px',
    height: '150px',
    background: 'radial-gradient(circle, rgba(197, 160, 40, 0.15) 0%, transparent 70%)',
    zIndex: 0
  };

  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000', color: 'white', overflow: 'hidden' }}>
      
      {/* --- KINETIC BACKGROUND --- */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{
            position: 'absolute', top: '10%', left: '15%', width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(197, 160, 40, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1, padding: '180px 5% 100px 5%', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* --- DECONSTRUCTED HEADER --- */}
        <div style={{ marginBottom: '120px' }}>
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h1 style={{ fontSize: 'clamp(50px, 12vw, 120px)', fontWeight: '900', lineHeight: '0.8', letterSpacing: '-4px' }}>
              LET'S <br /> <span style={{ color: '#C5A028' }}>CONNECT.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ marginTop: '30px', color: '#555', fontSize: '20px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            London • Dubai • Istanbul • Kabul
          </motion.p>
        </div>

        {/* --- DYNAMIC CONTACT GRID --- */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* THE MASTER CONNECT (WhatsApp/Telegram Combined) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            style={{ ...luxuryCard, gridColumn: 'span 2', background: 'rgba(255,255,255,0.02)' }}
          >
            <div style={goldAccent} />
            <h2 style={{ fontSize: '12px', color: '#C5A028', letterSpacing: '4px', marginBottom: '30px' }}>SECURE LINE</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center' }}>
              <div style={{ fontSize: '45px', fontWeight: 'bold' }}>+44 74 7662 0282</div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="https://wa.me/447476620282" style={{ color: '#25D366', textDecoration: 'none', border: '1px solid #25D366', padding: '10px 20px', borderRadius: '50px', fontSize: '14px' }}>WHATSAPP</a>
                <a href="https://t.me/safipayltd" style={{ color: '#0088cc', textDecoration: 'none', border: '1px solid #0088cc', padding: '10px 20px', borderRadius: '50px', fontSize: '14px' }}>TELEGRAM</a>
              </div>
            </div>
          </motion.div>

          {/* SAFIPAY BOX */}
          <motion.div whileHover={{ borderColor: '#C5A028' }} style={luxuryCard}>
             <div style={{ fontSize: '30px', marginBottom: '20px' }}>⚖️</div>
             <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Fintech Operations</h3>
             <a href="mailto:info@safipay.net" style={{ color: '#888', textDecoration: 'none', marginTop: '10px', display: 'block' }}>info@safipay.net</a>
          </motion.div>

          {/* SAFITOPUP BOX */}
          <motion.div whileHover={{ borderColor: '#fff' }} style={luxuryCard}>
             <div style={{ fontSize: '30px', marginBottom: '20px' }}>📡</div>
             <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Connectivity</h3>
             <a href="mailto:info@safitopup.site" style={{ color: '#888', textDecoration: 'none', marginTop: '10px', display: 'block' }}>info@safitopup.site</a>
          </motion.div>

          {/* SAFIPRO BOX */}
          <motion.div whileHover={{ borderColor: '#C5A028' }} style={luxuryCard}>
             <div style={{ fontSize: '30px', marginBottom: '20px' }}>💎</div>
             <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Luxury Commerce</h3>
             <a href="mailto:info@safipro.site" style={{ color: '#888', textDecoration: 'none', marginTop: '10px', display: 'block' }}>info@safipro.site</a>
          </motion.div>

          {/* BLOG BOX */}
          <motion.div whileHover={{ borderColor: '#fff' }} style={luxuryCard}>
             <div style={{ fontSize: '30px', marginBottom: '20px' }}>🖋️</div>
             <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Education</h3>
             <a href="mailto:info@shaheensafi.blog" style={{ color: '#888', textDecoration: 'none', marginTop: '10px', display: 'block' }}>info@shaheensafi.blog</a>
          </motion.div>

          {/* HOLDING BOX */}
          <motion.div whileHover={{ borderColor: '#C5A028' }} style={{ ...luxuryCard, gridColumn: 'span 2' }}>
             <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#C5A028' }}>Safi International Capital LTD</h3>
             <p style={{ color: '#555', marginTop: '10px' }}>Official Holding Entity • London HQ</p>
             <a href="mailto:info@safiinternationalcapitalltd.site" style={{ color: '#fff', textDecoration: 'none', marginTop: '15px', display: 'block', fontSize: '22px', fontWeight: '900' }}>info@safiinternationalcapitalltd.site</a>
          </motion.div>

        </div>

        {/* --- THE SIGNATURE FOOTER --- */}
        <div style={{ marginTop: '120px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#C5A028', fontWeight: 'bold', letterSpacing: '5px' }}>LEGAL RESIDENCE</div>
            <p style={{ color: '#444', marginTop: '10px' }}>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <img src="/logo.png" alt="Safi" style={{ height: '40px', opacity: 0.2 }} />
          </div>
        </div>

      </div>
    </main>
  );
}