'use client';

import { usePathname } from 'next/navigation';
import css from './Menu.module.css';
import Link from 'next/link';

const Menu = ({ links }) => {
  const pathname = usePathname();

  return (
    <ul className={css.menu}>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        const isActiveLink = link.href === pathname && css.active;

        return (
          <li key={link.name}>
            <Link href={link.href} className={`${css.link} ${isActiveLink}`}>
              {/* <LinkIcon className='w-6' /> */}
              <p>{link.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
