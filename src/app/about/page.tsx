import { FC } from 'react';
import { Metadata } from 'next';
import Container from '@/components/Container';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About',
  description: 'Info about app',
};

const AboutPage: FC = () => (
  <Container>
    <About />
  </Container>
);

export default AboutPage;
