import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnPage =
        nextUrl.pathname.startsWith("/favorites") ||
        nextUrl.pathname.startsWith("/cart") ||
        nextUrl.pathname.startsWith("/account");

      const isOnAuthPage =
        nextUrl.pathname.startsWith("/login") ||
        nextUrl.pathname.startsWith("/login/signup");

      if (isOnPage) {
        if (isLoggedIn) return true;
        return false;
      }

      if (isOnAuthPage && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
