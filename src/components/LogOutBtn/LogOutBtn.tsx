'use client';

import { signOutApp } from '@/app/lib/actions';
import css from './LogOutBtn.module.css';
import { FC } from 'react';

const LogOutBtn: FC = () => {
  return (
    <form
      action={async () => {
        await signOutApp();
      }}
    >
      <button className={css.signOutBtn}>
        <p>Sign Out</p>
      </button>
    </form>
  );
};

export default LogOutBtn;
