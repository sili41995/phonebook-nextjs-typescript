'use client';

import { FC } from 'react';
import SignOutBtn from '@/components/SignOutBtn';
import css from './AuthError.module.css';

const AuthError: FC = () => {
  return (
    <div className={css.container}>
      <p className={css.message}>
        Oops, something went wrong! You need to re-login!
      </p>
      <SignOutBtn />
    </div>
  );
};

export default AuthError;
