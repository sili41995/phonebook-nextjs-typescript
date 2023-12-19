import { FormTypes, theme } from '@/constants';

const setInputFontColor = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.primaryFontColor;
  }
};

export default setInputFontColor;
