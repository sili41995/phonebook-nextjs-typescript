'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import AuthFormMessage from '@/components/AuthFormMessage';
import Input from '@/components/Input';
import AuthFormBtn from '@/components/AuthFormBtn';
import { ICredentials } from '@/types/types';
import {
  Messages,
  FormTypes,
  IconBtnType,
  IconSizes,
  InputTypes,
  PagePaths,
} from '@/constants';
import defaultAvatar from '@/images/default-signin-avatar.png';
import css from './SignInForm.module.css';
import { authenticate } from '@/app/lib/actions';
import { toasts } from '@/utils';

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<ICredentials | null>(null);
  // const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm<ICredentials>();
  // const passwordInputType = isShowPassword
  //   ? InputTypes.text
  //   : InputTypes.password;
  // const watchPassword = watch('password');
  // const passwordBtnIcon =
  //   Boolean(watchPassword) &&
  //   (isShowPassword ? (
  //     <FaEyeSlash size={IconSizes.secondaryIconSize} />
  //   ) : (
  //     <FaEye size={IconSizes.secondaryIconSize} />
  //   ));
  const signUpPageLink = `/${PagePaths.signUpPath}`;

  // const toggleIsShowPassword = () => {
  //   setIsShowPassword((prevState) => !prevState);
  // };

  useEffect(() => {
    errors.email &&
      toasts.errorToast(
        errors.email.type === 'required'
          ? Messages.emailReqErr
          : Messages.emailRegExpErr
      );
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? Messages.passwordReqErr
          : Messages.passwordMinLengthErr
      );
  }, [isSubmitting, errors]);

  const onSubmit: SubmitHandler<ICredentials> = async (
    data: ICredentials
  ): Promise<void> => {
    try {
      setIsLoading(true);
      await authenticate(data);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className={css.title}>sign in</h2>
      <p className={css.message}>{Messages.greetings}</p>
      <Image
        className={css.image}
        src={defaultAvatar}
        alt='user avatar'
        width={150}
        height={150}
      />
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <Input
          settings={{ ...register('email', { required: true }) }}
          type={InputTypes.email}
          placeholder='Email'
          icon={<FaEnvelope size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
          autoFocus
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 6 }),
          }}
          type={InputTypes.text}
          placeholder='Password'
          icon={<FaLock size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
          btnType={IconBtnType.toggleShowPassword}
        />
        <AuthFormMessage
          action='Sign up'
          pageLink={signUpPageLink}
          message="if you don't have an account yet"
        />
        <AuthFormBtn title='Sign in' disabled={isLoading} />
      </form>
    </>
  );
};

export default SignInForm;
