'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  // پالت رنگی لوکس اکوسیستم
  const theme = {
    black: '#000000',
    darkBg: '#050505',
    goldLight: '#FCE792',
    goldMid: '#C5A028',
    goldDark: '#8A6D1C',
    goldGlow: 'rgba(197, 160, 40, 0.15)',
    borderGlass: 'rgba(197, 160, 40, 0.2)'
  };

  // استایل دکمه‌های دانلود ۳ بعدی
  const btn3DStyle = {
    background: `linear-gradient(145deg, ${theme.darkBg}, ${theme.black})`,
    border: `1px solid ${theme.goldMid}`,
    color: theme.goldLight,
    padding: '16px 35px',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    cursor: 'pointer',
    boxShadow: `0 10px 20px rgba(0,0,0,0.8), inset 0 0 10px rgba(197,160,40,0.1)`,
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  // کامپوننت کارت خدمات ۳ بعدی
  const Service3DCard = ({ title, subtitle, desc, features, imageStr, link, linkText }: any) => (
    <motion.div
      whileHover={{ scale: 1.03, rotateY: 5, rotateX: -5, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        backgroundColor: theme.black,
        borderRadius: '30px',
        padding: '2px', // حاشیه گرادیانت طلایی
        background: `linear-gradient(135deg, ${theme.goldDark}, ${theme.black} 60%, ${theme.goldMid})`,
        boxShadow: `0 15px 35px rgba(0,0,0,0.8), 0 0 15px ${theme.goldGlow}`,
        perspective: '1500px',
        transformStyle: 'preserve-3d',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div style={{
        backgroundColor: theme.darkBg,
        borderRadius: '28px',
        padding: '40px 30px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transform: 'translateZ(30px)', // ایجاد عمق داخلی
        border: '1px solid rgba(255,255,255,0.03)'
      }}>
        <div style={{ marginBottom: '25px', display: 'flex', justifyContent: 'flex-start', transform: 'translateZ(20px)' }}>
          {imageStr ? (
            <img src={imageStr} alt={title} style={{ height: '55px', filter: `drop-shadow(0 5px 10px ${theme.goldGlow})` }} />
          ) : (
            <span style={{ fontSize: '45px', filter: `drop-shadow(0 5px 10px ${theme.goldGlow})` }}>✍️</span>
          )}
        </div>
        
        <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#fff', marginBottom: '5px', letterSpacing: '1px', transform: 'translateZ(15px)' }}>
          {title}
        </h3>
        <p style={{ color: theme.goldMid, fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
          {subtitle}
        </p>
        
        <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.8', marginBottom: '25px' }}>
          {desc}
        </p>
        
        <ul style={{ color: '#888', paddingLeft: '0', listStyleType: 'none', fontSize: '13px', lineHeight: '2.4', marginBottom: '35px', flexGrow: 1 }}>
          {features.map((feat: string, idx: number) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: theme.goldMid, boxShadow: `0 0 5px ${theme.goldMid}` }} />
              {feat}
            </li>
          ))}
        </ul>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{
            marginTop: 'auto', color: theme.goldLight, fontWeight: 'bold', textDecoration: 'none', 
            fontSize: '13px', borderBottom: `1px solid ${theme.goldDark}`, paddingBottom: '3px', width: 'fit-content', transition: '0.3s'
          }}>
            {linkText}
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: theme.black, color: 'white', overflowX: 'hidden' }}>
      
      {/* --- 1. HERO SECTION 3D --- */}
      <section style={{ 
        padding: '200px 5% 180px 5%', 
        textAlign: 'center', 
        position: 'relative',
        perspective: '1000px',
        background: `radial-gradient(circle at top, #0f0a00 0%, ${theme.black} 80%)`
      }}>
        {/* ذرات معلق پس‌زمینه */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${theme.goldDark} 1px, transparent 1px)`, backgroundSize: '60px 60px', opacity: 0.05 }} />

        <motion.div 
          initial={{ opacity: 0, rotateX: 20, y: 50 }} 
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          style={{ position: 'relative', zIndex: 1, transformStyle: 'preserve-3d' }}
        >
          <h1 style={{ 
            fontSize: 'clamp(40px, 8vw, 85px)', 
            fontWeight: '900', 
            marginBottom: '20px',
            lineHeight: '1.1',
            textShadow: `0 10px 30px rgba(0,0,0,0.8)`,
            transform: 'translateZ(50px)'
          }}>
            Our Global <span style={{ 
              background: `linear-gradient(to right, ${theme.goldMid}, ${theme.goldLight})`, 
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              filter: `drop-shadow(0 5px 15px ${theme.goldGlow})`
            }}>Expertise</span>
          </h1>
          <p style={{ 
            maxWidth: '800px', margin: '0 auto', color: '#bbb', fontSize: '18px', lineHeight: '1.9',
            transform: 'translateZ(20px)'
          }}>
            Delivering excellence through our integrated ecosystem of artificial intelligence, fintech solutions, global connectivity, premium commerce, and professional education.
          </p>
        </motion.div>
      </section>

      {/* --- 2. DOWNLOAD BOX 3D (The Resource Vault) --- */}
      <section style={{ padding: '0 5%', perspective: '1200px' }}>
        <motion.div 
          initial={{ y: 50, opacity: 0, rotateX: -10 }} 
          whileInView={{ y: 0, opacity: 1, rotateX: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: `linear-gradient(180deg, rgba(20, 20, 20, 0.9) 0%, rgba(5, 5, 5, 0.9) 100%)`,
            border: `1px solid ${theme.borderGlass}`,
            borderRadius: '30px',
            padding: '50px',
            maxWidth: '1100px',
            margin: '-120px auto 100px auto', // کشیدن باکس به سمت بالا (روی هیرو)
            position: 'relative',
            zIndex: 10,
            backdropFilter: 'blur(20px)',
            textAlign: 'center',
            boxShadow: `0 25px 50px rgba(0,0,0,0.9), 0 0 30px ${theme.goldGlow}`,
            transformStyle: 'preserve-3d'
          }}
        >
          <h2 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '35px', color: '#fff', letterSpacing: '2px', transform: 'translateZ(30px)' }}>
            OFFICIAL CORPORATE ASSETS
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px', transform: 'translateZ(40px)' }}>
            
            <motion.a 
              href="/downloads/pitch-deck.pdf" download 
              whileHover={{ scale: 1.05, boxShadow: `0 10px 25px ${theme.goldGlow}` }}
              whileTap={{ scale: 0.95 }}
              style={btn3DStyle}
            >
              <span style={{ fontSize: '18px' }}>📥</span> PITCH DECK (PDF)
            </motion.a>
            
            <motion.a 
              href="/downloads/company-profile.pdf" download 
              whileHover={{ scale: 1.05, boxShadow: `0 10px 25px rgba(255,255,255,0.1)` }}
              whileTap={{ scale: 0.95 }}
              style={{ ...btn3DStyle, borderColor: '#555', color: '#fff', background: '#111' }}
            >
              <span style={{ fontSize: '18px' }}>📄</span> COMPANY PROFILE
            </motion.a>

          </div>
        </motion.div>
      </section>

      {/* --- 3. THE SERVICES GRID 3D (5 BOXES) --- */}
      <section style={{ width: '90%', maxWidth: '1400px', margin: '0 auto 150px auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '40px' 
        }}>
          
          {/* 1. Safi AI (اضافه شده جدید) */}
          <Service3DCard 
            title="Safi AI"
            subtitle="Intelligent Ecosystem"
            desc="The Chief AI Assistant and official spokesperson, providing flawless real-time corporate communication and operational support."
            features={[
              "Advanced Neural Network Integration",
              "Real-time Corporate Communication",
              "Automated Global Brand Representation"
            ]}
            imageStr="/SafiAi.png"
            link="https://safiai.site"
            linkText="ACCESS AI PORTAL →"
          />

          {/* 2. SafiPay */}
          <Service3DCard 
            title="SafiPay Banking"
            subtitle="NeoBanking Infrastructure"
            desc="Digital banking infrastructure providing global accounts and instant card issuance for international settlements."
            features={[
              "Multi-currency IBAN (USD, EUR, GBP)",
              "Physical & Virtual Visa/Mastercards",
              "Cross-border payment gateways"
            ]}
            imageStr="/safipay.png"
            link="https://www.safipay.net"
            linkText="ENTER SAFIPAY →"
          />

          {/* 3. Safi TopUp */}
          <Service3DCard 
            title="Global Connectivity"
            subtitle="Safi TopUp Network"
            desc="Instant mobile credit and data distribution across 700+ operators in 150+ countries worldwide."
            features={[
              "Global Airtime & Data Refills",
              "International Gift Card Portal",
              "Utility Bill Payments (Global)"
            ]}
            imageStr="/safitopup.png"
            link="https://www.safitopup.site"
            linkText="VISIT TOPUP →"
          />

          {/* 4. SafiPro */}
          <Service3DCard 
            title="Premium Commerce"
            subtitle="SafiPro International"
            desc="High-end apparel and e-commerce solutions defined by international quality and modern design."
            features={[
              "Luxury Apparel Design & Production",
              "International Supply Chain Management",
              "Premium E-commerce Fulfillment"
            ]}
            imageStr="/safipro.png"
            link="https://www.safipro.site"
            linkText="SHOP SAFIPRO →"
          />

          {/* 5. Shaheen Safi Blog */}
          <Service3DCard 
            title="Educational Blog"
            subtitle="Founder's Technical Log"
            desc="Expert insights and educational articles on Fintech, Entrepreneurship, and Global Strategy."
            features={[
              "Step-by-step Fintech Tutorials",
              "Investment Strategy Guides",
              "Market Analysis & Tech Reflections"
            ]}
            imageStr="" // استفاده از ایموجی در کامپوننت اگر خالی باشد
            link="https://www.shaheensafi.blog"
            linkText="READ ARTICLES →"
          />

        </div>
      </section>

      {/* یادداشت: در صورتی که از RootLayout استفاده می‌کنید و فوتر گلوبال دارید، 
          می‌توانید تگ footer زیر را پاک کنید تا دوتا فوتر نیفتد. */}
      {/* <footer style={{ padding: '60px 5%', textAlign: 'center', borderTop: `1px solid rgba(197, 160, 40, 0.1)`, color: '#444' }}>
        <p>&copy; {new Date().getFullYear()} Safi International Capital LTD. All Rights Reserved.</p>
      </footer> 
      */}

    </main>
  );
}