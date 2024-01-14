'use client';

import { FC } from 'react';
import ErrorMessage from '@/components/ErrorMessage';
import Container from '@/components/Container';
import { IErrorProps } from '@/types/types';

const Error: FC<IErrorProps> = ({ error, reset }) => (
  <Container>
    <ErrorMessage reset={reset} message='Unexpected error' />
  </Container>
);

export default Error;
