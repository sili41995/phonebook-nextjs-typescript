import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PagePaths } from '@/constants';
import css from './PublicLinks.module.css';
import { FC } from 'react';

const { signInPath, signUpPath } = PagePaths;

const PublicLinks: FC = () => {
  const pathname = usePathname();
  const signUpPagePath = `/${signUpPath}`;
  const signInPagePath = `/${signInPath}`;

  return (
    <ul className={css.navList}>
      <li className={css.navItem}>
        <Link
          href={signUpPagePath}
          className={pathname.includes(signUpPagePath) ? css.active : ''}
        >
          Sign up
        </Link>
      </li>
      <li className={css.navItem}>
        <Link
          href={signInPagePath}
          className={pathname.includes(signInPagePath) ? css.active : ''}
        >
          Sign in
        </Link>
      </li>
    </ul>
  );
};

export default PublicLinks;
