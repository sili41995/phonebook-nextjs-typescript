'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { SlPaperClip, SlBan } from 'react-icons/sl';
import { IconBtnType, IconSizes, InputTypes } from '@/constants';
import { IAvatar } from '@/types/types';
import AcceptBtn from '@/components/AcceptBtn';
import IconButton from '@/components/IconButton';
import Input from '@/components/Input';
import { IProps } from './ChangeAvatarForm.types';
import css from './ChangeAvatarForm.module.css';
import AriaLabels from '@/constants/ariaLabels';

const { primaryIconSize } = IconSizes;

const ChangeAvatarForm: FC<IProps> = ({
  isLoading,
  avatar,
  handleFormSubmit,
  onChangeInput,
  onCancelBtnClick,
}) => {
  const { register, handleSubmit } = useForm<IAvatar>();

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(handleFormSubmit)}>
        {avatar?.length ? (
          <ul className={css.btnList}>
            <li>
              <AcceptBtn disabled={isLoading} />
            </li>
            <li>
              <IconButton
                btnType={IconBtnType.cancel}
                onBtnClick={onCancelBtnClick}
                aria-label={AriaLabels.cancel}
                icon={<SlBan size={primaryIconSize} />}
              />
            </li>
          </ul>
        ) : (
          <Input
            settings={{ ...register('avatar') }}
            accept='image/png, image/jpeg, image/jpg'
            onChange={onChangeInput}
            type={InputTypes.file}
            aria-label={AriaLabels.avatar}
            altElem={<SlPaperClip size={primaryIconSize} />}
          />
        )}
      </form>
    </>
  );
};

export default ChangeAvatarForm;
