'use client';

// import { useState } from 'react';
// import { formType, iconBtnType, iconSizes, pagesPath } from '@/constants';
import { MdEmail, MdLock } from 'react-icons/md';
import defaultAvatar from '@/images/default-signin-avatar.png';
// import { selectIsLoading } from '@/redux/auth/selectors';
// import { loginUser } from '@/redux/auth/operations';
import css from './LoginForm.module.css';
import Image from 'next/image';
import Input from '@/components/Input';
import { InputType } from '@/constants/inputType';
import { IconSizes } from '@/constants/iconSizes';
import AuthFormMessage from '@/components/AuthFormMessage';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();
  //   const [isShowPassword, setIsShowPassword] = useState(false);
  //   const isLoading = useSelector(selectIsLoading);
  //   const dispatch = useDispatch();
  //   const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  //     watch,
  //   } = useForm();
  //   const watchPassword = watch('password');
  //   const inputType = isShowPassword ? 'text' : 'password';
  //   const pageLink = `/${pagesPath.registerPath}`;
  //   const inputPasswordBtnIcon = isShowPassword ? (
  //     <MdVisibilityOff size={iconSizes.primaryIconSize} />
  //   ) : (
  //     <MdVisibility size={iconSizes.primaryIconSize} />
  //   );
  //   const toggleIsShowPassword = () => {
  //     setIsShowPassword((prevState) => !prevState);
  //   };
  //   const onSubmit = (credentials) => {
  //     dispatch(loginUser(credentials))
  //       .unwrap()
  //       .then(() => {
  //         toasts.successToast('Hello, my friend!');
  //       });
  //   };

  return (
    <>
      <h2 className={css.title}>log in</h2>
      <p className={css.message}>Welcome to Phonebook!</p>
      <Image src={defaultAvatar} alt='user avatar' width={150} priority />
      <form action={dispatch} className={css.form}>
        <Input
          type='email'
          name='email'
          placeholder='Email'
          // inputType={InputType.auth}
          icon={<MdEmail size={IconSizes.secondaryIconSize} />}
          // inputWrap
          required
          autoFocus
        />
        {/* {errors.email && toasts.errorToast('Email is required')}
         */}
        <Input
          type='password'
          name='password'
          placeholder='Password'
          // inputType={InputType.auth}
          icon={<MdLock size={IconSizes.secondaryIconSize} />}
          // action={toggleIsShowPassword}
          // btnIcon={inputPasswordBtnIcon}
          // btnType={watchPassword && iconBtnType.toggleShowPassword}
          // inputWrap
          required
        />
        {/* {errors.password &&
               toasts.errorToast(
                 errors.password.type === 'required'
                   ? 'Password is required'
                   : 'Password minimum length is 7 characters'
               )} */}
        <AuthFormMessage
          action='Sign up'
          pageLink='/register'
          message="if you don't have an account yet"
        />
        <button
          className={css.button}
          type='submit'
          // aria-disabled={pending}
        >
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
