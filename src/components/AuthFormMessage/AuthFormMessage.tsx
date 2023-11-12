import Link from 'next/link';
import css from './AuthFormMessage.module.css';

export const AuthFormMessage = ({ message, pageLink, action }) => (
  <p className={css.message}>
    <Link href={pageLink}>{action}</Link>
    {` ${message}`}
  </p>
);

export default AuthFormMessage;
