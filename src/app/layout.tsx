import './globals.css';
import Toast from '@/components/Toast';
import { Metadata } from 'next';
import { jua } from './ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Phonebook',
    default: 'Contacts',
  },
  description: 'My Next.js App for for storing contacts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${jua.variable}`}>
      <body>
        {children}
        <Toast />
      </body>
    </html>
  );
}
