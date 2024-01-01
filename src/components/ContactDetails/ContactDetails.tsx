'use client';

import { MouseEvent } from 'react';
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
import css from './ContactDetails.module.css';
import { updateContactStatus } from '@/app/lib/actions';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const ContactDetails = ({ contact }: IProps) => {
  const { setContactId, isLoading: isDeleting } = useDeleteContact();
  const searchParams = useSearchParams();
  const contactId = contact._id;
  const favoriteBtnIcon = contact?.favorite ? (
    <AiFillStar size={IconSizes.primaryIconSize} />
  ) : (
    <AiOutlineStar size={IconSizes.primaryIconSize} />
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
            btnType={IconBtnType.favorite}
            onBtnClick={onFavoriteBtnClick}
            icon={favoriteBtnIcon}
          />
          <IconButton
            disabled={isDeleting}
            btnType={IconBtnType.delete}
            onBtnClick={onDelBtnClick}
            icon={<AiOutlineDelete size={IconSizes.primaryIconSize} />}
          />
          <Link
            href={`/${PagePaths.contactsPath}/${contactId}/${PagePaths.editPage}?${searchParams}`}
            className={css.editLink}
          >
            <AiOutlineEdit size={IconSizes.primaryIconSize} />
          </Link>
        </div>
      </div>
      <ContactProfile contact={contact} />
    </div>
  );
};

export default ContactDetails;
