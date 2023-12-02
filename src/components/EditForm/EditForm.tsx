'use client';

import { HiPhone } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { GoX } from 'react-icons/go';
import { GiCheckMark } from 'react-icons/gi';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@/components/IconButton';
import Input from '@/components/Input';
import { useEffect } from 'react';
import css from './EditForm.module.css';
import getContactInfo from '@/utils/getContactInfo';
import { IconSizes } from '@/constants/iconSizes';
import toasts from '@/utils/toasts';
import { IconBtnType } from '@/constants/iconBtnType';
import { BtnTypes, IContact } from '@/types/types';
import { IProps } from './EditForm.types';
import { useRouter } from 'next/navigation';
import { updateContact } from '@/app/lib/actions';

const EditForm = ({ contact }: IProps) => {
  const { name, number, id } = getContactInfo(contact);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IContact>();
  const { back: goBack } = useRouter();

  useEffect(() => {
    errors.name && toasts.errorToast('Name is required');
    errors.number && toasts.errorToast('Phone is required');
  }, [errors, isSubmitting]);

  const handleFormSubmit: SubmitHandler<IContact> = async (data) => {
    try {
      await updateContact({ data, id: id as string });
      toasts.successToast('Contact updated successfully');
    } catch (error) {
      toasts.errorToast('Contact update failed');
    }
  };

  return (
    <>
      <p className={css.title}>Contact editing</p>
      <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('name', { required: true }) }}
          defaultValue={name}
          type='text'
          placeholder='Name'
          icon={<FaUser size={IconSizes.defaultIconSize} />}
          inputWrap
        />
        <Input
          defaultValue={number}
          settings={{ ...register('number', { required: true }) }}
          type='tel'
          placeholder='Phone'
          inputWrap
          icon={<HiPhone size={IconSizes.defaultIconSize} />}
        />
        <div className={css.buttonsContainer}>
          <IconButton
            disabled={isSubmitting}
            btnType={IconBtnType.accept}
            width={44}
            height={35}
            type={BtnTypes.submit}
            icon={<GiCheckMark size={IconSizes.primaryIconSize} />}
          />
          <IconButton
            btnType={IconBtnType.cancel}
            width={44}
            height={35}
            onBtnClick={goBack}
            icon={<GoX size={IconSizes.primaryIconSize} />}
          />
        </div>
      </form>
    </>
  );
};

export default EditForm;
