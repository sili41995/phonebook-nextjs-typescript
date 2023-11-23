import { InputType } from '@/constants/inputType';

const getInputClassName = (css, inputType) => {
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
