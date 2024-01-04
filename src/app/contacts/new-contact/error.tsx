'use client';

import { FC } from 'react';
import ErrorMessage from '@/components/ErrorMessage';
import { IErrorProps } from '@/types/types';

const Error: FC<IErrorProps> = ({ reset }) => (
  <ErrorMessage reset={reset} message='Contact adding failed' />
);

export default Error;
