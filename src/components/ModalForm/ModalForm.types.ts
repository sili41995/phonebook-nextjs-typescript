import { ReactNode } from 'react';
import { FormTypes } from '@/constants';

export interface IProps {
  children: ReactNode;
  formType?: FormTypes;
}

export interface IStyledProps {
  formType?: FormTypes;
}
