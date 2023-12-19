import { FC } from 'react';
import Loader from '@/components/Loader';
import { IProps } from './AuthFormBtn.types';
import { BtnType } from '@/constants';
import css from './AuthFormBtn.module.css';

const AuthFormBtn: FC<IProps> = ({ title, isLoading }) => (
  <button className={css.button} disabled={isLoading} type={BtnType.submit}>
    {isLoading ? <Loader /> : title}
  </button>
);

export default AuthFormBtn;
