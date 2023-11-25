import getIconButtonClassName from '@/utils/getIconButtonClassName';
import css from './IconButton.module.css';
import getIconButtonStyleProp from '@/utils/getIconButtonStyleProp';
import { BtnTypes } from '@/types/types';
import { IProps } from './IconButton.types';

const IconButton = ({
  icon,
  children,
  type = BtnTypes.button,
  onBtnClick,
  btnType,
  ...otherProps
}: IProps) => {
  const className = getIconButtonClassName(css, btnType);
  const styleProp = getIconButtonStyleProp({
    ...otherProps,
    btnType,
    css,
  });

  return (
    <button
      className={`${styleProp.hoverClassName} ${className}`}
      style={styleProp.styles}
      type={type}
      onClick={onBtnClick}
    >
      {children ? children : icon}
    </button>
  );
};

export default IconButton;
