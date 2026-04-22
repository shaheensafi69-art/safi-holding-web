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
        backgroundColor: '#050505', 
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh' 
      }}>
        <Header />
        
        {/* این استایل باعث می‌شود محتوا زیر هدر نرود */}
        <main style={{ flex: 1, paddingTop: '80px' }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}