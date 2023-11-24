// import Link from 'next/link';
// import { useSelector } from 'react-redux';
// import { pagesPath } from '@/constants';
// import PrivateLinks from '@/components/PrivateLinks';
// import PublicLinks from '@/components/PublicLinks';
// import { usePathname } from 'next/navigation';
// import { selectIsLoggedIn } from '@/redux/auth/selectors';
import links from '@/constants/links';
import Menu from '../Menu';
import css from './Navigation.module.css';
import { PagesTypes } from '@/constants/pagesTypes';

const Navigation = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const pathname = usePathname();
  // const contactsPagePath = `/${pagesPath.contactsPath}`;
  // const aboutPagePath = `/${pagesPath.aboutPath}`;
  const navLinks = links.filter(({ page }) => page === PagesTypes.home);

  return (
    <nav className={css.nav}>
      <Menu links={navLinks} />
    </nav>
  );
};

export default Navigation;
