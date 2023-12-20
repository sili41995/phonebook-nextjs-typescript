import PublicLinks from '@/components/PublicLinks';
import { PagePaths } from '@/constants';
import css from './NavigationBar.module.css';
import Link from 'next/link';

const NavigationBar = () => {
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
      <PublicLinks />
    </nav>
  );
};

export default NavigationBar;
