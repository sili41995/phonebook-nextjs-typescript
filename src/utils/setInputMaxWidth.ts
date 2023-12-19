import { FormTypes } from '@/constants';

const setInputMaxWidth = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.filter:
      return '200px';

    default:
      return '';
  }
};

export default setInputMaxWidth;
