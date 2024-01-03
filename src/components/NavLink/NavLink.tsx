import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';
import { IProps } from './NavLink.types';
import css from './NavLink.module.css';

const NavLink: FC<IProps> = ({ href, name }) => {
  const pathname = usePathname();

  return (
    <li className={css.navItem}>
      <Link href={href} className={pathname.includes(href) ? css.active : ''}>
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
