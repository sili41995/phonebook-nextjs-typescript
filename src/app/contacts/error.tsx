'use client';

import { FC } from 'react';
import ErrorMessage from '@/components/ErrorMessage';
import { IErrorProps } from '@/types/types';

const Error: FC<IErrorProps> = ({ error, reset }) => (
  <ErrorMessage reset={reset} message={error.message} />
);

export default Error;
