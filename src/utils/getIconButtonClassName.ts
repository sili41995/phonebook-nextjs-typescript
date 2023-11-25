import { IconBtnType } from '@/constants/iconBtnType';
import { ICssProp } from '@/types/types';

const getIconButtonClassName = (
  css: ICssProp,
  btnType: IconBtnType | undefined
) => {
  switch (btnType) {
    case IconBtnType.delete:
      return css.delete;

    case IconBtnType.edit:
      return css.edit;

    case IconBtnType.phone:
      return css.phone;

    case IconBtnType.message:
      return css.message;

    case IconBtnType.chat:
      return css.chat;

    case IconBtnType.logout:
      return css.logout;

    case IconBtnType.accept:
      return css.accept;

    case IconBtnType.cancel:
      return css.cancel;

    case IconBtnType.deleteTransparent:
      return css.deleteTransparent;

    case IconBtnType.toggleShowPassword:
      return css.toggleShowPassword;

    case IconBtnType.clearFilter:
      return css.clearFilter;

    default:
      return css.button;
  }
};

export default getIconButtonClassName;
