import { FC } from 'react';
import SharedLayout from '@/components/SharedLayout';
import Toast from '@/components/Toast';
import { auth } from '@/../auth';
import { ILayoutProps } from '@/types/types';
import './globals.css';

const RootLayout: FC<ILayoutProps> = async ({ children }) => {
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
