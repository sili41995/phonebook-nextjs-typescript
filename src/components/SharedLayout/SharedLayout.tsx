import { FC } from 'react';
import NavigationBar from '@/components/NavigationBar';
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
