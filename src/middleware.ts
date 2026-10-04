import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle /en, /en/* and /fa, /fa/* redirects to canonical routes cleanly
  if (
    pathname === '/en' ||
    pathname.startsWith('/en/') ||
    pathname === '/fa' ||
    pathname.startsWith('/fa/')
  ) {
    let newPathname = pathname
      .replace(/^\/en(?:\/|$)/, '/')
      .replace(/^\/fa(?:\/|$)/, '/');

    if (!newPathname.startsWith('/')) {
      newPathname = '/' + newPathname;
    }

    const url = request.nextUrl.clone();
    url.pathname = newPathname;

    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. api (API routes)
     * 2. _next/static (static files)
     * 3. _next/image (image optimization files)
     * 4. favicon.ico, images, documents
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf)$).*)',
  ],
};