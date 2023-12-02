import getInputClassName from '@/utils/getInputClassName';
import css from './Input.module.css';
import { IProps } from './Input.types';
import IconButton from '@/components/IconButton';
import { Position } from '@/types/types';

const Input = ({
  inputWrap,
  inputType,
  settings,
  fieldIcon,
  btnType,
  action,
  children,
  right = 0,
  ...otherProps
}: IProps) => {
  const inputClassName = getInputClassName(css, inputType);
  const styledInput = (
    <input {...settings} className={inputClassName} {...otherProps} />
  );
  const inputWithWrap = (
    <div className={css.container} {...otherProps}>
      {styledInput}
      {fieldIcon}
      {btnType && (
        <IconButton
          position={Position.absolute}
          top='center'
          right={right}
          btnType={btnType}
          width={44}
          height={35}
          onBtnClick={action}
          inputWrap
        >
          {children}
        </IconButton>
      )}
    </div>
  );

  return inputWrap ? inputWithWrap : styledInput;
};

export default Input;
