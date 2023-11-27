import { IProps } from './DefaultMessage.types';
import css from './DefaultMessage.module.css';

const EmptyListMessage = ({ message }: IProps) => (
  <p className={css.message}>{message}</p>
);

export default EmptyListMessage;
