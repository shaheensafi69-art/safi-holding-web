import React from 'react';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      minHeight: '80vh', // ارتفاع مناسب برای محتوا
    }}>
      {/* این بخش Container اصلی است که 
          باعث می‌شود صفحات دیگر مثل About هم 
          در وسط قرار بگیرند و پخش نشوند
      */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        padding: '0 20px',
        boxSizing: 'border-box'
      }}>
        {children}
      </div>
    </div>
  );
}