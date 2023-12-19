import { FC } from 'react';
import IconButton from '@/components/IconButton';
import { IProps } from './Input.types';
import css from './Input.module.css';
import { FormTypes } from '@/constants';

const Input: FC<IProps> = ({
  settings,
  inputWrap,
  type,
  icon,
  formType,
  placeholder,
}) => {
  const inputClassName =
    formType === FormTypes.authForm ? css.authFormInput : css.input;
  const input = (
    <input
      className={inputClassName}
      type={type}
      placeholder={placeholder}
      {...settings}
    />
  );

  const inputWithWrap = (
    <div className={css.inputContainer}>
      {input}
      {icon}
    </div>
  );

  return inputWrap ? inputWithWrap : input;
};

export default Input;
