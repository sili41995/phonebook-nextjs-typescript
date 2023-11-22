import Link from 'next/link';
import NavLinks from '@/components/NavLinks';
import css from './SideBar.module.css';
import { signOut } from '../../../auth';
import links from '@/constants/links';

export default function SideNav() {
  return (
    <div className={css.container}>
      <Link href='/'>
        <div>{/* <AcmeLogo /> */}</div>
      </Link>
      <div className={css.linksContainer}>
        <NavLinks links={links} />
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className={css.signOutBtn}>
            {/* <PowerIcon className='w-6' /> */}
            <p>Sign Out</p>
          </button>
        </form>
      </div>
    </div>
  );
}
