'use client';

// import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
// import { useDispatch, useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import 'react-toastify/dist/ReactToastify.css';
// import { toasts } from '@/utils';
// import AuthFormMessage from '@/components/AuthFormMessage';
// import { formType, iconSizes, pagesPath } from '@/constants';
// import Input from '@/components/Input';
// import { registerUser } from '@/redux/auth/operations';
// import { selectIsLoading } from '@/redux/auth/selectors';
import Input from '@/components/Input';
import css from './RegisterForm.module.css';
import { InputType } from '@/constants/inputType';
import { IconSizes } from '@/constants/iconSizes';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import AuthFormMessage from '@/components/AuthFormMessage';
import { useFormState, useFormStatus } from 'react-dom';
import { signUp } from '@/app/lib/actions';

const RegisterForm = () => {
  const [state, dispatch] = useFormState(signUp, undefined);
  const { pending } = useFormStatus();
  //   const isLoading = useSelector(selectIsLoading);
  //   const dispatch = useDispatch();
  //   const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  //   } = useForm();
  //   const pageLink = `/${pagesPath.loginPath}`;
  //   const onSubmit = (data) => {
  //     dispatch(registerUser(data))
  //       .unwrap()
  //       .then(() => {
  //         toasts.successToast('Hello, my friend!');
  //       });
  //   };
  return (
    <>
      <h2 className={css.title}>sign up</h2>
      <p className={css.message}>Welcome to Phonebook!</p>
      <form action={dispatch} className={css.form}>
        <Input
          type='text'
          name='name'
          placeholder='Username'
          inputType={InputType.auth}
          icon={<MdPerson size={IconSizes.secondaryIconSize} />}
          inputWrap
          required
          autoFocus
        />
        {/* {errors.name && toasts.errorToast('Username is required')} */}
        <Input
          type='email'
          name='email'
          placeholder='Email'
          inputType={InputType.auth}
          icon={<MdEmail size={IconSizes.secondaryIconSize} />}
          inputWrap
          required
        />
        {/* {errors.email && toasts.errorToast('Email is required')} */}
        <Input
          type='text'
          name='password'
          placeholder='Password'
          inputType={InputType.auth}
          icon={<MdLock size={IconSizes.secondaryIconSize} />}
          inputWrap
          required
        />
        {/* {errors.password &&
               toasts.errorToast(
                 errors.password.type === 'required'
                   ? 'Password is required'
                   : 'Password minimum length is 7 characters'
               )} */}
        <AuthFormMessage
          action='Log in'
          pageLink='/login'
          message='if you have an account'
        />
        <button className={css.button} type='submit'>
          Enlist
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
