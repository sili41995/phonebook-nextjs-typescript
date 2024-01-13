import { FC } from 'react';
import { signOutApp } from '@/app/lib/actions';
import css from './SignOutBtn.module.css';

const SignOutBtn: FC = () => (
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

export default SignOutBtn;
