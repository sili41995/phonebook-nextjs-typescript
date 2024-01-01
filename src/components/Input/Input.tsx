import { FC } from 'react';
import { IProps } from './Input.types';
import css from './Input.module.css';
import { FormTypes, IconBtnType, InputTypes } from '@/constants';
import IconButton from '@/components/IconButton';

const Input: FC<IProps> = ({
  settings,
  inputWrap,
  icon,
  formType = FormTypes.default,
  placeholder,
  altElem,
  onChange,
  type,
  checked,
  onBtnClick,
  btnIcon,
  btnType = IconBtnType.default,
  ...otherProps
}) => {
  const input = (
    <input
      {...settings}
      className={css[formType]}
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
      {btnIcon && (
        <IconButton btnType={btnType} onBtnClick={onBtnClick} icon={btnIcon} />
      )}
    </div>
  );

  return inputWrap ? inputWithWrap : input;
};

export default Input;
