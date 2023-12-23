import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import contactsServiceApi from './src/service/contactsServiceApi';

async function getUser(credentials: any) {
  try {
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
        console.log('перед await getUser');
        const { user, token } = await getUser(credentials);
        if (!token) {
          throw new Error('Invalid credentials');
        }

        return { user, token };
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
