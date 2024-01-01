import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import contactsServiceApi from './src/service/contactsServiceApi';
import { ICredentials } from '@/types/types';
import ISession from './src/types/next-auth';
import { Session } from 'next-auth/types';

async function getUser(data: any) {
  try {
    const credentials: ICredentials = {
      email: data.email,
      password: data.password,
    };
    const user = await contactsServiceApi.signInUser(credentials);
    return user;
  } catch (error) {
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials): Promise<any> {
        const response = await getUser(credentials);
        if (!response.token) {
          throw new Error('Invalid credentials');
        }

        return response;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      session.user = token as any;
      return session;
    },
  },
});
