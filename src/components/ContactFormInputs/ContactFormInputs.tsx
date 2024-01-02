import { FC, useEffect } from 'react';
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaInfo,
  FaTelegramPlane,
  FaIdCardAlt,
  FaCheck,
} from 'react-icons/fa';
import { Messages, IconSizes, InputTypes, regExp } from '@/constants';
import Input from '@/components/Input';
import { toasts } from '@/utils';
import { IProps } from './ContactFormInputs.types';
import css from './ContactFormInputs.module.css';

const { defaultIconSize, primaryIconSize } = IconSizes;
const { checkbox, text, email: emailType } = InputTypes;
const { emailRegEx, phoneRegEx } = regExp;

const ContactFormInputs: FC<IProps> = ({
  register,
  errors,
  isSubmitting,
  onCheckboxChange,
  checked,
  contact = {},
}) => {
  const {
    name = '',
    phone = '',
    email = '',
    role = '',
    tgUsername = '',
    description = '',
  } = contact;

  useEffect(() => {
    errors.name && toasts.errorToast(Messages.firstNameReqErr);
    errors.phone &&
      toasts.errorToast(
        errors.phone.type === 'required'
          ? 'Phone is required'
          : Messages.phoneRegExpErr
      );
    errors.email && toasts.errorToast(Messages.emailRegExpErr);
  }, [errors, isSubmitting]);

  return (
    <>
      <Input
        settings={{ ...register('name', { required: true }) }}
        type={text}
        placeholder='Name'
        icon={<FaUser size={defaultIconSize} />}
        defaultValue={name}
        inputWrap
        autoFocus
      />
      <Input
        settings={{
          ...register('phone', { pattern: phoneRegEx, required: true }),
        }}
        type={text}
        placeholder='Phone'
        icon={<FaPhoneAlt size={defaultIconSize} />}
        defaultValue={phone}
        inputWrap
      />
      <Input
        settings={{
          ...register('email', {
            pattern: emailRegEx,
          }),
        }}
        type={emailType}
        placeholder='Email'
        icon={<FaEnvelope size={defaultIconSize} />}
        defaultValue={email}
        inputWrap
      />
      <Input
        settings={{
          ...register('role'),
        }}
        type={text}
        placeholder='Role'
        icon={<FaIdCardAlt size={defaultIconSize} />}
        defaultValue={role}
        inputWrap
      />
      <Input
        settings={{
          ...register('tgUsername'),
        }}
        type={text}
        placeholder='Telegram username'
        icon={<FaTelegramPlane size={defaultIconSize} />}
        defaultValue={tgUsername}
        inputWrap
      />
      <Input
        settings={{
          ...register('description'),
        }}
        type={text}
        placeholder='About contact'
        icon={<FaInfo size={defaultIconSize} />}
        defaultValue={description}
        inputWrap
      />
      <div className={css.inputWrap}>
        <p className={css.label}>Favorite contact</p>
        <Input
          settings={{ ...register('favorite') }}
          checked={checked}
          onChange={onCheckboxChange}
          type={checkbox}
          altElem={<FaCheck size={primaryIconSize} />}
        />
      </div>
    </>
  );
};

export default ContactFormInputs;
