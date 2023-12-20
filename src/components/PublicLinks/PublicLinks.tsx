import { PagePaths } from '@/constants';
import Link from 'next/link';
import css from './PublicLinks.module.css';

const PublicLinks = () => {
  const signUpPagePath = `/${PagePaths.signUpPath}`;
  const signInPagePath = `/${PagePaths.signInPath}`;

  return (
    <ul className={css.navList}>
      <li className={css.navItem}>
        <Link href={signUpPagePath}>Sign up</Link>
      </li>
      <li className={css.navItem}>
        <Link href={signInPagePath}>Sign in</Link>
      </li>
    </ul>
  );
};

export default PublicLinks;
