'use client';

import { ChangeEvent, FC, Suspense, useRef, useState } from 'react';
// import { SubmitHandler } from 'react-hook-form';
// import { NavLink, Outlet } from 'react-router-dom';
import { IProps } from './ContactProfile.types';
import ImageContainer from '../ImageContainer';
// import Loader from 'components/Loader';
// import EditContactForm from 'components/EditContactForm';
// import ChangeAvatarForm from 'components/ChangeAvatarForm';
// import { Messages, PagePaths } from 'constants/index';
// import { getProfileFormData, onChangeAvatar, toasts } from 'utils';
// import { IAvatar } from 'types/types';
// import { useAppDispatch } from 'hooks/redux';
// import { updateContactAvatar } from 'redux/contacts/operations';
import css from './ContactProfile.module.css';
import ContactInfo from '@/components/ContactInfo';

const ContactProfile: FC<IProps> = ({ contact }) => {
  const { avatar, name, role, _id: id } = contact;

  return (
    <>
      <ImageContainer avatar={avatar as string} imgSize={200} />
      <div className={css.titleWrap}>
        <p className={css.name}>{name}</p>
        {role && <p className={css.role}>{role}</p>}
      </div>
      <ContactInfo contact={contact} />
    </>
  );
};

export default ContactProfile;
