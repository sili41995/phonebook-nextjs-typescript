import { FormTypes, theme } from '@/constants';

const setModalFormBorderRadius = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.authForm:
      return `${theme.borderRadius.otherBorderRadius}px`;

    default:
      return '0';
  }
};

export default setModalFormBorderRadius;
