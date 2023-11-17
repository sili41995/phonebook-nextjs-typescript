import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import contactsServiceApi from './src/service/contactsServiceApi';
import { z } from 'zod';

async function getUser(credentials) {
  try {
    const user = await contactsServiceApi.loginUser(credentials);
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await getUser(credentials);
        if (!user.token) {
          console.log('Invalid credentials');
          return null;
        }

        return { ...user.user, token: user.token };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      session.user = token;
      return session;
    },
  },
});
