import { IconBtnType } from '@/constants/iconBtnType';
import { ReactNode } from 'react';

export interface IProps {
  link: string;
  children: ReactNode;
  btnType: IconBtnType;
}
