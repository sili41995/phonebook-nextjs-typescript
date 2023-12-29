'use client';

import { getProfileFormData, onChangeAvatar, toasts } from '@/utils';
import { ChangeEvent, FC, useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { IProps } from './ImageContainer.types';
import css from './ImageContainer.module.css';
import { SubmitHandler } from 'react-hook-form';
import { IAvatar } from '@/types/types';
import ChangeAvatarForm from '../ChangeAvatarForm';
import { Messages } from '@/constants';
import { updateAvatar } from '@/app/lib/actions';

const ImageContainer: FC<IProps> = ({ avatar, imgSize }) => {
  const [userAvatar, setUserAvatar] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userAvatarRef = useRef<HTMLImageElement>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setUserAvatar(e.target.files);
    onChangeAvatar({ e, ref: userAvatarRef });
  };

  const onCancelBtnClick = () => {
    if (userAvatarRef.current) {
      userAvatarRef.current.src = avatar;
      setUserAvatar(null);
    }
  };

  const handleFormSubmit: SubmitHandler<IAvatar> = async (data) => {
    if (!userAvatar?.length) return;

    data.avatar = userAvatar;
    const userFormData = getProfileFormData(data);

    try {
      setIsLoading(true);
      await updateAvatar(userFormData);
      toasts.successToast(Messages.updateAvatar);
      setUserAvatar(null);
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.imageContainer}>
      <img
        className={css.image}
        src={avatar}
        alt='user avatar'
        ref={userAvatarRef}
        width={imgSize}
        height={imgSize}
      />
      <ChangeAvatarForm
        isLoading={isLoading}
        avatar={userAvatar}
        handleFormSubmit={handleFormSubmit}
        onChangeInput={onChangeInput}
        onCancelBtnClick={onCancelBtnClick}
      />
    </div>
  );
};

export default ImageContainer;
