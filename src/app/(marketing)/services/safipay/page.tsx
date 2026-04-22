import React from 'react';

export default function SafiPayPage() {
  const featureBox = {
    padding: '20px',
    borderLeft: '4px solid #C5A028',
    backgroundColor: '#111',
    marginBottom: '20px'
  };

  return (
    <div style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '50px', marginBottom: '20px' }}>Safi<span style={{ color: '#C5A028' }}>Pay</span></h1>
        <p style={{ color: '#888', fontSize: '18px' }}>Global Digital Banking & Multi-Currency Accounts</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div>
          <h3 style={{ color: '#C5A028', marginBottom: '20px' }}>Core Services</h3>
          <div style={featureBox}>
            <div style={{ fontWeight: 'bold' }}>International Accounts</div>
            <p style={{ fontSize: '14px', color: '#666' }}>Professional banking for international users with a focus on Afghanistan.</p>
          </div>
          <div style={featureBox}>
            <div style={{ fontWeight: 'bold' }}>Multi-Currency Support</div>
            <p style={{ fontSize: '14px', color: '#666' }}>Support for EUR, USD, GBP, PLN, SEK, and more.</p>
          </div>
          <div style={featureBox}>
            <div style={{ fontWeight: 'bold' }}>Instant Visa Cards</div>
            <p style={{ fontSize: '14px', color: '#666' }}>Virtual and physical cards issued instantly within the EU.</p>
          </div>
        </div>

        <div style={{ backgroundColor: '#0a0a0a', padding: '40px', borderRadius: '30px', border: '1px solid #222' }}>
          <h3 style={{ marginBottom: '20px' }}>Why SafiPay?</h3>
          <ul style={{ color: '#888', lineHeight: '2' }}>
            <li>Local Bank Details for global transactions</li>
            <li>High-security encryption standards</li>
            <li>Seamless integration with mobile apps</li>
            <li>24/7 Professional Support</li>
          </ul>
          <a href="https://www.safipay.net" target="_blank" style={{ display: 'block', textAlign: 'center', marginTop: '30px', color: '#C5A028', fontWeight: 'bold' }}>
            Visit safipay.net
          </a>
        </div>
      </div>
    </div>
  );
}