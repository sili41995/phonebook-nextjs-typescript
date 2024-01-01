'use client';

import PublicLinks from '@/components/PublicLinks';
import { PagePaths } from '@/constants';
import css from './NavigationBar.module.css';
import Link from 'next/link';
import { FC } from 'react';
import { IProps } from './NavigationBar.types';
import PrivateLinks from '@/components/PrivateLinks';
import { usePathname } from 'next/navigation';

const NavigationBar: FC<IProps> = ({ isSignIn }) => {
  const pathname = usePathname();
  const contactsPagePath = `/${PagePaths.contactsPath}`;
  const aboutPagePath = `/${PagePaths.aboutPath}`;

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link
            href={contactsPagePath}
            className={pathname.includes(contactsPagePath) ? css.active : ''}
          >
            Contacts
          </Link>
        </li>
        <li className={css.navItem}>
          <Link
            href={aboutPagePath}
            className={pathname.includes(aboutPagePath) ? css.active : ''}
          >
            About
          </Link>
        </li>
      </ul>
      {isSignIn ? <PrivateLinks /> : <PublicLinks />}
    </nav>
  );
};

export default NavigationBar;
