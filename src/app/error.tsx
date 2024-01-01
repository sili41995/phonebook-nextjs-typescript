'use client';

import { useEffect } from 'react';
import { signOutApp } from './lib/actions';

const Error = () => {
  useEffect(() => {
    (async () => {
      await signOutApp();
    })();
  });
};

export default Error;
