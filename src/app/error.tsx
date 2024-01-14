'use client';

import { FC } from 'react';
import ErrorMessage from '@/components/ErrorMessage';
import { IErrorProps } from '@/types/types';
import Container from '@/components/Container';

const Error: FC<IErrorProps> = ({ error, reset }) => (
  <Container>
    <ErrorMessage reset={reset} message='Unexpected error' />
  </Container>
);

export default Error;
