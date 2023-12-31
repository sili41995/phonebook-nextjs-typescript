import PublicLinks from '@/components/PublicLinks';
import { PagePaths } from '@/constants';
import css from './NavigationBar.module.css';
import Link from 'next/link';
import { FC } from 'react';
import { IProps } from './NavigationBar.types';
import PrivateLinks from '@/components/PrivateLinks';

const NavigationBar: FC<IProps> = ({ isSignIn, contactsCount }) => {
  const contactsPagePath = `/${PagePaths.contactsPath}`;
  const aboutPagePath = `/${PagePaths.aboutPath}`;

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link href={contactsPagePath}>Contacts</Link>
        </li>
        <li className={css.navItem}>
          <Link href={aboutPagePath}>About</Link>
        </li>
      </ul>
      {isSignIn ? (
        <PrivateLinks contactsCount={contactsCount} />
      ) : (
        <PublicLinks />
      )}
    </nav>
  );
};

export default NavigationBar;
