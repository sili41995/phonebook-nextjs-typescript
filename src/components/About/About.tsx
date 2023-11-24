import css from './About.module.css';

const About = () => (
  <p className={css.message}>
    This application was created to demonstrate my skills to potential employers
    skills in working with HTML, CSS, JavaScript, React, React Router, and Redux
    Toolkit. This application was created without the Axios library to improve
    work skills with HTTP requests. Because under the hood of the Redux Toolkit
    is Immer - we can freely &quot;mutate&quot; the state, and Immer will do it
    correctly for us to update.
  </p>
);

export default About;
