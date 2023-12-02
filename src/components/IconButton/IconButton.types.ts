import { IconBtnType } from '@/constants/iconBtnType';
import { BtnTypes, Position } from '@/types/types';
import { MouseEvent, ReactElement, ReactNode } from 'react';

export interface IProps {
  icon?: ReactElement;
  children?: ReactNode;
  type?: BtnTypes;
  onBtnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  btnType?: IconBtnType;
  position?: Position;
  right?: number;
  width?: number;
  height?: number;
  top?: 'center' | number;
  inputWrap?: boolean;
  disabled?: boolean;
}
