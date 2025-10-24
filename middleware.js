import { NextResponse } from 'next/server';
export function middleware(req){
  if (req.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  return NextResponse.next();
}
