'use client';

import { FC } from 'react';
import PublicLinks from '@/components/PublicLinks';
import NavLink from '@/components/NavLink';
import PrivateLinks from '@/components/PrivateLinks';
import { NavLinkTypes, navLinks } from '@/constants';
import { IProps } from './NavigationBar.types';
import { getNavLinks } from '@/utils';
import css from './NavigationBar.module.css';

const NavigationBar: FC<IProps> = ({ isSignIn }) => {
  const links = getNavLinks({
    links: navLinks,
    linksType: NavLinkTypes.general,
  });

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        {links.map(({ name, href }) => (
          <NavLink name={name} href={href} key={href} />
        ))}
      </ul>
      {isSignIn ? <PrivateLinks /> : <PublicLinks />}
    </nav>
  );
};

export default NavigationBar;
