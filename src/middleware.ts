import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // حذف هوشمندانه /en فقط اگر در ابتدای مسیر باشد
  // این شرط چک می‌کند که یا دقیقا /en باشد یا با /en/ شروع شود
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const newPathname = pathname === '/en' 
      ? '/' 
      : pathname.replace('/en/', '/');
    
    // ایجاد URL جدید و ریدایرکت دائمی برای سئو بهتر
    const url = request.nextUrl.clone();
    url.pathname = newPathname;
    
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * تطبیق روی تمام مسیرها به جز:
     * 1. api (مسیرهای API)
     * 2. _next/static (فایل‌های استاتیک نکست)
     * 3. _next/image (بهینه‌ساز تصویر)
     * 4. favicon.ico و فایل‌های تصویر (png, jpg, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};