'use client';

import { ChangeEvent, FC, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { InputTypes } from '@/constants';
import {
  filterEmptyFields,
  getIsContact,
  getProfileFormData,
  onChangeAvatar,
  toasts,
} from '@/utils';
import { IContact } from '@/types/types';
import ContactFormInputs from '@/components/ContactFormInputs';
import ModalForm from '@/components/ModalForm';
import Input from '@/components/Input';
import GoBackLink from '@/components/GoBackLink';
import AcceptBtn from '@/components/AcceptBtn';
import { DefaultAvatars } from '@/constants';
import css from './AddContactForm.module.css';
import { addContact } from '@/app/lib/actions';

const AddContactForm: FC = () => {
  const [contactAvatar, setContactAvatar] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const contactAvatarRef = useRef<HTMLImageElement>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<IContact>();

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setContactAvatar(e.target.files);
    onChangeAvatar({ e, ref: contactAvatarRef });
  };

  const handleFormSubmit: SubmitHandler<IContact> = async (data) => {
    if (contactAvatar) {
      data.avatar = contactAvatar;
    }

    const contactData = filterEmptyFields<IContact>(data);
    const contactFormData = getProfileFormData(contactData);

    try {
      setIsLoading(true);
      await addContact(contactFormData);
      toasts.successToast('Contact added successfully');

      if (contactAvatarRef.current) {
        contactAvatarRef.current.src = DefaultAvatars.signUpAvatar;
      }

      if (checked) {
        setChecked(false);
      }

      reset();
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
      <p className={css.title}>Add contact</p>
      <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('avatar') }}
          accept='image/png, image/jpeg, image/jpg'
          onChange={onChangeFile}
          type={InputTypes.file}
          altElem={
            <img
              className={css.image}
              src={DefaultAvatars.signUpAvatar}
              alt='profile avatar'
              ref={contactAvatarRef}
            />
          }
        />
        <ContactFormInputs
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          onCheckboxChange={onCheckboxChange}
          checked={checked}
        />
        <div className={css.btnContainer}>
          <AcceptBtn disabled={isLoading} />
          <GoBackLink />
        </div>
      </form>
    </ModalForm>
  );
};

export default AddContactForm;
