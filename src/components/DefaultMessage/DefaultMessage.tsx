import { FC } from 'react';
import { IProps } from './DefaultMessage.types';
import css from './DefaultMessage.module.css';

const EmptyListMessage: FC<IProps> = ({ message }) => (
  <p className={css.message}>{message}</p>
);

export default EmptyListMessage;
