'use client';

import 'react-toastify/dist/ReactToastify.css';
import { HiPhone } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import css from './AddContactForm.module.css';
import { createContact } from '@/app/lib/actions';
import Input from '../Input';
import IconButton from '@/components/IconButton';
import { IconBtnType } from '@/constants/iconBtnType';
import { IconSizes } from '@/constants/iconSizes';
import { useRouter } from 'next/navigation';
import { BtnTypes, IContact } from '@/types/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import toasts from '@/utils/toasts';
import { useEffect } from 'react';

const AddContactForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IContact>();

  useEffect(() => {
    errors.name && toasts.errorToast('Name is required');
    errors.number && toasts.errorToast('Phone is required');
  }, [errors, isSubmitting]);

  const onCancelBtnClick = () => {
    router.back();
  };

  const handleFormSubmit: SubmitHandler<IContact> = async (
    data: IContact
  ): Promise<void> => {
    try {
      await createContact(data);
      reset();
      toasts.successToast('Contact added successfully');
    } catch (error) {
      toasts.errorToast('Adding a contact failed');
    }
  };

  return (
    <>
      <p className={css.title}>Add contact</p>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={css.form}>
        <Input
          settings={{ ...register('name', { required: true, minLength: 1 }) }}
          type='text'
          placeholder='Name'
          icon={<FaUser size={IconSizes.defaultIconSize} />}
          inputWrap
          autoFocus
        />
        <Input
          settings={{ ...register('number', { required: true }) }}
          type='tel'
          placeholder='Phone'
          icon={<HiPhone size={IconSizes.defaultIconSize} />}
          inputWrap
        />
        <div className={css.container}>
          <IconButton
            disabled={isSubmitting}
            btnType={IconBtnType.accept}
            width={44}
            height={35}
            type={BtnTypes.submit}
            icon={<GiCheckMark size={IconSizes.primaryIconSize} />}
          />
          <IconButton onBtnClick={onCancelBtnClick}>Cancel</IconButton>
        </div>
      </form>
    </>
  );
};

export default AddContactForm;
