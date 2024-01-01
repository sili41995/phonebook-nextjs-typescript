'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PublicLinks from '@/components/PublicLinks';
import PrivateLinks from '@/components/PrivateLinks';
import { PagePaths } from '@/constants';
import { IProps } from './NavigationBar.types';
import css from './NavigationBar.module.css';

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
