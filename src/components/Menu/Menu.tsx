'use client';

import { usePathname } from 'next/navigation';
import css from './Menu.module.css';
import Link from 'next/link';
import { IProps } from './Menu.types';

const Menu = ({ links }: IProps) => {
  const pathname = usePathname();

  return (
    <ul className={css.menu}>
      {links.map((link) => {
        const isActiveLink = link.href === pathname && css.active;

        return (
          <li key={link.name}>
            <Link href={link.href} className={`${css.link} ${isActiveLink}`}>
              <p>{link.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
