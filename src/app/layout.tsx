import { ReactNode } from 'react';
import './globals.css';
import SharedLayout from '@/components/SharedLayout';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  );
};

export default RootLayout;
