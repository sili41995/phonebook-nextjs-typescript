import Link from 'next/link';
import css from './NotFoundMessage.module.css';
import GoBackBtn from '@/components/GoBackBtn';

const NotFoundMessage = () => (
  <div className={css.container}>
    <p className={css.title}>Not Found</p>
    <p className={css.message}>The request URL was not found on this server</p>
    <GoBackBtn title='Go Back' />
  </div>
);

export default NotFoundMessage;
