import Header from '@/components/Header';
import Navigation from '../Navigation';
import css from './SharedLayout.module.css';
import { IProps } from './SharedLayout.types';

const SharedLayout = ({ children }: IProps) => {
  return (
    <>
      <Header>
        <div className='container'>
          <Navigation />
        </div>
      </Header>
      <main>
        <section className={css.section}>
          <div className='container'>{children}</div>
        </section>
      </main>
    </>
  );
};

export default SharedLayout;
