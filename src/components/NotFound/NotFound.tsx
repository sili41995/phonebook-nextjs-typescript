import { FC } from 'react';
import css from './NotFound.module.css';

const NotFound: FC = () => (
  <div>
    <p className={css.subtitle}>Not Found</p>
    <p className={css.message}>The request URL was not found on this server</p>
  </div>
);

export default NotFound;
