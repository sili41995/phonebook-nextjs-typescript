'use client';

import { HiPhone } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { GoX } from 'react-icons/go';
import { GiCheckMark } from 'react-icons/gi';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@/components/IconButton';
import Input from '@/components/Input';
// import { getContactInfo, makeBlur, toasts } from '@/utils';
// import { useTargetContact } from '@/hooks';
// import { pagesPath, iconBtnType, iconSizes } from '@/constants';
// import { updateContact } from '@/redux/contacts/operations';
// import { selectIsLoading } from '@/redux/contacts/selectors';
// import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import css from './EditForm.module.css';
import getContactInfo from '@/utils/getContactInfo';
import { IconSizes } from '@/constants/iconSizes';
import toasts from '@/utils/toasts';
import { IconBtnType } from '@/constants/iconBtnType';
import { BtnTypes, IContact } from '@/types/types';
import { IProps } from './EditForm.types';
import { useRouter } from 'next/navigation';

const EditForm = ({ contact }: IProps) => {
  // const isLoading = useSelector(selectIsLoading);
  // const dispatch = useDispatch();
  // const id = useParams()[pagesPath.dynamicParam];
  // const targetContact = useTargetContact();
  const { name, number } = getContactInfo(contact);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IContact>();
  const { back: goBack } = useRouter();

  useEffect(() => {
    errors.name && toasts.errorToast('Name is required');
    errors.number && toasts.errorToast('Phone is required');
  }, [errors, isSubmitting]);

  const handleFormSubmit: SubmitHandler<IContact> = (data) => {
    console.log(data);
    //   dispatch(updateContact({ data, id }))
    //     .unwrap()
    //     .then(() => {
    //       toasts.successToast('Contact updated successfully');
    //     })
    //     .catch(() => {
    //       toasts.errorToast('Contact update failed');
    //     });
  };

  return (
    <>
      <p className={css.title}>Contact editing</p>
      <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('name', { required: true }) }}
          defaultValue={name}
          type='text'
          placeholder='Name'
          icon={<FaUser size={IconSizes.defaultIconSize} />}
          inputWrap
        />
        <Input
          defaultValue={number}
          settings={{ ...register('number', { required: true }) }}
          type='tel'
          placeholder='Phone'
          inputWrap
          icon={<HiPhone size={IconSizes.defaultIconSize} />}
        />
        <div className={css.buttonsContainer}>
          <IconButton
            disabled={isSubmitting}
            btnType={IconBtnType.accept}
            width={44}
            height={35}
            type={BtnTypes.submit}
            icon={<GiCheckMark size={IconSizes.primaryIconSize} />}
          />
          <IconButton
            btnType={IconBtnType.cancel}
            width={44}
            height={35}
            onBtnClick={goBack}
            icon={<GoX size={IconSizes.primaryIconSize} />}
          />
        </div>
      </form>
    </>
  );
};

export default EditForm;