import { FC } from 'react';
import { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About',
  description: 'Info about app',
};

const AboutPage: FC = () => (
  <div className='container'>
    <About />
  </div>
);

export default AboutPage;
