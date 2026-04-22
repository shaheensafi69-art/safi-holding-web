import type { Config } from "tailwindcss";

const config: Config = {
  // این بخش حیاتی است؛ باید تمام مسیرهای فایل‌های شما را شامل شود
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/(marketing)/**/*.{js,ts,jsx,tsx,mdx}", // اضافه کردن مسیر گروه‌های روت
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // اطمینان نهایی از اسکن کل پوشه src
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#050505',
        'gold': {
          light: '#F3D277',
          DEFAULT: '#C5A028',
          dark: '#927420',
        },
      },
    },
  },
  plugins: [],
};
export default config;