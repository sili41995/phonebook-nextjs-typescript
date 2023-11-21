import { IconBtnType } from '@/constants/iconBtnType';

const getIconButtonStyleProp = ({
  position = 'static',
  right = 0,
  width,
  height,
  inputWrap,
  btnType,
  css,
  top,
}) => {
  const topValue = top === 'center' ? '50%' : `${top}px`;
  const translateYValue = top === 'center' ? '-50%' : 0;
  const styles = {
    position,
    top: topValue,
    right,
    transform: `translateY(${translateYValue})`,
    minWidth: width,
    height,
  };

  const inputIconHoverEffect =
    btnType === IconBtnType.clearFilter ? '' : css.hoveredIcon;

  const hoverClassName = inputWrap
    ? inputIconHoverEffect
    : css.buttonWithShadow;

  return { styles, hoverClassName };
};

export default getIconButtonStyleProp;
