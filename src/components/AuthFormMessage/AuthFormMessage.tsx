import { FC } from 'react';
import Link from 'next/link';
import { IProps } from './AuthFormMessage.types';
import css from './AuthFormMessage.module.css';

export const AuthFormMessage: FC<IProps> = ({ message, pageLink, action }) => (
  <p className={css.message}>
    <Link href={pageLink}>{action}</Link>
    {` ${message}`}
  </p>
);

export default AuthFormMessage;
