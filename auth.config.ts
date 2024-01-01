import { PagePaths } from '@/constants';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  providers: [],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnContacts = nextUrl.pathname.startsWith(
        `/${PagePaths.contactsPath}`
      );
      if (isOnContacts) {
        if (isLoggedIn) {
          return true;
        }

        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/contacts', nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
