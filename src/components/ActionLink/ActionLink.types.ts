import { ReactNode } from 'react';
import { IconBtnType } from '@/constants';

export interface IProps {
  link: string;
  icon: ReactNode;
  btnType: IconBtnType;
}

export interface IStyledProps {
  btnType: IconBtnType;
}
