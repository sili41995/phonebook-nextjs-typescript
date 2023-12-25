import { FC } from 'react';
import ContactsListItem from '@/components/ContactsListItem';
import { IProps } from './ContactsList.types';
import css from './ContactsList.module.css';

const ContactsList: FC<IProps> = ({ contacts }) => (
  <ul className={css.list}>
    {contacts.map((contact) => (
      <ContactsListItem contact={contact} key={contact._id} />
    ))}
  </ul>
);

export default ContactsList;
