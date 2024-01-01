import { FC, MouseEvent } from 'react';
import { IProps } from './ActionLink.types';
import { makeBlur } from '@/utils';
import css from './ActionLink.module.css';

const ActionLink: FC<IProps> = ({ link, icon, btnType }) => {
  const onBtnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    makeBlur(e.currentTarget);
  };

  return (
    <a className={css[btnType]} href={link} onClick={onBtnClick}>
      {icon}
    </a>
  );
};

export default ActionLink;
