import About from '@/components/About';
import SharedLayout from '@/components/SharedLayout';

export const metadata = {
  title: 'About',
  description: 'Info about app',
};

const AboutPage = () => (
  <SharedLayout>
    <About />
  </SharedLayout>
);

export default AboutPage;
