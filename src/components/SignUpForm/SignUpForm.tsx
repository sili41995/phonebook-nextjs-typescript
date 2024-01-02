'use client';

import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  FaUser,
  FaLock,
  FaMapMarkerAlt,
  FaRegCalendarCheck,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import {
  filterEmptyFields,
  getProfileFormData,
  onChangeAvatar,
  toasts,
} from '@/utils';
import Input from '@/components/Input';
import AuthFormBtn from '@/components/AuthFormBtn';
import AuthFormMessage from '@/components/AuthFormMessage';
import { ISignUpCredentials } from '@/types/types';
import {
  PagePaths,
  regExp,
  FormTypes,
  IconSizes,
  InputTypes,
  Messages,
  DefaultAvatars,
} from '@/constants';
import { signUp } from '@/app/lib/actions';
import css from './SignUpForm.module.css';

const { secondaryIconSize } = IconSizes;
const { authForm } = FormTypes;
const { text, email, file } = InputTypes;
const { dateOfBirthRegEx, emailRegEx, phoneRegEx } = regExp;

const SignUpForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userAvatar, setUserAvatar] = useState<FileList | null>(null);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ISignUpCredentials>();
  const { push: routerPush } = useRouter();
  const signInPageLink = `/${PagePaths.signInPath}`;
  const userAvatarRef = useRef<HTMLImageElement>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setUserAvatar(e.target.files);
    onChangeAvatar({ e, ref: userAvatarRef });
  };

  const onSubmit: SubmitHandler<ISignUpCredentials> = async (data) => {
    if (userAvatar) {
      data.avatar = userAvatar;
    }

    const userData = filterEmptyFields<ISignUpCredentials>(data);
    const userFormData = getProfileFormData(userData);

    try {
      setIsLoading(true);
      await signUp(userFormData);
      toasts.successToast('User has been successfully registered');
      routerPush(signInPageLink);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    errors.name && toasts.errorToast('First name is required');
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
    errors.phone && toasts.errorToast(Messages.phoneRegExpErr);
    errors.dateOfBirth &&
      toasts.errorToast('Date of birth must be in DD-MM-YYYY format');
  }, [errors, isSubmitting]);

  return (
    <>
      <h2 className={css.title}>sign up</h2>
      <p className={css.message}>{Messages.greetings}!</p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          settings={{ ...register('avatar') }}
          accept='image/png, image/jpeg, image/jpg'
          onChange={onChangeInput}
          type={file}
          altElem={
            <img
              className={css.image}
              src={DefaultAvatars.signUpAvatar}
              alt='profile avatar'
              ref={userAvatarRef}
            />
          }
        />
        <Input
          settings={{ ...register('name', { required: true }) }}
          type={text}
          placeholder='First name'
          icon={<FaUser size={secondaryIconSize} />}
          formType={authForm}
          inputWrap
          autoFocus
        />
        <Input
          settings={{ ...register('lastName') }}
          type={text}
          placeholder='Last name'
          icon={<FaUser size={secondaryIconSize} />}
          formType={authForm}
          inputWrap
        />

        <Input
          settings={{ ...register('phone', { pattern: phoneRegEx }) }}
          type={text}
          placeholder='Phone'
          icon={<FaPhoneAlt size={secondaryIconSize} />}
          formType={authForm}
          inputWrap
        />
        <Input
          settings={{
            ...register('email', {
              required: true,
              pattern: emailRegEx,
            }),
          }}
          type={email}
          placeholder='Email'
          icon={<FaEnvelope size={secondaryIconSize} />}
          formType={authForm}
          inputWrap
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 6 }),
          }}
          type={text}
          placeholder='Password'
          icon={<FaLock size={secondaryIconSize} />}
          formType={authForm}
          inputWrap
        />
        <Input
          settings={{ ...register('location') }}
          type={text}
          placeholder='Location'
          icon={<FaMapMarkerAlt size={secondaryIconSize} />}
          formType={authForm}
          inputWrap
        />
        <Input
          settings={{
            ...register('dateOfBirth', { pattern: dateOfBirthRegEx }),
          }}
          type={text}
          placeholder='Date of birth'
          icon={<FaRegCalendarCheck size={secondaryIconSize} />}
          formType={authForm}
          inputWrap
        />
        <AuthFormMessage
          action='Sign in'
          pageLink={signInPageLink}
          message='if you have an account'
        />
        <AuthFormBtn title='Enlist' disabled={isLoading} />
      </form>
    </>
  );
};

export default SignUpForm;
