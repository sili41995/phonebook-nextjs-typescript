import css from './Header.module.css';
import { IProps } from './Header.types';

const Header = ({ children }: IProps) => {
  return <header className={css.header}>{children}</header>;
};

export default Header;
