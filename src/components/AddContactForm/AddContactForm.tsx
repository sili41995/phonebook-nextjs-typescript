// import { HiPhone } from 'react-icons/hi';
// import { FaUser } from 'react-icons/fa';
// import { GiCheckMark } from 'react-icons/gi';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import 'react-toastify/dist/ReactToastify.css';
// import IconButton from '@/components/IconButton';
// import Input from '@/components/Input';
// import { makeBlur, toasts } from '@/utils';
// import { iconBtnType, iconSizes } from '@/constants';
// import { selectContacts, selectIsLoading } from '@/redux/contacts/selectors';
// import { useRouter } from 'next/navigation';
// import { addContact } from '@/redux/contacts/operations';
// import css from './AddContactForm.module.css';

const AddContactForm = () => {
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const dispatch = useDispatch();
  // const router = useRouter();
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  //   reset,
  // } = useForm();

  // const onCancelBtnClick = () => {
  //   router.back();
  // };

  // const onAcceptBtnClick = ({ currentTarget }) => {
  //   makeBlur(currentTarget);
  // };

  // const handleFormSubmit = (data) => {
  //   const contactName = data.name;
  //   const isContact = contacts.some(({ name }) => name === contactName);
  //   if (isContact) {
  //     toasts.warnToast(`${contactName} is already in contacts`);
  //     return;
  //   }
  //   dispatch(addContact(data))
  //     .unwrap()
  //     .then(() => {
  //       toasts.successToast('Contact added successfully');
  //       reset();
  //     })
  //     .catch(() => {
  //       toasts.errorToast('Adding a contact failed');
  //     });
  // };

  return (
    <>
      {/* <p className={css.title}>Add contact</p>
      <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('name', { required: true, minLength: 1 }) }}
          type='text'
          placeholder='Name'
          autoFocus
          inputWrap
          fieldIcon={<FaUser size={iconSizes.inputIcon} />}
        />
        {errors.name && toasts.errorToast('Name is required')}
        <Input
          settings={{ ...register('number', { required: true }) }}
          type='tel'
          placeholder='Phone'
          inputWrap
          fieldIcon={<HiPhone size={iconSizes.inputIcon} />}
        />
        {errors.number && toasts.errorToast('Phone is required')}
        <div className={css.container}>
          <IconButton
            disabled={isLoading}
            btnType={iconBtnType.accept}
            width={44}
            height={35}
            type='submit'
            onBtnClick={onAcceptBtnClick}
            icon={<GiCheckMark size={iconSizes.primaryIconSize} />}
          />
          <IconButton onBtnClick={onCancelBtnClick}>Cancel</IconButton>
        </div>
      </form> */}
    </>
  );
};

export default AddContactForm;
