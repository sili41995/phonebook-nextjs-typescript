import { ChangeEvent, MouseEvent, ReactElement } from 'react';
import { FormTypes, InputTypes, IconBtnType } from '@/constants';

export interface IProps {
  settings?: object;
  type: InputTypes;
  placeholder?: string;
  icon?: ReactElement;
  formType?: FormTypes;
  inputWrap?: boolean;
  autoFocus?: boolean;
  btnType?: IconBtnType;
  btnIcon?: ReactElement | boolean;
  accept?: string;
  altElem?: ReactElement;
  value?: string;
  defaultValue?: string;
  checked?: boolean;
  onBtnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  formType?: FormTypes;
  checked?: boolean;
}
