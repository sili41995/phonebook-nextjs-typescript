'use client';

import { FC, MouseEvent } from 'react';
import { SlLogout, SlPlus } from 'react-icons/sl';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from '@/components/IconButton';
import Filter from '@/components/Filter';
import LinkWithQuery from '@/components/LinkWithQuery';
import { makeBlur, toasts } from '@/utils';
import { IconBtnType, IconSizes, PagePaths } from '@/constants';
import css from './PrivateLinks.module.css';
import { redirect, usePathname } from 'next/navigation';
import { signOutAccount } from '@/app/lib/actions';

const PrivateLinks: FC = () => {
  const isContactsPage = usePathname().includes(PagePaths.contactsPath);
  const addNewContactPath = `/${PagePaths.addNewContactPath}`;

  const onLogoutBtnClick = async (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);

    try {
      await signOutAccount();
      toasts.successToast('Goodbye!');
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
        btnType={IconBtnType.logout}
        onBtnClick={onLogoutBtnClick}
        icon={<SlLogout size={IconSizes.otherIconSize} />}
        title='Logout'
      />
    </div>
  );
};

export default PrivateLinks;
