import { FC } from 'react';
import { PagePaths } from '@/constants';
import { IProps } from './GoBackLink.types';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const GoBackLink: FC<IProps> = ({ title = 'Go Back' }) => {
  const searchParams = useSearchParams();

  return (
    <Link href={`/${PagePaths.contactsPath}$?${searchParams}`}>{title}</Link>
  );
};

export default GoBackLink;
