'use client';

import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
// import { selectIsLoading } from 'redux/contacts/selectors';
// import { updateContact } from 'redux/contacts/operations';
// import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { IContact } from '@/types/types';
import { IProps } from './EditContactForm.types';
import ContactFormInputs from '@/components/ContactFormInputs';
import ModalForm from '@/components/ModalForm';
import AcceptBtn from '@/components/AcceptBtn';
import { IconBtnType, IconSizes, PagePaths } from '@/constants';
import { toasts } from '@/utils';
// import { ButtonsContainer, Form, Title } from './EditContactForm.styled';
import css from './EditContactForm.module.css';
import GoBackLink from '@/components/GoBackLink';

const EditContactForm = ({ contact }: IProps) => {
  const [checked, setChecked] = useState<boolean>(
    () => contact.favorite as boolean
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const id = contact._id;
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IContact>();

  const handleFormSubmit: SubmitHandler<IContact> = (data) => {
    // dispatch(updateContact({ data, id }))
    //     .unwrap()
    //     .then((data) => {
    //       toasts.successToast('Contact updated successfully');
    //     })
    //     .catch((error) => {
    //       toasts.errorToast(error);
    // });
  };

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <ModalForm>
      <p className={css.title}>Contact editing</p>
      <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <ContactFormInputs
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          contact={contact}
          onCheckboxChange={onCheckboxChange}
          checked={checked}
        />
        <div className={css.btnWrap}>
          <AcceptBtn disabled={isLoading} />
          <GoBackLink />
        </div>
      </form>
    </ModalForm>
  );
};

export default EditContactForm;
