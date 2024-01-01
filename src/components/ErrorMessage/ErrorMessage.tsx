import React, { FC } from 'react';
import css from './ErrorMessage.module.css';

interface IProps {
  reset: () => void;
  message: string;
}

const ErrorMessage: FC<IProps> = ({ reset, message }) => {
  return (
    <div className={css.container}>
      <p className={css.message}>{message}</p>
      <button className={css.button} onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default ErrorMessage;
