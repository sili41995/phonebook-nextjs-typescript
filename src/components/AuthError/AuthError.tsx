import { FC } from 'react';
import LogOutBtn from '../LogOutBtn';
import css from './AuthError.module.css';

const AuthError: FC = () => {
  return (
    <div className={css.container}>
      <p className={css.message}>
        Oops, something went wrong! You need to re-login!
      </p>
      <LogOutBtn />
    </div>
  );
};

export default AuthError;
