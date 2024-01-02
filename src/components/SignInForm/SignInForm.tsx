'use client';

import { FC, MouseEvent, useEffect, useState } from 'react';
import Image from 'next/image';
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
  DefaultAvatars,
} from '@/constants';
import { authenticate } from '@/app/lib/actions';
import { makeBlur, toasts } from '@/utils';
import css from './SignInForm.module.css';

const { text, password, email } = InputTypes;
const { authForm } = FormTypes;
const { secondaryIconSize } = IconSizes;

const SignInForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ICredentials>();
  const passwordInputType = showPassword ? text : password;

  const passwordBtnIcon = showPassword ? (
    <FaEyeSlash size={secondaryIconSize} />
  ) : (
    <FaEye size={secondaryIconSize} />
  );
  const signUpPageLink = `/${PagePaths.signUpPath}`;

  const toggleShowPassword = (e: MouseEvent<HTMLButtonElement>) => {
    setShowPassword((prevState) => !prevState);
    makeBlur(e.currentTarget);
  };

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
      toasts.errorToast('Email or password is wrong');
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
        src={DefaultAvatars.signInAvatar}
        alt='user avatar'
        width={150}
        height={150}
      />
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <Input
          settings={{ ...register('email', { required: true }) }}
          type={email}
          placeholder='Email'
          icon={<FaEnvelope size={secondaryIconSize} />}
          formType={authForm}
          inputWrap
          autoFocus
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 6 }),
          }}
          type={passwordInputType}
          placeholder='Password'
          icon={<FaLock size={secondaryIconSize} />}
          formType={authForm}
          inputWrap
          onBtnClick={toggleShowPassword}
          btnIcon={passwordBtnIcon}
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
