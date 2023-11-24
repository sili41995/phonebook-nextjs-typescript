import css from './LogOutBtn.module.css';
import { signOut } from '../../../auth';

const LogOutBtn = () => {
  return (
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
  );
};

export default LogOutBtn;
