import { IconBtnType } from '@/constants/iconBtnType';

const getIconButtonClassName = (css, btnType) => {
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
