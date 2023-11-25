import getInputClassName from '@/utils/getInputClassName';
import css from './Input.module.css';
import { IProps } from './Input.types';

const Input = ({
  inputWrap,
  inputType,
  icon,
  settings,
  ...otherProps
}: IProps) => {
  const inputClassName = getInputClassName(css, inputType);
  const styledInput = (
    <input {...settings} className={inputClassName} {...otherProps} />
  );
  const inputWithWrap = (
    <div
      className={css.container}
      // {...otherProps}
    >
      {styledInput}
      {icon}
      {/* {btnType && (
      <IconButton
        top='center'
        right={right}
        position='absolute'
        btnType={btnType}
        width={44}
        height={35}
        onBtnClick={action}
        inputWrap
        icon={btnIcon}
      />
    )} */}
    </div>
  );

  return inputWrap ? inputWithWrap : styledInput;
};

export default Input;
