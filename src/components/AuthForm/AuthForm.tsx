import css from './AuthForm.module.css';

const AuthForm = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export default AuthForm;
