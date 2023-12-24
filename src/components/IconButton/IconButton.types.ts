import { MouseEvent, ReactNode } from 'react';
import { BtnType, IconBtnType, Positions } from '@/constants';

export interface IProps {
  icon: ReactNode;
  onBtnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  type?: BtnType;
  disabled?: boolean;
  btnType: IconBtnType;
  // position?: Positions;
  // top?: number | 'center';
  // right?: number;
  // width?: number;
  // height?: number;
  // inputWrap?: boolean;
}
