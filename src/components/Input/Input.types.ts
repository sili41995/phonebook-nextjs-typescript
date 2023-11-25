import { InputType } from '@/constants/inputType';
import { InputTypes } from '@/types/types';
import { ReactElement } from 'react';

export interface IProps {
  inputWrap?: boolean;
  inputType?: InputType;
  icon: ReactElement;
  type?: InputTypes;
  name: string;
  placeholder: string;
  required?: boolean;
  autoFocus?: boolean;
}
