'use client';

import 'react-toastify/dist/ReactToastify.css';
import { MdEmail, MdLock } from 'react-icons/md';
import defaultAvatar from '@/images/default-signin-avatar.png';
import css from './LoginForm.module.css';
import Image from 'next/image';
import Input from '@/components/Input';
import { InputType } from '@/constants/inputType';
import { IconSizes } from '@/constants/iconSizes';
import AuthFormMessage from '@/components/AuthFormMessage';
import { authenticate } from '@/app/lib/actions';
import { BtnTypes, ICredentials } from '@/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import toasts from '@/utils/toasts';
import { useEffect } from 'react';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    //     watch,
  } = useForm<ICredentials>();

  useEffect(() => {
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
      await authenticate(data);
    } catch (error) {
      toasts.errorToast('Wrong email or password');
    }
  };
  //   const [isShowPassword, setIsShowPassword] = useState(false);
  //   const watchPassword = watch('password');
  //   const inputType = isShowPassword ? 'text' : 'password';
  //   const inputPasswordBtnIcon = isShowPassword ? (
  //     <MdVisibilityOff size={iconSizes.primaryIconSize} />
  //   ) : (
  //     <MdVisibility size={iconSizes.primaryIconSize} />
  //   );
  //   const toggleIsShowPassword = () => {
  //     setIsShowPassword((prevState) => !prevState);
  //   };

  return (
    <>
      <h2 className={css.title}>log in</h2>
      <p className={css.message}>Welcome to Phonebook!</p>
      <Image
        className={css.avatar}
        src={defaultAvatar}
        alt='user avatar'
        width={150}
        priority
      />
      <form onSubmit={handleSubmit(handleFormSubmit)} className={css.form}>
        <Input
          settings={{ ...register('email', { required: true }) }}
          type='email'
          placeholder='Email'
          inputType={InputType.auth}
          icon={<MdEmail size={IconSizes.secondaryIconSize} />}
          inputWrap
          autoFocus
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 7 }),
          }}
          type='password'
          placeholder='Password'
          inputType={InputType.auth}
          icon={<MdLock size={IconSizes.secondaryIconSize} />}
          inputWrap
        />
        <AuthFormMessage
          action='Sign up'
          pageLink='/register'
          message="if you don't have an account yet"
        />
        <button
          disabled={isSubmitting}
          className={css.button}
          type={BtnTypes.submit}
        >
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
