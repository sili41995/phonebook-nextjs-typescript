'use client';

import { FC, MouseEvent } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  AiFillStar,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineStar,
} from 'react-icons/ai';
import ContactProfile from '@/components/ContactProfile';
import GoBackLink from '@/components/GoBackLink';
import IconButton from '@/components/IconButton';
import { IconBtnType, IconSizes, PagePaths } from '@/constants';
import { makeBlur, toasts } from '@/utils';
import useDeleteContact from '@/hooks/useDeleteContact';
import { IProps } from './ContactDetails.types';
import { updateContactStatus } from '@/app/lib/actions';
import css from './ContactDetails.module.css';

const { primaryIconSize } = IconSizes;
const { favorite, delete: deleteType } = IconBtnType;
const { contactsPath, editPath } = PagePaths;

const ContactDetails: FC<IProps> = ({ contact }) => {
  const { setContactId, isLoading: isDeleting } = useDeleteContact();
  const searchParams = useSearchParams();
  const contactId = contact._id;
  const editPagePath = `/${contactsPath}/${contactId}/${editPath}?${searchParams}`;
  const favoriteBtnIcon = contact?.favorite ? (
    <AiFillStar size={primaryIconSize} />
  ) : (
    <AiOutlineStar size={primaryIconSize} />
  );

  const onDelBtnClick = () => {
    if (contactId) {
      setContactId(contactId);
    }
  };

  const onFavoriteBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);

    if (!contactId) return;

    const { favorite } = contact;
    const data = { favorite: !favorite };
    updateContactStatus({ data, id: contactId })
      .then(() => {
        toasts.successToast('Contact status updated successfully');
      })
      .catch((error) => {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
        }
      });
  };

  return (
    <div className={css.container}>
      <div className={css.btnContainer}>
        <GoBackLink />
        <div className={css.btnWrap}>
          <IconButton
            btnType={favorite}
            onBtnClick={onFavoriteBtnClick}
            icon={favoriteBtnIcon}
          />
          <IconButton
            disabled={isDeleting}
            btnType={deleteType}
            onBtnClick={onDelBtnClick}
            icon={<AiOutlineDelete size={primaryIconSize} />}
          />
          <Link href={editPagePath} className={css.editLink}>
            <AiOutlineEdit size={primaryIconSize} />
          </Link>
        </div>
      </div>
      <ContactProfile contact={contact} />
    </div>
  );
};

export default ContactDetails;
