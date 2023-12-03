'use client';

import 'react-toastify/dist/ReactToastify.css';
import Input from '@/components/Input';
import css from './RegisterForm.module.css';
import { InputType } from '@/constants/inputType';
import { IconSizes } from '@/constants/iconSizes';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import AuthFormMessage from '@/components/AuthFormMessage';
import { useFormState, useFormStatus } from 'react-dom';
import { signUp } from '@/app/lib/actions';
import { BtnTypes, ICredentials } from '@/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import toasts from '@/utils/toasts';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ICredentials>();

  useEffect(() => {
    errors.name && toasts.errorToast('Username is required');
    errors.email && toasts.errorToast('Email is required');
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? 'Password is required'
          : 'Password minimum length is 7 characters'
      );
  }, [errors, isSubmitting]);

  const handleFormSubmit: SubmitHandler<ICredentials> = async (
    data: ICredentials
  ): Promise<void> => {
    try {
      await signUp(data);
      toasts.successToast('User has been successfully registered');
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    }
  };

  return (
    <>
      <h2 className={css.title}>sign up</h2>
      <p className={css.message}>Welcome to Phonebook!</p>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={css.form}>
        <Input
          settings={{ ...register('name', { required: true }) }}
          type='text'
          placeholder='Username'
          inputType={InputType.auth}
          icon={<MdPerson size={IconSizes.secondaryIconSize} />}
          inputWrap
          required
          autoFocus
        />
        <Input
          settings={{ ...register('email', { required: true }) }}
          type='email'
          placeholder='Email'
          inputType={InputType.auth}
          icon={<MdEmail size={IconSizes.secondaryIconSize} />}
          inputWrap
          required
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 7 }),
          }}
          type='text'
          placeholder='Password'
          inputType={InputType.auth}
          icon={<MdLock size={IconSizes.secondaryIconSize} />}
          inputWrap
          required
        />
        <AuthFormMessage
          action='Log in'
          pageLink='/login'
          message='if you have an account'
        />
        <button
          disabled={isSubmitting}
          className={css.button}
          type={BtnTypes.submit}
        >
          Enlist
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
