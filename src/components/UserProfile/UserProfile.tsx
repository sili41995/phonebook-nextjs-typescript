'use client';

import { ChangeEvent, FC, useRef, useState } from 'react';
import { SlPhone, SlEvent, SlLocationPin } from 'react-icons/sl';
// import 'react-toastify/dist/ReactToastify.css';
import { IconSizes, Messages } from '@/constants';
import { IProps } from './UserProfile.types';
import ChangeAvatarForm from '@/components/ChangeAvatarForm';
import { SubmitHandler } from 'react-hook-form';
import { IAvatar } from '@/types/types';
import { getProfileFormData, onChangeAvatar, toasts } from '@/utils';
import css from './UserProfile.module.css';

const UserProfile: FC<IProps> = ({ user }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userAvatar, setUserAvatar] = useState<FileList | null>(null);
  const userAvatarRef = useRef<HTMLImageElement>(null);

  if (!user) return <div className={css.container}></div>;

  const { name, avatar, email, dateOfBirth, phone, location, lastName } = user;
  const fullName = lastName ? `${name} ${lastName}` : name;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setUserAvatar(e.target.files);
    onChangeAvatar({ e, ref: userAvatarRef });
  };

  const handleFormSubmit: SubmitHandler<IAvatar> = (data) => {
    if (!userAvatar?.length) {
      return;
    }

    //   data.avatar = userAvatar;
    //   const userFormData = getProfileFormData(data);

    //   dispatch(updateUserAvatar(userFormData))
    //     .unwrap()
    //     .then(() => {
    //       toasts.successToast(Messages.updateAvatar);
    //       setUserAvatar(null);
    //     })
    //     .catch((error) => {
    //       toasts.errorToast(error);
    //     });
  };

  const onCancelBtnClick = () => {
    if (userAvatarRef.current) {
      userAvatarRef.current.src = avatar;
      setUserAvatar(null);
    }
  };

  return (
    <div className={css.container}>
      <p className={`${css.name} trimText`}>{name}</p>
      <div className={css.data}>
        <div className={css.imageContainer}>
          <img
            className={css.image}
            src={avatar}
            alt='user avatar'
            ref={userAvatarRef}
          />
          <ChangeAvatarForm
            isLoading={isLoading}
            avatar={userAvatar}
            handleFormSubmit={handleFormSubmit}
            onChangeInput={onChangeInput}
            onCancelBtnClick={onCancelBtnClick}
          />
        </div>
        <p className={`${css.fullName} trimText`}>{fullName}</p>
        <p className={`${css.email} trimText`}>{email}</p>
      </div>
      {(phone || dateOfBirth || location) && (
        <div className={css.userInfo}>
          {dateOfBirth && (
            <div className={css.contactInfo}>
              <span className={css.iconWrap}>
                <SlEvent size={IconSizes.secondaryIconSize} />
              </span>
              <p className='trimText'>{dateOfBirth}</p>
            </div>
          )}
          {phone && (
            <div className={css.contactInfo}>
              <span className={css.iconWrap}>
                <SlPhone size={IconSizes.secondaryIconSize} />
              </span>
              <p className='trimText'>{phone}</p>
            </div>
          )}
          {location && (
            <div className={css.contactInfo}>
              <span className={css.iconWrap}>
                <SlLocationPin size={IconSizes.secondaryIconSize} />
              </span>
              <p className='trimText'>{location}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
