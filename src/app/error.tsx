'use client';

import { FC } from 'react';
import ErrorMessage from '@/components/ErrorMessage';
import { IErrorProps } from '@/types/types';

const Error: FC<IErrorProps> = ({ error, reset }) => (
  <div className='container'>
    <ErrorMessage reset={reset} message={error.message} />
  </div>
);

export default Error;
