import links from '@/constants/links';
import Menu from '../Menu';
import css from './Navigation.module.css';
import { PagesTypes } from '@/constants/pagesTypes';

const Navigation = () => {
  const navLinks = links.filter(({ page }) => page === PagesTypes.home);

  return (
    <nav className={css.nav}>
      <Menu links={navLinks} />
    </nav>
  );
};

export default Navigation;
