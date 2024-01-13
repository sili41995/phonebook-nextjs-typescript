import { FC } from 'react';
import { BtnType, IconBtnType } from '@/constants';
import { IProps } from './IconButton.types';
import css from './IconButton.module.css';

const IconButton: FC<IProps> = ({
  icon,
  onBtnClick,
  title,
  type = BtnType.button,
  disabled,
  btnType = IconBtnType.default,
  ...otherProps
}) => {
  const btnChildren = title ? (
    <>
      {icon}
      {title}
    </>
  ) : (
    icon
  );

  return (
    <button
      className={css[btnType]}
      type={type}
      onClick={onBtnClick}
      disabled={disabled}
      {...otherProps}
    >
      {btnChildren}
    </button>
  );
};

export default IconButton;
