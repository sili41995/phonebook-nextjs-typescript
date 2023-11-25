import { InputType } from '@/constants/inputType';
import { ICssProp } from '@/types/types';

const getInputClassName = (css: ICssProp, inputType: InputType | undefined) => {
  switch (inputType) {
    case InputType.filter:
      return css.filter;

    case InputType.auth:
      return css.authForm;

    default:
      return css.input;
  }
};

export default getInputClassName;
