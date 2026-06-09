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
      minHeight: '100vh', 
      margin: 0,
      padding: 0
    }}>
      {/* Container اصلی حالا تمام عرض مانیتور را می‌گیرد */}
      <div style={{
        width: '100%',
        margin: 0,
        padding: 0,
        // maxWidth: '1200px' -> به طور کامل حذف شد تا نیم صفحه نشود
      }}>
        {children}
      </div>
    </div>
  );
}