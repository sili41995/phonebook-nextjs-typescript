import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import contactsServiceApi from './src/service/contactsServiceApi';

async function getUser(credentials: any) {
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
      async authorize(credentials): Promise<any> {
        console.log(credentials);
        const { user, token } = await getUser(credentials);
        if (!token) {
          console.log('Invalid credentials');
          return null;
        }

        return { user, token };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});
