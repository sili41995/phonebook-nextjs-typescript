'use client';

import Link from 'next/link';
import { IProps } from './LinkWithQuery.types';
import { useSearchParams } from 'next/navigation';

const LinkWithQuery = ({ children, href }: IProps) => {
  const searchParams = useSearchParams();
  const path = `${href}?${searchParams}`;

  return <Link href={path}>{children}</Link>;
};

export default LinkWithQuery;
