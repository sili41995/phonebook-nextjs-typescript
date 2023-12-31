// import { Suspense } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
// import Loader from 'components/Loader';
// import { getIsContactsPage, setAuthPageBackgroundColor } from 'utils';
import { FC } from 'react';
import { IStyledProps } from './SharedLayout.types';
import css from './SharedLayout.module.css';

const SharedLayout: FC<IStyledProps> = ({ children, ...otherProps }) => {
  return (
    <>
      <header className={css.header}>
        <div className='container'>
          <NavigationBar {...otherProps} />
        </div>
      </header>
      <main>
        <section className={css.section}>{children}</section>
      </main>
    </>
  );
};

export default SharedLayout;
