import { FC } from 'react';
import css from './About.module.css';

const About: FC = () => (
  <p className={css.message}>
    This app was developed for demonstrate to showcase my skills in HTML, CSS,
    JavaScript, TypeScript, React, Next.js, and Server Actions to future
    employers. A server application was developed to securely store information.
    This application was developed without the Axios to improve skills in
    working with HTTP requests.
  </p>
);

export default About;
