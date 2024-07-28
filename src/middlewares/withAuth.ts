import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

const onlyAdmin = ['/dashboard'];
const authPage = ['/login', 'register']

export default function withAuth(middleware: NextMiddleware, requireAuth: string[] = []){
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    // url that requires authentication
    if(requireAuth.includes(pathname)){
      const token = await getToken({
        req, secret: process.env.NEXTAUTH_SECRET,
      })
      if(!token && !authPage.includes(pathname)){
        // if not logged in redirect to /login
        const url = new URL('/login', req.url);
        url.searchParams.set('callbackUrl', encodeURI(req.url)); // returns to the last opened url
        return NextResponse.redirect(url);
      }

      if(token){
        //if user has logged in, redirect to home page
        if(authPage.includes(pathname)){
          return NextResponse.redirect(new URL('/', req.url));
        }
        if(token?.role !== 'admin' && onlyAdmin.includes(pathname)){
          // if user role not admin, redirect to home page
          return NextResponse.redirect(new URL('/', req.url));
        }
      }
      
    }
    return middleware(req, next);
  }
}