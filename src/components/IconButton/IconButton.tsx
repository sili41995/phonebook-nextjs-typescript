import { BtnType, IconBtnType } from '@/constants';
import { IProps } from './IconButton.types';
import css from './IconButton.module.css';

const IconButton = ({
  icon,
  onBtnClick,
  title,
  type = BtnType.button,
  disabled,
  btnType = IconBtnType.default,
}: IProps) => {
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
    >
      {btnChildren}
    </button>
  );
};

export default IconButton;
