import { IconBtnType, theme } from '@/constants';

const setIconHoverEffect = (btnType: IconBtnType): string => {
  switch (btnType) {
    case IconBtnType.clearFilter:
      return '';

    default:
      return theme.colors.secondaryColor;
  }
};

export default setIconHoverEffect;
