'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  // پالت رنگی لوکس اکوسیستم Safi
  const theme = {
    black: '#000000',
    darkBg: '#050505',
    goldLight: '#FCE792',
    goldMid: '#C5A028',
    goldDark: '#8A6D1C',
    goldGlow: 'rgba(197, 160, 40, 0.15)',
  };

  const sectionTitleStyle = {
    fontSize: 'clamp(32px, 5vw, 55px)',
    fontWeight: '900',
    color: theme.goldMid,
    marginBottom: '35px',
    letterSpacing: '-1px',
    textShadow: `0 5px 15px ${theme.goldGlow}`
  };

  const paragraphStyle = {
    color: '#bbb',
    fontSize: '17px',
    lineHeight: '2',
    marginBottom: '25px',
    textAlign: 'justify' as const,
    transform: 'translateZ(20px)' // برجسته شدن متن در فضای 3D
  };

  // استایل کارت‌های شیشه‌ای سه‌بعدی برای شرکت‌ها
  const glass3DCard = {
    backgroundColor: theme.black,
    padding: '2px', // برای ایجاد بوردر طلایی گرادیانت
    borderRadius: '30px',
    background: `linear-gradient(135deg, ${theme.goldDark}, ${theme.black} 60%, ${theme.goldMid})`,
    marginBottom: '80px',
    boxShadow: `0 20px 40px rgba(0,0,0,0.8), 0 0 20px ${theme.goldGlow}`,
    perspective: '1500px',
    transformStyle: 'preserve-3d' as const,
  };

  const innerGlassCard = {
    backgroundColor: theme.darkBg,
    borderRadius: '28px',
    padding: '50px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    transform: 'translateZ(30px)', // ایجاد عمق
    border: '1px solid rgba(255,255,255,0.03)'
  };

  // کامپوننت کارت سه‌بعدی اعضای تیم
  const Team3DCard = ({ name, role, desc, imageStr }: any) => (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        backgroundColor: theme.black,
        borderRadius: '35px',
        padding: '2px',
        background: `linear-gradient(145deg, ${theme.goldDark}, ${theme.black} 70%, ${theme.goldMid})`,
        boxShadow: `0 15px 35px rgba(0,0,0,0.9), 0 0 15px ${theme.goldGlow}`,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        height: '100%'
      }}
    >
      <div style={{
        backgroundColor: theme.darkBg,
        borderRadius: '33px',
        padding: '40px 20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transform: 'translateZ(40px)', // برجسته شدن محتوای کارت
      }}>
        <img src={imageStr} alt={name} style={{
          width: '160px', height: '160px', borderRadius: '40px', objectFit: 'cover',
          border: `2px solid ${theme.goldMid}`, marginBottom: '25px',
          boxShadow: `0 15px 30px rgba(0,0,0,0.6)`,
          transform: 'translateZ(20px)'
        }} />
        <h4 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', marginBottom: '5px' }}>{name}</h4>
        <p style={{ color: theme.goldMid, fontSize: '13px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' }}>{role}</p>
        <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.7' }}>{desc}</p>
      </div>
    </motion.div>
  );

  return (
    <main style={{ width: '100%', minHeight: '100vh', backgroundColor: theme.black, color: 'white', overflowX: 'hidden' }}>
      
      {/* --- 1. IMPACTFUL HERO SECTION 3D --- */}
      <section style={{ padding: '180px 5% 100px 5%', textAlign: 'center', position: 'relative', perspective: '1000px' }}>
        <motion.div 
          animate={{ rotateZ: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', top: '-50%', left: '-50%', right: '-50%', bottom: '-50%', background: `radial-gradient(circle at center, #111 0%, ${theme.black} 50%)`, zIndex: 0 }} 
        />
        
        <motion.div 
          initial={{ opacity: 0, rotateX: 20, y: 50 }} 
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          style={{ position: 'relative', zIndex: 1, transformStyle: 'preserve-3d' }}
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0px' }} 
            animate={{ opacity: 1, letterSpacing: '8px' }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ color: theme.goldMid, fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', transform: 'translateZ(20px)', display: 'inline-block' }}>
            The Safi International Legacy
          </motion.span>
          <h1 style={{ 
            fontSize: 'clamp(45px, 8vw, 95px)', fontWeight: '900', marginTop: '20px', lineHeight: '1',
            background: `linear-gradient(to right, ${theme.goldMid}, #fff, ${theme.goldMid})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            filter: `drop-shadow(0 10px 20px ${theme.goldGlow})`,
            transform: 'translateZ(50px)' 
          }}>
            Powering Global <br /> Excellence
          </h1>
        </motion.div>
      </section>

      {/* --- 2. CORPORATE DEPTH SECTION 3D --- */}
      <section style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        <motion.div whileHover={{ scale: 1.02, rotateX: 2 }} style={glass3DCard}>
          <div style={innerGlassCard}>
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
        </motion.div>

        {/* --- 3. EXECUTIVE LEADERSHIP 3D (THE CORE TEAM) --- */}
        <h2 style={{ ...sectionTitleStyle, textAlign: 'center', marginBottom: '60px' }}>Board of Directors & Management</h2>
        
        {/* ردیف اول: سه نفر اصلی */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <Team3DCard 
            name="Shaheen Safi" role="FOUNDER & CEO" imageStr="/safi.png"
            desc="The visionary architect behind the Safi ecosystem, leading global strategy and innovation."
          />
          <Team3DCard 
            name="Mujtaba Rahmani" role="CHIEF OPERATIONS OFFICER" imageStr="/mujtaba.jpeg"
            desc="Directing international operations and ensuring seamless execution across all business units."
          />
          <Team3DCard 
            name="Sahel Salem" role="EUROPEAN RELATIONS DIRECTOR" imageStr="/sahel.jpeg"
            desc="Managing strategic partnerships and corporate relations within the European Union."
          />
        </div>

        {/* ردیف دوم: متخصص هوش مصنوعی و دیتابیس */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '120px' }}>
          <Team3DCard 
            name="Shirin Gol Ahmadi" role="CORPORATE MANAGER & AI SPECIALIST" imageStr="/shirin.jpeg"
            desc="Pioneering the integration of artificial intelligence and optimizing operational management across the organization."
          />
          <Team3DCard 
            name="Husnafar Shadab Zafer" role="HEAD OF DATABASE MANAGEMENT" imageStr="/Husnafar Shadab Zafer.jpeg"
            desc="Ensuring the integrity, security, and scalability of our complex data infrastructures and digital ecosystems."
          />
        </div>

        {/* --- 4. THE SUBSIDIARIES: 3D DETAILED BREAKDOWN --- */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 50px)', fontWeight: '900', color: theme.goldLight }}>Our Global Subsidiaries</h2>
          <div style={{ width: '80px', height: '4px', background: theme.goldMid, margin: '20px auto', borderRadius: '2px', boxShadow: `0 0 10px ${theme.goldMid}` }} />
        </div>

        {/* 1. Safi AI Deep Dive (اضافه شده جدید) */}
        <motion.div whileHover={{ scale: 1.02, rotateX: 2 }} style={glass3DCard}>
          <div style={innerGlassCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '30px', flexWrap: 'wrap', transform: 'translateZ(40px)' }}>
               <img src="/SafiAi.png" alt="Safi AI" style={{ height: '75px', filter: `drop-shadow(0 5px 15px ${theme.goldGlow})` }} />
               <h2 style={{ ...sectionTitleStyle, marginBottom: '0' }}>Safi AI: Intelligent Ecosystem</h2>
            </div>
            <p style={paragraphStyle}>
              Safi AI serves as the Chief AI Assistant and the official spokesperson of the Safi Ecosystem. Built on state-of-the-art neural networks, it provides flawless, real-time corporate communication and intelligent operational support across all our global platforms. It represents the pinnacle of artificial intelligence integration within our corporate structure.
            </p>
            <p style={paragraphStyle}>
              By integrating advanced artificial intelligence into our core infrastructure, Safi AI ensures that our brand representation remains highly professional, accurate, and consistently aligned with our corporate values. Whether guiding users through financial services or representing the brand globally, Safi AI is our commitment to leading the digital frontier.
            </p>
          </div>
        </motion.div>

        {/* 2. SafiPay Deep Dive */}
        <motion.div whileHover={{ scale: 1.02, rotateX: 2 }} style={glass3DCard}>
          <div style={innerGlassCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '30px', flexWrap: 'wrap', transform: 'translateZ(40px)' }}>
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
        </motion.div>

        {/* 3. Safi TopUp Deep Dive */}
        <motion.div whileHover={{ scale: 1.02, rotateX: 2 }} style={glass3DCard}>
          <div style={innerGlassCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '30px', flexWrap: 'wrap', transform: 'translateZ(40px)' }}>
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
        </motion.div>

        {/* 4. SafiPro Deep Dive */}
        <motion.div whileHover={{ scale: 1.02, rotateX: 2 }} style={glass3DCard}>
          <div style={innerGlassCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '30px', flexWrap: 'wrap', transform: 'translateZ(40px)' }}>
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
        </motion.div>

        {/* --- 5. THE MISSION STATEMENT 3D --- */}
        <section style={{ textAlign: 'center', padding: '120px 0', borderTop: `1px solid ${theme.goldDark}`, perspective: '1000px' }}>
          <motion.div initial={{ opacity: 0, rotateX: -20 }} whileInView={{ opacity: 1, rotateX: 0 }} transition={{ duration: 1 }} style={{ transformStyle: 'preserve-3d' }}>
            <h2 style={{ ...sectionTitleStyle, transform: 'translateZ(30px)' }}>Our Unwavering Mission</h2>
            <p style={{ ...paragraphStyle, textAlign: 'center', maxWidth: '900px', margin: '0 auto', fontSize: '24px', color: '#fff', transform: 'translateZ(50px)', fontStyle: 'italic' }}>
              "To dissolve the artificial borders of the global economy through innovation, ensuring that every individual, regardless of their location, has the tools to achieve financial and digital independence."
            </p>
            <div style={{ marginTop: '50px', letterSpacing: '4px', fontWeight: 'bold', color: theme.goldMid, transform: 'translateZ(20px)' }}>
              SHAHEEN SAFI | FOUNDER
            </div>
          </motion.div>
        </section>

      </section>

    </main>
  );
}