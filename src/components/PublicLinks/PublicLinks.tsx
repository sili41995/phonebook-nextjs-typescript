import { PagePaths } from '@/constants';
import Link from 'next/link';
import css from './PublicLinks.module.css';
import { usePathname } from 'next/navigation';

const PublicLinks = () => {
  const pathname = usePathname();
  const signUpPagePath = `/${PagePaths.signUpPath}`;
  const signInPagePath = `/${PagePaths.signInPath}`;

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
