'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { IContact } from '@/types/types';
import { IProps } from './EditContactForm.types';
import ContactFormInputs from '@/components/ContactFormInputs';
import ModalForm from '@/components/ModalForm';
import AcceptBtn from '@/components/AcceptBtn';
import { toasts } from '@/utils';
import css from './EditContactForm.module.css';
import GoBackLink from '@/components/GoBackLink';
import { updateContact } from '@/app/lib/actions';

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

  const handleFormSubmit: SubmitHandler<IContact> = async (data) => {
    if (!id) return;

    try {
      setIsLoading(true);
      await updateContact({ data, id });
      toasts.successToast('Contact updated successfully');
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    } finally {
      setIsLoading(false);
    }
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
          <GoBackLink title='Cancel' />
        </div>
      </form>
    </ModalForm>
  );
};

export default EditContactForm;
