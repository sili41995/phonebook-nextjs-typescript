'use client';

import { useMemo } from 'react';
import ContactsListItem from '@/components/ContactsListItem';
import DefaultMessage from '@/components/DefaultMessage';
import { useSearchParams } from 'next/navigation';
import css from './ContactsList.module.css';
import { IProps } from './ContactsList.types';
import sortContactsByName from '@/utils/sortContactsByName';
import filterContactsByName from '@/utils/filterContactsByName';
import { SearchParamsKeys } from '@/constants/searchParamsKeys';

const ContactsList = ({ contacts }: IProps) => {
  const searchParams = useSearchParams();
  const filter = searchParams.get(SearchParamsKeys.FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(SearchParamsKeys.SORT_SP_KEY) ?? '';

  const filteredContacts = useMemo(() => {
    const sortedContacts = sortContactsByName(contacts, sortType);
    return filterContactsByName(sortedContacts, filter);
  }, [contacts, filter, sortType]);

  return (
    <div className={css.container}>
      {!!filteredContacts.length ? (
        <ul className={css.contactsList}>
          {filteredContacts.map((contact) => (
            <ContactsListItem contact={contact} key={contact.id} />
          ))}
        </ul>
      ) : (
        <DefaultMessage message='Contact list is empty' />
      )}
    </div>
  );
};

export default ContactsList;
