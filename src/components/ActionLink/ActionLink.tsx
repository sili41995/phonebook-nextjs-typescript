'use client';

import getActionLinkClassName from '@/utils/getActionLinkClassName';
import css from './ActionLink.module.css';
import makeBlur from '@/utils/makeBlur';

const ActionLink = ({ link, children, btnType }) => {
  const className = getActionLinkClassName(css, btnType);

  const onBtnClick = (e) => {
    makeBlur(e.currentTarget);
  };

  return (
    <a className={className} href={link} onClick={onBtnClick}>
      {children}
    </a>
  );
};

export default ActionLink;
