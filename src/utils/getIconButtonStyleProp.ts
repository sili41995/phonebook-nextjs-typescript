import { IconBtnType } from '@/constants/iconBtnType';
import { ICssProp, Position } from '@/types/types';

interface IProps {
  position?: Position;
  right?: number;
  width?: number;
  height?: number;
  btnType: IconBtnType | undefined;
  css: ICssProp;
  top?: 'center' | number;
  inputWrap?: boolean;
}

interface IStylesProps {
  styles: {
    position: Position;
    top: string;
    right: number;
    transform: string;
    minWidth: number;
    height: number;
  };
  hoverClassName: string;
}

const getIconButtonStyleProp = ({
  position = Position.static,
  right = 0,
  width = 0,
  height = 0,
  inputWrap,
  btnType,
  css,
  top = 0,
}: IProps): IStylesProps => {
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
