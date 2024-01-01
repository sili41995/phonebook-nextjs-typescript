import NextAuth from 'next-auth';
import { IUser } from './types';

declare module 'next-auth' {
  interface Session {
    user: {
      token: string;
      user: IUser;
      iat: number;
      exp: number;
      jti: string;
    };
  }
}
