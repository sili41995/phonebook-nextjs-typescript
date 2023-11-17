'use client';

import links from '@/constants/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              link.href === pathname && 'bg-sky-100 text-blue-600'
            } flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}
          >
            {/* <LinkIcon className='w-6' /> */}
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
