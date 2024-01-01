'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { IProps } from './LinkWithQuery.types';

const LinkWithQuery: FC<IProps> = ({ children, href }) => {
  const searchParams = useSearchParams();
  const path = `${href}?${searchParams}`;

  return <Link href={path}>{children}</Link>;
};

export default LinkWithQuery;
