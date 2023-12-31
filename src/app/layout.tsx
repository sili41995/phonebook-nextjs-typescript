import { ReactNode } from 'react';
import './globals.css';
import SharedLayout from '@/components/SharedLayout';
import Toast from '@/components/Toast';
import { auth } from '../../auth';
import { getContacts } from './lib/actions';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session: any = await auth();
  const isSignIn = Boolean(session);
  const { count: contactsCount } = await getContacts();

  return (
    <html>
      <body>
        <SharedLayout isSignIn={isSignIn} contactsCount={contactsCount}>
          {children}
        </SharedLayout>
        <Toast />
      </body>
    </html>
  );
};

export default RootLayout;
