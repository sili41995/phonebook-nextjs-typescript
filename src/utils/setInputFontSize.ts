import { FormTypes, theme } from '@/constants';

const setInputFontSize = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.authForm:
      return `${theme.fontSize.otherFontSize}px`;

    default:
      return `${theme.fontSize.secondaryFontSize}px`;
  }
};

export default setInputFontSize;
