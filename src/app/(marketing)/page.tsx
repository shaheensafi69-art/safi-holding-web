'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  // پالت رنگی اختصاصی، مدرن و فوق‌العاده لوکس
  const theme = {
    black: '#000000',
    darkBg: '#080808',
    cardBg: '#0c0c0c',
    goldLight: '#FCE792',
    goldMid: '#D4AF37',
    goldDark: '#8A6D1C',
    goldGlow: 'rgba(212, 175, 55, 0.2)',
    borderGlow: 'rgba(212, 175, 55, 0.3)',
  };

  // استایل دکمه‌های ۳ بعدی پیشرفته
  const btn3DStyle = {
    background: `linear-gradient(135deg, #1a1608 0%, ${theme.black} 100%)`,
    border: `1px solid ${theme.goldMid}`,
    color: theme.goldLight,
    padding: '18px 50px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '800',
    textTransform: 'uppercase' as const,
    letterSpacing: '2.5px',
    cursor: 'pointer',
    boxShadow: `0 15px 35px ${theme.goldGlow}, inset 0 0 15px rgba(212,175,55,0.1)`,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    textDecoration: 'none',
    display: 'inline-block',
  };

  // کامپوننت کارت سه‌بعدی (3D Card) با دیزاین بسیار شیک و عمق‌دار
  const ThreeDCard = ({ title, desc, link, imageStr, alt }: any) => (
    <motion.div
      whileHover={{ scale: 1.03, rotateY: 5, rotateX: -5, y: -8 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      style={{
        backgroundColor: theme.black,
        borderRadius: '20px',
        padding: '2px', // ایجاد حاشیه گرادیانت طلایی خیره‌کننده
        background: `linear-gradient(145deg, ${theme.goldMid}, rgba(255,255,255,0.05) 40%, ${theme.goldDark})`,
        boxShadow: `0 20px 40px rgba(0,0,0,0.8), 0 0 25px ${theme.goldGlow}`,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '440px',
      }}
    >
      <div style={{
        backgroundColor: theme.cardBg,
        borderRadius: '18px',
        height: '100%',
        padding: '45px 30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transform: 'translateZ(25px)',
        border: '1px solid rgba(255,255,255,0.03)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ 
            height: '75px', 
            marginBottom: '30px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            filter: `drop-shadow(0 8px 20px ${theme.goldGlow})`
          }}>
            <img src={imageStr} alt={alt} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
          </div>
          <h3 style={{ 
            color: theme.goldLight, 
            fontSize: '22px', 
            fontWeight: '900', 
            marginBottom: '15px', 
            textAlign: 'center', 
            letterSpacing: '1px',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            {title}
          </h3>
          <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.8', textAlign: 'center' }}>
            {desc}
          </p>
        </div>
        
        <div style={{ marginTop: '35px', textAlign: 'center' }}>
          <a href={link} target="_blank" rel="noopener noreferrer" style={{
            color: theme.goldMid, 
            fontWeight: '700', 
            textDecoration: 'none', 
            fontSize: '12px', 
            letterSpacing: '2px', 
            borderBottom: `2px solid ${theme.goldDark}`, 
            paddingBottom: '6px', 
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}>
            ENTER PORTAL ➔
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <main style={{ 
      width: '100%', 
      backgroundColor: theme.black, 
      color: '#fff', 
      overflowX: 'hidden', // فیکس کامل اسکرول افقی
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    }}>

      {/* --- HERO SECTION 3D --- */}
      <section style={{
        width: '100%', 
        minHeight: '92vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative', 
        perspective: '1200px', 
        overflow: 'hidden', // جلوگیری از بیرون زدن انیمیشن پس‌زمینه
        padding: '80px 5%'
      }}>
        {/* پس‌زمینه کهکشانی و نورپردازی لوکس */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <motion.div 
            animate={{ rotateZ: 360, scale: [1, 1.15, 1] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute', width: '140%', height: '140%', top: '-20%', left: '-20%',
              background: `radial-gradient(circle at 50% 50%, #161105 0%, ${theme.black} 65%)`,
            }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${theme.goldDark} 1px, transparent 1px)`, backgroundSize: '60px 60px', opacity: 0.08 }} />
        </div>

        <motion.div 
          initial={{ opacity: 0, rotateX: 15, y: 40 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1.2, type: 'spring' }}
          style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', maxWidth: '1200px', transformStyle: 'preserve-3d' }}
        >
          <motion.div whileHover={{ scale: 1.01 }} style={{ cursor: 'default' }}>
            <span style={{ 
              color: theme.goldMid, 
              fontWeight: '700', 
              fontSize: '13px', 
              letterSpacing: '6px', 
              textTransform: 'uppercase', 
              display: 'inline-block', 
              marginBottom: '20px',
              textShadow: `0 0 15px ${theme.goldGlow}`
            }}>
              Premier Global Holding
            </span>
            
            <h1 style={{ 
              fontSize: 'clamp(38px, 6.5vw, 85px)', 
              fontWeight: '900', 
              margin: '0 0 25px 0',
              lineHeight: '1.1',
              background: `linear-gradient(to right, ${theme.goldMid}, ${theme.goldLight}, ${theme.goldMid})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: `drop-shadow(0px 15px 35px rgba(212,175,55,0.3))`,
              transform: 'translateZ(40px)'
            }}>
              SAFI INTERNATIONAL<br/>CAPITAL LTD
            </h1>
          </motion.div>
          
          <p style={{ 
            color: '#aaa', 
            fontSize: 'clamp(15px, 1.8vw, 20px)', 
            maxWidth: '800px', 
            margin: '0 auto 45px auto', 
            lineHeight: '1.9',
            transform: 'translateZ(20px)'
          }}>
            A premier global investment & technology holding company.<br/>
            Registered in the United Kingdom (No: 17063286 | SIC: 66190).
          </p>

          <motion.a 
            href="#ecosystem"
            whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${theme.goldMid}` }}
            whileTap={{ scale: 0.95 }}
            style={{ ...btn3DStyle, transform: 'translateZ(30px)' }}
          >
            DISCOVER THE ECOSYSTEM
          </motion.a>
        </motion.div>
      </section>

      {/* --- ECOSYSTEM SECTION 3D GRID --- */}
      <section id="ecosystem" style={{
        width: '100%', 
        padding: '140px 5%', 
        backgroundColor: theme.black, 
        position: 'relative', 
        zIndex: 3,
        borderTop: `1px solid rgba(212, 175, 55, 0.12)`, 
        boxShadow: `0 -25px 60px rgba(0,0,0,0.9)`,
        overflow: 'hidden'
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 4.5vw, 50px)', 
            fontWeight: '900', 
            color: theme.goldLight, 
            textShadow: `0 5px 25px ${theme.goldGlow}`, 
            letterSpacing: '2px',
            marginBottom: '15px'
          }}>
            GLOBAL INFRASTRUCTURE
          </h2>
          <p style={{ color: '#777', fontSize: '14px', letterSpacing: '1px' }}>Explore our elite portfolio of advanced tech & fintech verticals</p>
          <div style={{ width: '90px', height: '3px', background: `linear-gradient(to right, transparent, ${theme.goldMid}, transparent)`, margin: '25px auto', borderRadius: '2px', boxShadow: `0 0 15px ${theme.goldMid}` }} />
        </div>

        {/* گرید تمام‌صفحه و منظم */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '35px', 
          width: '100%',
          maxWidth: '1400px', 
          margin: '0 auto',
          perspective: '1500px'
        }}>
          <ThreeDCard 
            title="Safi AI" 
            desc="The Chief AI Assistant and official spokesperson of the Safi Ecosystem, executing intelligent brand representation."
            link="https://safiai.site"
            imageStr="/SafiAi.png"
            alt="Safi AI"
          />
          <ThreeDCard 
            title="SafiPay" 
            desc="Advanced digital banking providing multi-currency accounts and instant global Visa cards for seamless international transactions."
            link="https://www.safipay.net"
            imageStr="/safipay.png"
            alt="SafiPay"
          />
          <ThreeDCard 
            title="Safi TopUp" 
            desc="Instant mobile credit and data transfers to 700+ operators in over 150 countries. Global connectivity verified."
            link="https://www.safitopup.site"
            imageStr="/safitopup.png"
            alt="Safi TopUp"
          />
          <ThreeDCard 
            title="SafiPro" 
            desc="High-end international apparel and e-commerce brand defined by modern aesthetic, quality craftsmanship, and global reach."
            link="https://www.safipro.site"
            imageStr="/safipro.png"
            alt="SafiPro"
          />
          <ThreeDCard 
            title="Safi Academy"
            desc="Advanced educational portal administering professional IT and digital financial certification curricula and institutional pathways."
            link="https://www.safiacademy.org"
            imageStr="/safi-academy.png"
            alt="Safi Academy"
          />
        </div>
      </section>

      {/* --- FOUNDER SECTION 3D --- */}
      <section style={{ 
        width: '100%', 
        padding: '140px 5%', 
        backgroundColor: theme.darkBg, 
        borderTop: `1px solid rgba(212, 175, 55, 0.08)`, 
        overflow: 'hidden', 
        perspective: '1000px',
        position: 'relative'
      }}>
        <div style={{ 
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', 
          gap: '60px', width: '100%', maxWidth: '1400px', margin: '0 auto' 
        }}>
          
          <motion.div 
            initial={{ opacity: 0, rotateY: -15, x: -40 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 420px', transformStyle: 'preserve-3d' }}
          >
            <h4 style={{ color: theme.goldMid, fontWeight: '800', letterSpacing: '5px', fontSize: '13px', marginBottom: '20px' }}>VISION & LEADERSHIP</h4>
            <h2 style={{ fontSize: 'clamp(40px, 6.5vw, 70px)', fontWeight: '900', color: theme.goldLight, margin: '0 0 30px 0', lineHeight: '1.05' }}>
              SHAHEEN<br/>SAFI
            </h2>
            <p style={{ color: '#aaa', fontSize: '16px', lineHeight: '2.1', marginBottom: '45px', maxWidth: '540px' }}>
              "Driving financial inclusion and digital innovation across global markets."<br/><br/>
              Explore the strategic blueprint of the Safi Ecosystem, deep-dive into Fintech infrastructures, and discover the future of global digital economies.
            </p>
            <motion.a 
              href="https://www.shaheensafi.blog" 
              target="_blank"
              whileHover={{ scale: 1.05, background: theme.goldMid, color: theme.black }}
              style={{ ...btn3DStyle, background: theme.black, borderColor: theme.goldDark, color: theme.goldMid }}
            >
              ACCESS FOUNDER'S LOG
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotateY: 15, x: 40 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 420px', position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            {/* قاب سه‌بعدی طلایی فوق‌العاده شیک عکس موسس */}
            <div style={{ position: 'relative', padding: '25px', width: '100%', maxWidth: '440px' }}>
              <div style={{ 
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                border: `2px solid ${theme.goldMid}`, borderRadius: '24px', 
                transform: 'translateZ(-25px) rotate(-3deg)', 
                boxShadow: `0 0 35px ${theme.goldGlow}`,
                background: 'linear-gradient(135deg, rgba(212,175,55,0.1), transparent)'
              }} />
              <img 
                src="/safi.png" 
                alt="Shaheen Safi" 
                style={{ 
                  width: '100%', 
                  borderRadius: '18px', 
                  position: 'relative', 
                  zIndex: 2,
                  boxShadow: '0 35px 60px rgba(0,0,0,0.9)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }} 
              />
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}