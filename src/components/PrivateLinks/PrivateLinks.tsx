'use client';

import { FC, MouseEvent } from 'react';
import { SlLogout, SlPlus } from 'react-icons/sl';
import { usePathname } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@/components/IconButton';
import Filter from '@/components/Filter';
import LinkWithQuery from '@/components/LinkWithQuery';
import { makeBlur, toasts } from '@/utils';
import { IconBtnType, IconSizes, PagePaths } from '@/constants';
import { signOutAccount } from '@/app/lib/actions';
import css from './PrivateLinks.module.css';

const { contactsPath, addNewContactPath } = PagePaths;

const PrivateLinks: FC = () => {
  const isContactsPage = usePathname().includes(contactsPath);

  const onSignOutBtnClick = async (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);

    try {
      await signOutAccount();
    } catch (error) {
      if (error instanceof Error) {
        toasts.errorToast(error.message);
      }
    }
  };

  return (
    <div className={css.container}>
      {isContactsPage && <Filter />}
      <LinkWithQuery href={addNewContactPath}>
        <SlPlus />
        <span>New Contact</span>
      </LinkWithQuery>
      <IconButton
        btnType={IconBtnType.signout}
        onBtnClick={onSignOutBtnClick}
        icon={<SlLogout size={IconSizes.otherIconSize} />}
        title='Signout'
      />
    </div>
  );
};

export default PrivateLinks;
