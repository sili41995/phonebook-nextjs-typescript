import React, { FC } from 'react';
import css from './ErrorMessage.module.css';
import { IProps } from './ErrorMessage.types';

const ErrorMessage: FC<IProps> = ({ reset, message }) => (
  <div className={css.container}>
    <p className={css.message}>{message}</p>
    <button className={css.button} onClick={reset}>
      Try again
    </button>
  </div>
);

export default ErrorMessage;
