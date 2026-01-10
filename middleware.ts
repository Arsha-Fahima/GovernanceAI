import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const url = req.nextUrl.clone();

  // If user is not logged in and trying to access protected routes
  // Temporarily allowing /admin access for direct entry as requested
  if (!session && (url.pathname.startsWith('/dashboard'))) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Role based protection
  if (session) {
    const { data: userData } = await supabase
      .from('users')
      .select('role')
      .eq('whatsapp_number', session.user.phone)
      .single();

    if (url.pathname.startsWith('/admin') && userData?.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    
    if (url.pathname === '/login') {
      return NextResponse.redirect(new URL(userData?.role === 'admin' ? '/admin' : '/dashboard', req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/login'],
};
