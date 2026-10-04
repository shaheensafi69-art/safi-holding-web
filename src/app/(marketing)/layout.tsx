import React from 'react';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#030305] text-[#F0F0F5] relative overflow-x-hidden">
      <div className="w-full max-w-full relative overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}