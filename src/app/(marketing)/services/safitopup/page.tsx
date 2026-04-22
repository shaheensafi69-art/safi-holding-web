import React from 'react';

export default function SafiTopUpPage() {
  return (
    <div style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '50px', marginBottom: '20px' }}>Safi <span style={{ color: '#C5A028' }}>TopUp</span></h1>
        <p style={{ color: '#888', fontSize: '18px' }}>Connecting the World through Digital Credit</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
        {[
          { title: "Mobile Top-Up", desc: "Send credit to 150+ countries instantly." },
          { title: "Data Bundles", desc: "International internet packages for all operators." },
          { title: "Gift Cards", desc: "Digital vouchers for gaming and shopping." },
          { title: "Utility Payments", desc: "Pay international bills with ease." }
        ].map((item, index) => (
          <div key={index} style={{ padding: '30px', border: '1px solid #1a1a1a', borderRadius: '20px', textAlign: 'center' }}>
            <div style={{ color: '#C5A028', fontSize: '24px', marginBottom: '15px' }}>✓</div>
            <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
            <p style={{ color: '#666', fontSize: '14px' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '80px', textAlign: 'center', padding: '40px', background: 'linear-gradient(to right, #000, #111)', borderRadius: '20px', border: '1px solid #C5A02833' }}>
        <h3 style={{ marginBottom: '10px' }}>Ready to send credit?</h3>
        <p style={{ color: '#888', marginBottom: '20px' }}>Access over 700 global operators from one platform.</p>
        <a href="https://www.safitopup.site" style={{ color: '#C5A028', textDecoration: 'none', fontWeight: 'bold' }}>WWW.SAFITOPUP.SITE</a>
      </div>
    </div>
  );
}