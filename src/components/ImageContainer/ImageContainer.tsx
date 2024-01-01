'use client';

import { ChangeEvent, FC, useRef, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { getProfileFormData, onChangeAvatar, toasts } from '@/utils';
import { IProps } from './ImageContainer.types';
import { IAvatar } from '@/types/types';
import ChangeAvatarForm from '@/components/ChangeAvatarForm';
import { Messages } from '@/constants';
import css from './ImageContainer.module.css';

const ImageContainer: FC<IProps> = ({ avatar, imgSize, updateAvatarFunc }) => {
  const [previewAvatar, setPreviewAvatar] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const previewAvatarRef = useRef<HTMLImageElement>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setPreviewAvatar(e.target.files);
    onChangeAvatar({ e, ref: previewAvatarRef });
  };

  const onCancelBtnClick = () => {
    if (previewAvatarRef.current) {
      previewAvatarRef.current.src = avatar;
      setPreviewAvatar(null);
    }
  };

  const handleFormSubmit: SubmitHandler<IAvatar> = async (data) => {
    if (!previewAvatar?.length) return;

    data.avatar = previewAvatar;
    const userFormData = getProfileFormData(data);

    try {
      setIsLoading(true);
      await updateAvatarFunc(userFormData);
      toasts.successToast(Messages.updateAvatar);
      setPreviewAvatar(null);
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
        ref={previewAvatarRef}
        width={imgSize}
        height={imgSize}
      />
      <ChangeAvatarForm
        isLoading={isLoading}
        avatar={previewAvatar}
        handleFormSubmit={handleFormSubmit}
        onChangeInput={onChangeInput}
        onCancelBtnClick={onCancelBtnClick}
      />
    </div>
  );
};

export default ImageContainer;
