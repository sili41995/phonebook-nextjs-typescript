'use client';

import getActionLinkClassName from '@/utils/getActionLinkClassName';
import css from './ActionLink.module.css';
import makeBlur from '@/utils/makeBlur';
import { IProps } from './ActionLink.types';
import { MouseEvent } from 'react';

const ActionLink = ({ link, children, btnType }: IProps) => {
  const className = getActionLinkClassName(css, btnType);

  const onBtnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    makeBlur(e.currentTarget);
  };

  return (
    <a className={className} href={link} onClick={onBtnClick}>
      {children}
    </a>
  );
};

export default ActionLink;
