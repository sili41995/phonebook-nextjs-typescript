import NavLinks from '@/components/NavLinks';
import css from './SideBar.module.css';
import { signOut } from '../../../auth';
import links from '@/constants/links';
import { PagesTypes } from '@/constants/pagesTypes';

export default function SideNav() {
  const navLinks = links.filter(({ page }) => page === PagesTypes.contacts);

  return (
    <div className={css.container}>
      <div className={css.linksContainer}>
        <NavLinks links={navLinks} />
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className={css.signOutBtn}>
            <p>Sign Out</p>
          </button>
        </form>
      </div>
    </div>
  );
}
