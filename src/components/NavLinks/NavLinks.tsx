'use client';

import links from '@/constants/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './NavLinks.module.css';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className={css.container}>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        const isActiveLink = link.href === pathname && css.active;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${css.link} ${isActiveLink}`}
          >
            {/* <LinkIcon className='w-6' /> */}
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}