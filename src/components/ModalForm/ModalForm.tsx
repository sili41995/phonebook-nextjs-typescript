'use client';

import { FC } from 'react';
import { IProps } from './ModalForm.types';
import { FormTypes } from '@/constants';
import css from './ModalForm.module.css';

const ModalForm: FC<IProps> = ({ children, formType }) => {
  const className =
    formType === FormTypes.authForm ? css.authModalForm : css.modalForm;

  return <div className={className}>{children}</div>;
};

export default ModalForm;
