import { MouseEvent, ReactNode } from 'react';
import { BtnType, IconBtnType, Positions } from 'constants/index';

export interface IProps {
  icon: ReactNode;
  onBtnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: BtnType;
  btnType: IconBtnType;
  position?: Positions;
  top?: number | 'center';
  right?: number;
  width?: number;
  height?: number;
  inputWrap?: boolean;
  disabled?: boolean;
  title?: string;
}

export interface IStyledProps {
  position?: Positions;
  top?: number | 'center';
  right?: number;
  width?: number;
  height?: number;
  inputWrap?: boolean;
  btnType: IconBtnType;
}
