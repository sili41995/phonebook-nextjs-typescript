import { MouseEvent, ReactNode } from 'react';
import { BtnType, IconBtnType } from '@/constants';

export interface IProps {
  icon: ReactNode;
  onBtnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  type?: BtnType;
  disabled?: boolean;
  btnType: IconBtnType;
}
