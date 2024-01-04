'use client';

import { FC, useEffect } from 'react';
import { IProps } from './ModalForm.types';
import { FormTypes } from '@/constants';
import css from './ModalForm.module.css';

const ModalForm: FC<IProps> = ({
  children,
  formType = FormTypes.modalForm,
}) => {
  useEffect(() => {
    if (formType === FormTypes.withBackdrop) {
      window.document.body.style.overflowY = 'hidden';

      return () => {
        window.document.body.style.overflowY = 'scroll';
      };
    }
  }, [formType]);

  return <div className={css[formType]}>{children}</div>;
};

export default ModalForm;
