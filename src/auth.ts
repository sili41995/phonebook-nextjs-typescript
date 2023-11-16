import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import contactsServiceApi from './service/contactsServiceApi';

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
        const { email, password } = credentials;
        const user = await getUser({ email, password });
        if (!user) {
          return null;
        }
        return user;
      },
    }),
  ],
});
