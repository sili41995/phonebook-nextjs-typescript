import { IconBtnType } from '@/constants/iconBtnType';
import { ICssProp } from '@/types/types';

interface IProps {
  position: string;
  right: number;
  width: number;
  height: number;
  btnType: IconBtnType;
  css: ICssProp;
  top: 'center' | number;
  inputWrap?: boolean;
}

const getIconButtonStyleProp = ({
  position = 'static',
  right = 0,
  width,
  height,
  inputWrap,
  btnType,
  css,
  top,
}: IProps) => {
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
