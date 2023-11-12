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

const LoginForm = () => {
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
      <Image src={defaultAvatar} alt='user avatar' width={150} />
      <form className={css.form} action=''>
        <Input
          type='email'
          placeholder='Email'
          inputType={InputType.auth}
          icon={<MdEmail size={IconSizes.secondaryIconSize} />}
          inputWrap
          required
          autoFocus
        />
        <Input
          type='password'
          placeholder='Password'
          inputType={InputType.auth}
          icon={<MdLock size={IconSizes.secondaryIconSize} />}
          inputWrap
          required
        />
        <AuthFormMessage
          action='Sign up'
          pageLink='/register'
          message="if you don't have an account yet"
        />
        <button className={css.button} type='submit'>
          Log in
        </button>
      </form>
    </>
    //     <>

    //       <form  onSubmit={handleSubmit(onSubmit)}>
    //         <Input
    //           settings={{ ...register('email', { required: true }) }}
    //         />
    //         {errors.email && toasts.errorToast('Email is required')}
    //         <Input
    //           settings={{
    //             ...register('password', { : true, minLength: 7 }),
    //           }}
    //           btnType={watchPassword && iconBtnType.toggleShowPassword}
    //           action={toggleIsShowPassword}
    //           btnIcon={inputPasswordBtnIcon}
    //         />
    //         {errors.password &&
    //           toasts.errorToast(
    //             errors.password.type === 'required'
    //               ? 'Password is required'
    //               : 'Password minimum length is 7 characters'
    //           )}
    //       </form>
    //     </>
  );
};

export default LoginForm;
