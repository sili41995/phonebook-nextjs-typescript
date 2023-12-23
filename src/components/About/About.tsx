import { FC } from 'react';
import css from './About.module.css';

const About: FC = () => (
  <p className={css.message}>
    This app was developed for demonstrate to showcase my skills in HTML, CSS,
    JavaScript, TypeScript, React, React Router, and Redux Toolkit to future
    employers. A server application was developed to securely store information.
    This application was developed without the Axios to improve skills in
    working with HTTP requests. Because under the hood of the Redux Toolkit is
    Immer - we can freely &#34;mutate&#34; the state, and Immer will do it right
    to keep us updated.
  </p>
);

export default About;
