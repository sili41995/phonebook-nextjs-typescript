import { FormTypes } from '@/constants';

const setInputFilter = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.filter:
      return 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))';

    default:
      return '';
  }
};

export default setInputFilter;
