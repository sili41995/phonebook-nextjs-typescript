import getIconButtonClassName from '@/utils/getIconButtonClassName';
import css from './IconButton.module.css';
import getIconButtonStyleProp from '@/utils/getIconButtonStyleProp';

const IconButton = ({
  icon,
  children,
  type = 'button',
  onBtnClick,
  btnType,
  ...otherProps
}) => {
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
