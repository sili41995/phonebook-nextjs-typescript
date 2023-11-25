import Navigation from '../Navigation';
import css from './SharedLayout.module.css';
import { IProps } from './SharedLayout.types';

const SharedLayout = ({ children }: IProps) => {
  return (
    <>
      <header className={css.header}>
        <div className='container'>
          <Navigation />
        </div>
      </header>
      <main>
        <section className={css.section}>
          <div className='container'>{children}</div>
        </section>
      </main>
    </>
  );
};

export default SharedLayout;
