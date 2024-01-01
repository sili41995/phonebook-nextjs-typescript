'use client';

import { useMemo, FC } from 'react';
import { IProps } from './ContactsContainer.types';
import { SearchParamsKeys } from '@/constants';
import {
  filterContactsByName,
  getVisibleContacts,
  sortContactsByName,
} from '@/utils';
import ContactsList from '@/components/ContactsList';
import PaginationBar from '@/components/PaginationBar';
import DefaultMessage from '@/components/DefaultMessage';
import css from './ContactsContainer.module.css';
import { useSearchParams } from 'next/navigation';

const { FILTER_SP_KEY, SORT_SP_KEY, PAGE_SP_KEY } = SearchParamsKeys;

const ContactsContainer: FC<IProps> = ({ quantity, contacts, count }) => {
  const searchParams = useSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(SORT_SP_KEY) ?? '';

  const currentPage = Number(searchParams.get(PAGE_SP_KEY) ?? 1);
  const isValidPage = currentPage > 0;

  const filteredContacts = useMemo(() => {
    const sortedContacts = sortContactsByName(contacts, sortType);
    return filterContactsByName(sortedContacts, filter);
  }, [contacts, filter, sortType]);

  const visibleContacts = getVisibleContacts({
    filteredContacts,
    quantity,
    currentPage,
  });

  const renderContacts = filter ? filteredContacts : visibleContacts;
  const isShouldRenderList = isValidPage && Boolean(renderContacts.length);

  return (
    <div className={css.container}>
      {isShouldRenderList ? (
        <>
          <ContactsList contacts={renderContacts} />
          {!filter && (
            <PaginationBar
              quantity={quantity}
              step={2}
              itemsQuantity={filteredContacts.length}
            />
          )}
        </>
      ) : (
        <DefaultMessage message='Contact list is empty' />
      )}
    </div>
  );
};

export default ContactsContainer;
