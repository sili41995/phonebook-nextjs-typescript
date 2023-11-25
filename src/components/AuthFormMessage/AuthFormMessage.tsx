import Link from 'next/link';
import css from './AuthFormMessage.module.css';
import { IProps } from './AuthFormMessage.types';

export const AuthFormMessage = ({ message, pageLink, action }: IProps) => (
  <p className={css.message}>
    <Link href={pageLink}>{action}</Link>
    {` ${message}`}
  </p>
);

export default AuthFormMessage;
