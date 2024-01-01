import { ReactNode } from 'react';
import './globals.css';
import SharedLayout from '@/components/SharedLayout';
import Toast from '@/components/Toast';
import { auth } from '../../auth';
import { getContacts } from './lib/actions';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  const isSignIn = Boolean(session);

  return (
    <html>
      <body>
        <SharedLayout isSignIn={isSignIn}>{children}</SharedLayout>
        <Toast />
      </body>
    </html>
  );
};

export default RootLayout;
