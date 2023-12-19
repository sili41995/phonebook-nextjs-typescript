import { FormTypes, theme } from '@/constants';

const setInputPadding = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.filter:
      return `
      ${theme.spacing(2)}
      ${theme.spacing(10)}
      ${theme.spacing(2)}
      ${theme.spacing(4)}`;

    case FormTypes.authForm:
      return `
      ${theme.spacing(2)}
      ${theme.spacing(10)}
      ${theme.spacing(2)}`;

    default:
      return `
      ${theme.spacing(2)}
      ${theme.spacing(2)}
      ${theme.spacing(2)}
      ${theme.spacing(10)}`;
  }
};

export default setInputPadding;
