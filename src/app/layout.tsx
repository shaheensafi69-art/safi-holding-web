// src/app/layout.tsx

import Header from "../components/shared/Header"; // مسیر مستقیم
import Footer from "../components/shared/Footer"; // مسیر مستقیم

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0, 
        padding: 0,
        backgroundColor: '#050505', 
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflowX: 'hidden', // بسیار مهم: قفل کردن کامل اسکرول افقی در کل وب‌سایت
        boxSizing: 'border-box'
      }}>
        <Header />
        
        {/* این استایل باعث می‌شود محتوا زیر هدر نرود و از شور خوردن جلوگیری می‌کند */}
        <main style={{ 
          flex: 1, 
          paddingTop: '80px', 
          width: '100%', 
          overflowX: 'hidden',
          boxSizing: 'border-box'
        }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}