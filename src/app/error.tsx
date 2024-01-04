'use client';

import { FC } from 'react';
import ErrorMessage from '@/components/ErrorMessage';
import { IErrorProps } from '@/types/types';

const Error: FC<IErrorProps> = ({ error, reset }) => (
  <div className='container'>
    <ErrorMessage reset={reset} message='Unexpected error' />
  </div>
);

export default Error;
