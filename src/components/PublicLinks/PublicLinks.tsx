import { FC } from 'react';
import { NavLinkTypes, navLinks } from '@/constants';
import NavLink from '@/components/NavLink';
import { getNavLinks } from '@/utils';
import css from './PublicLinks.module.css';

const PublicLinks: FC = () => {
  const links = getNavLinks({
    links: navLinks,
    linksType: NavLinkTypes.auth,
  });

  return (
    <ul className={css.navList}>
      {links.map(({ name, href }) => (
        <NavLink name={name} href={href} key={href} />
      ))}
    </ul>
  );
};

export default PublicLinks;
