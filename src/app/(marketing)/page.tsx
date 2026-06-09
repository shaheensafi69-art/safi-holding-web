'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  // پالت رنگی اختصاصی و لوکس (فقط مشکی و طیف‌های طلایی)
  const theme = {
    black: '#000000',
    darkBg: '#050505',
    goldLight: '#FCE792',
    goldMid: '#D4AF37',
    goldDark: '#8A6D1C',
    goldGlow: 'rgba(212, 175, 55, 0.15)',
  };

  // استایل دکمه‌های ۳ بعدی
  const btn3DStyle = {
    background: `linear-gradient(145deg, ${theme.darkBg}, ${theme.black})`,
    border: `1px solid ${theme.goldMid}`,
    color: theme.goldLight,
    padding: '16px 45px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
    cursor: 'pointer',
    boxShadow: `0 10px 20px ${theme.goldGlow}, inset 0 0 10px rgba(0,0,0,1)`,
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
  };

  // کامپوننت کارت سه‌بعدی (3D Card) با دیزاین اختصاصی
  const ThreeDCard = ({ title, desc, link, imageStr, alt }: any) => (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 8, rotateX: -8, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        backgroundColor: theme.black,
        borderRadius: '16px',
        padding: '1px', // ایجاد حاشیه طلایی ظریف
        background: `linear-gradient(135deg, ${theme.goldDark}, ${theme.black} 60%, ${theme.goldMid})`,
        boxShadow: `0 15px 35px rgba(0,0,0,0.9), 0 0 20px ${theme.goldGlow}`,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '420px',
      }}
    >
      <div style={{
        backgroundColor: theme.darkBg,
        borderRadius: '15px',
        height: '100%',
        padding: '40px 25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transform: 'translateZ(30px)', // برجسته کردن محتوای روی کارت
        border: '1px solid rgba(255,255,255,0.02)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ height: '70px', marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={imageStr} alt={alt} style={{ maxHeight: '100%', maxWidth: '100%', filter: `drop-shadow(0 5px 15px ${theme.goldGlow})` }} />
          </div>
          <h3 style={{ color: theme.goldMid, fontSize: '24px', fontWeight: '900', marginBottom: '15px', textAlign: 'center', letterSpacing: '1px' }}>
            {title}
          </h3>
          <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.9', textAlign: 'center' }}>
            {desc}
          </p>
        </div>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <a href={link} target="_blank" rel="noopener noreferrer" style={{
            color: theme.goldLight, fontWeight: 'bold', textDecoration: 'none', fontSize: '13px', borderBottom: `1px solid ${theme.goldDark}`, paddingBottom: '4px', letterSpacing: '1px', transition: '0.3s'
          }}>
            ENTER PORTAL ➔
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    // بدنه اصلی - بدون هدر و فوتر، عرض 100 درصد برای تمام صفحه شدن
    <main style={{ 
      width: '100%', 
      backgroundColor: theme.black, 
      color: '#fff', 
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      {/* --- HERO SECTION 3D --- */}
      <section style={{
        width: '100%', 
        minHeight: '90vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative', 
        perspective: '1200px', 
        overflow: 'hidden',
        padding: '40px 5%'
      }}>
        {/* پس‌زمینه کهکشانی طلایی - بدون اسکرول افقی */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
          <motion.div 
            animate={{ rotateZ: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute', width: '150%', height: '150%', top: '-25%', left: '-25%',
              background: `radial-gradient(circle at 50% 50%, #110d05 0%, ${theme.black} 60%)`,
            }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${theme.goldDark} 1px, transparent 1px)`, backgroundSize: '50px 50px', opacity: 0.1 }} />
        </div>

        <motion.div 
          initial={{ opacity: 0, rotateX: 20, y: 50 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1.2, type: 'spring' }}
          style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', maxWidth: '1200px', transformStyle: 'preserve-3d' }}
        >
          <motion.div whileHover={{ scale: 1.02 }} style={{ cursor: 'default' }}>
            <h1 style={{ 
              fontSize: 'clamp(40px, 7vw, 90px)', // متن بسیار بزرگ و واکنش‌گرا
              fontWeight: '900', 
              margin: '0 0 25px 0',
              lineHeight: '1.1',
              background: `linear-gradient(to right, ${theme.goldMid}, ${theme.goldLight}, ${theme.goldMid})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: `drop-shadow(0px 10px 30px rgba(212,175,55,0.4))`,
              transform: 'translateZ(50px)'
            }}>
              SAFI INTERNATIONAL<br/>CAPITAL LTD
            </h1>
          </motion.div>
          
          <p style={{ 
            color: '#bbb', fontSize: 'clamp(16px, 2vw, 22px)', maxWidth: '850px', margin: '0 auto 50px auto', lineHeight: '1.8',
            transform: 'translateZ(20px)'
          }}>
            A premier global investment & technology holding company.<br/>
            Registered in the United Kingdom (No: 17063286 | SIC: 66190).
          </p>

          <motion.a 
            href="#ecosystem"
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${theme.goldDark}` }}
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
        padding: '120px 5%', 
        backgroundColor: theme.black, 
        position: 'relative', 
        zIndex: 3,
        borderTop: `1px solid rgba(212, 175, 55, 0.1)`, 
        boxShadow: `0 -20px 50px rgba(0,0,0,1)`
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <h2 style={{ 
            fontSize: 'clamp(30px, 5vw, 55px)', fontWeight: '900', color: theme.goldLight, 
            textShadow: `0 5px 20px ${theme.goldGlow}`, letterSpacing: '2px'
          }}>
            GLOBAL INFRASTRUCTURE
          </h2>
          <div style={{ width: '80px', height: '3px', background: theme.goldMid, margin: '20px auto', borderRadius: '2px', boxShadow: `0 0 15px ${theme.goldMid}` }} />
        </div>

        {/* گرید تمام‌صفحه و منظم */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '30px', 
          width: '100%',
          maxWidth: '1400px', // این مکس‌ویت فقط برای این است که در مانیتورهای الترا-واید خیلی کش نیاید
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
        </div>
      </section>

      {/* --- FOUNDER SECTION 3D --- */}
      <section style={{ 
        width: '100%', 
        padding: '120px 5%', 
        backgroundColor: theme.darkBg, 
        borderTop: `1px solid rgba(212, 175, 55, 0.05)`, 
        overflow: 'hidden', 
        perspective: '1000px'
      }}>
        <div style={{ 
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', 
          gap: '50px', width: '100%', maxWidth: '1400px', margin: '0 auto' 
        }}>
          
          <motion.div 
            initial={{ opacity: 0, rotateY: -20, x: -50 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 400px', transformStyle: 'preserve-3d' }}
          >
            <h4 style={{ color: theme.goldMid, fontWeight: 'bold', letterSpacing: '5px', fontSize: '13px', marginBottom: '15px' }}>VISION & LEADERSHIP</h4>
            <h2 style={{ fontSize: 'clamp(45px, 7vw, 75px)', fontWeight: '900', color: theme.goldLight, margin: '0 0 30px 0', lineHeight: '1' }}>
              SHAHEEN<br/>SAFI
            </h2>
            <p style={{ color: '#bbb', fontSize: '17px', lineHeight: '2', marginBottom: '40px', maxWidth: '550px' }}>
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
            initial={{ opacity: 0, rotateY: 20, x: 50 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 400px', position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            {/* قاب سه‌بعدی طلایی عکس موسس */}
            <div style={{ position: 'relative', padding: '20px', width: '100%', maxWidth: '450px' }}>
              <div style={{ 
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                border: `2px solid ${theme.goldMid}`, borderRadius: '20px', 
                transform: 'translateZ(-20px) rotate(-4deg)', boxShadow: `0 0 25px ${theme.goldGlow}` 
              }} />
              <img 
                src="/safi.png" 
                alt="Shaheen Safi" 
                style={{ 
                  width: '100%', borderRadius: '15px', position: 'relative', zIndex: 2,
                  boxShadow: '0 30px 50px rgba(0,0,0,0.9)'
                }} 
              />
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}