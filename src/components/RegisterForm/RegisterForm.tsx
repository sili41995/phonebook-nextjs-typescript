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

const RegisterForm = () => {
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
      <form action=''>
        <Input />
      </form>
    </>
    //     <>
    //
    //
    //       <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
    //         <Input
    //           settings={{ ...register('name', { required: true }) }}
    //           type='text'
    //           placeholder='Username'
    //           inputType={formType.authForm}
    //           autoFocus
    //           inputWrap
    //           fieldIcon={<MdPerson size={iconSizes.secondaryIconSize} />}
    //         />
    //         {errors.name && toasts.errorToast('Username is required')}
    //         <Input
    //           settings={{ ...register('email', { required: true }) }}
    //           type='email'
    //           placeholder='Email'
    //           inputType={formType.authForm}
    //           inputWrap
    //           fieldIcon={<MdEmail size={iconSizes.secondaryIconSize} />}
    //         />
    //         {errors.email && toasts.errorToast('Email is required')}
    //         <Input
    //           settings={{
    //             ...register('password', { required: true, minLength: 7 }),
    //           }}
    //           type='text'
    //           placeholder='Password'
    //           inputType={formType.authForm}
    //           inputWrap
    //           fieldIcon={<MdLock size={iconSizes.secondaryIconSize} />}
    //         />
    //         {errors.password &&
    //           toasts.errorToast(
    //             errors.password.type === 'required'
    //               ? 'Password is required'
    //               : 'Password minimum length is 7 characters'
    //           )}
    //         <AuthFormMessage
    //           action={'Log in'}
    //           pageLink={pageLink}
    //           message={'if you have an account'}
    //         />
    //         <button className={css.button} disabled={isLoading} type='submit'>
    //           Enlist
    //         </button>
    //       </form>
    //     </>
  );
};

export default RegisterForm;
