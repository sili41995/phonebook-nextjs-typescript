import css from './AuthForm.module.css';
import { IProps } from './AuthForm.types';

const AuthForm = ({ children }: IProps) => (
  <div className={css.container}>{children}</div>
);

export default AuthForm;
