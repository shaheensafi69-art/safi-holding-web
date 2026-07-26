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
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      position: 'relative', // بسیار مهم: باعث می‌شود تمام المان‌های absolute صفحات داخل همین چهارچوب قفل شوند
      overflowX: 'hidden',  // برش دادن کامل هر چیز اضافی که به سمت بغل بزند
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    }}>
      {/* Container اصلی تمام‌عرض */}
      <div style={{
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}>
        {children}
      </div>
    </div>
  );
}