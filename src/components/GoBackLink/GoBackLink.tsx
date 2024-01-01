import { FC } from 'react';
import { PagePaths } from '@/constants';
import { IProps } from './GoBackLink.types';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import css from './GoBackLink.module.css';

const GoBackLink: FC<IProps> = ({ title = 'Go Back' }) => {
  const searchParams = useSearchParams();

  return (
    <Link
      href={`/${PagePaths.contactsPath}?${searchParams}`}
      className={css.link}
    >
      {title}
    </Link>
  );
};

export default GoBackLink;
