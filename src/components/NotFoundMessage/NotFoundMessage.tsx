import Link from 'next/link';
import css from './NotFoundMessage.module.css';

const NotFoundMessage = () => (
  <div className='container'>
    <p className={css.title}>Not Found</p>
    <p className={css.message}>The request URL was not found on this server</p>
    <Link href='/'>Go Home</Link>
  </div>
);

export default NotFoundMessage;
