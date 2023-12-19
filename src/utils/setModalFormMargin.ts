import { FormTypes, theme } from '@/constants';

const setModalFormMargin = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.authForm:
      return `${theme.spacing(10)} auto`;

    default:
      return '0';
  }
};

export default setModalFormMargin;
