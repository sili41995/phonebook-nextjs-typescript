import { FC } from 'react';
import { Metadata } from 'next';
import SharedLayout from '@/components/SharedLayout';
import Toast from '@/components/Toast';
import { auth } from '@/../auth';
import { ILayoutProps } from '@/types/types';
import { inter, jua } from '@/app/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Phonebook',
    default: 'Contacts',
  },
  description: 'My Next.js App for for storing contacts',
};

const RootLayout: FC<ILayoutProps> = async ({ children }) => {
  const session = await auth();
  const isSignIn = Boolean(session);

  return (
    <html className={`${inter.variable} ${jua.variable}`}>
      <body>
        <SharedLayout isSignIn={isSignIn}>{children}</SharedLayout>
        <Toast />
      </body>
    </html>
  );
};

export default RootLayout;
