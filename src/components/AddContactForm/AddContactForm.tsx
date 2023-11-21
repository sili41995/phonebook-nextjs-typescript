'use client';

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
import css from './AddContactForm.module.css';

import { createContact } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import Input from '../Input';
import { InputType } from '@/constants/inputType';
import IconButton from '@/components/IconButton';
import { IconBtnType } from '@/constants/iconBtnType';
import { IconSizes } from '@/constants/iconSizes';
import { useRouter } from 'next/navigation';
import contactsServiceApi from '@/service/contactsServiceApi';

const AddContactForm = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createContact, initialState);

  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const dispatch = useDispatch();
  const router = useRouter();
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  //   reset,
  // } = useForm();

  const onCancelBtnClick = () => {
    router.back();
  };

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
      <p className={css.title}>Add contact</p>
      <form action={dispatch} className={css.form}>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          // icon={<FaUser size={iconSizes.inputIcon} />}
          // inputWrap
          required
          autoFocus
        />
        {/* {errors.name && toasts.errorToast('Name is required')} */}
        <Input
          type='tel'
          name='number'
          placeholder='Phone'
          // icon={<HiPhone size={iconSizes.inputIcon} />}
          // inputWrap
          required
        />
        {/* {errors.number && toasts.errorToast('Phone is required')} */}
        <div className={css.container}>
          <IconButton
            // disabled={isLoading}
            btnType={IconBtnType.accept}
            width={44}
            height={35}
            type='submit'
            // icon={<GiCheckMark size={IconSizes.primaryIconSize} />}
          />
          <IconButton onBtnClick={onCancelBtnClick}>Cancel</IconButton>
        </div>
      </form>
      {/* 
      <form >
               
        
 
      </form> */}
    </>
  );
};

export default AddContactForm;
