'use client';

import { FC } from 'react';
import { IProps } from './ContactProfile.types';
import ImageContainer from '@/components/ImageContainer';
import ContactInfo from '@/components/ContactInfo';
import { updateContactAvatar } from '@/app/lib/actions';
import css from './ContactProfile.module.css';

const ContactProfile: FC<IProps> = ({ contact }) => {
  const { avatar, name, role, _id: id } = contact;

  const updateAvatar = updateContactAvatar.bind(null, id as string);

  return (
    <>
      <ImageContainer
        avatar={avatar as string}
        imgSize={200}
        updateAvatarFunc={updateAvatar}
      />
      <div className={css.titleWrap}>
        <p className={css.name}>{name}</p>
        {role && <p className={css.role}>{role}</p>}
      </div>
      <ContactInfo contact={contact} />
    </>
  );
};

export default ContactProfile;
