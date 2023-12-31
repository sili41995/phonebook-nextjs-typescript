'use client';

import { FC } from 'react';
import { IProps } from './Input.types';
import css from './Input.module.css';
import { FormTypes, InputTypes } from '@/constants';

const Input: FC<IProps> = ({
  settings,
  inputWrap,
  icon,
  formType,
  placeholder,
  altElem,
  onChange,
  type,
  checked,
  ...otherProps
}) => {
  const inputClassName =
    formType === FormTypes.authForm ? css.authFormInput : css.input;
  const input = (
    <input
      {...settings}
      className={inputClassName}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      checked={checked}
      {...otherProps}
    />
  );

  if (type === InputTypes.file) {
    return (
      <label className={css.label}>
        {altElem}
        {input}
      </label>
    );
  }

  if (type === InputTypes.checkbox) {
    return (
      <label className={css.checkbox}>
        {input}
        {altElem}
      </label>
    );
  }

  const inputWithWrap = (
    <div className={css.inputContainer}>
      {input}
      {icon}
    </div>
  );

  return inputWrap ? inputWithWrap : input;
};

export default Input;
