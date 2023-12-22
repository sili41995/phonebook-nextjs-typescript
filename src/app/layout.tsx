import { ReactNode } from 'react';
import './globals.css';
import SharedLayout from '@/components/SharedLayout';
import Toast from '@/components/Toast';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <SharedLayout>{children}</SharedLayout>
        <Toast />
      </body>
    </html>
  );
};

export default RootLayout;
