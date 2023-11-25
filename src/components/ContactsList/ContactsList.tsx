// import { useMemo } from 'react';
// import { useSelector } from 'react-redux';
import ContactsListItem from '@/components/ContactsListItem';
import EmptyListMessage from '@/components/EmptyListMessage';
// import { searchParamsKeys } from '@/constants';
// import { filterContactsByName, sortContactsByName } from '@/utils';
// import { selectContacts } from '@/redux/contacts/selectors';
// import { useSearchParams } from 'next/navigation';
import css from './ContactsList.module.css';
import { IProps } from './ContactsList.types';

const ContactsList = ({ contacts }: IProps) => {
  // const searchParams = useSearchParams();
  // const filter = searchParams.get(searchParamsKeys.FILTER_SP_KEY) ?? '';
  // const sortType = searchParams.get(searchParamsKeys.SORT_SP_KEY) ?? '';

  // const filteredContacts = useMemo(() => {
  //   const sortedContacts = sortContactsByName(contacts, sortType);
  //   return filterContactsByName(sortedContacts, filter);
  // }, [contacts, filter, sortType]);

  return (
    <div className={css.container}>
      {!!contacts.length ? (
        <ul className={css.contactsList}>
          {contacts.map((contact) => (
            <ContactsListItem contact={contact} key={contact.id} />
          ))}
        </ul>
      ) : (
        <EmptyListMessage />
      )}
    </div>
  );
};

export default ContactsList;
