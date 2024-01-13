import { FC } from 'react';
import Loader from '@/components/Loader';
import { IProps } from './AuthFormBtn.types';
import { BtnType } from '@/constants';
import css from './AuthFormBtn.module.css';
import AriaLabels from '@/constants/ariaLabels';

const AuthFormBtn: FC<IProps> = ({ title, disabled }) => (
  <button
    className={css.button}
    disabled={disabled}
    type={BtnType.submit}
    aria-label={AriaLabels.authBtn}
  >
    {disabled ? <Loader /> : title}
  </button>
);

export default AuthFormBtn;
