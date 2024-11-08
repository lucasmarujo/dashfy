import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

export default clerkMiddleware({
  beforeAuth: (req: NextRequest) => {
    return NextResponse.next();
  },
  afterAuth: (auth, req: NextRequest) => {
    const url = new URL(req.url);
    
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL("/auth/signin", req.url);
      signInUrl.searchParams.set("redirect_url", url.pathname);
      return NextResponse.redirect(signInUrl);
    }

    if (auth.userId && auth.isPublicRoute && !url.pathname.includes('/auth/signout')) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  publicRoutes: [
    "/auth/signin/[[...rest]]",
    "/auth/signup/[[...rest]]",
    "/auth/signout/[[...rest]]",
    "/LandingPage",
  ],
  ignoredRoutes: ["/api/webhook"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};