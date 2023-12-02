import { IconBtnType } from '@/constants/iconBtnType';
import { InputType } from '@/constants/inputType';
import { InputTypes } from '@/types/types';
import { ChangeEvent, ReactElement, ReactNode } from 'react';

export interface IProps {
  icon?: ReactNode;
  right?: number;
  position?: string;
  fieldIcon?: ReactNode;
  inputWrap?: boolean;
  inputType?: InputType;
  type?: InputTypes;
  placeholder?: string;
  required?: boolean;
  autoFocus?: boolean;
  settings?: { [key: string]: any };
  defaultValue?: string;
  value?: string;
  btnType?: IconBtnType;
  children?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  action?: () => void;
}
