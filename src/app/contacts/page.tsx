import contactsServiceApi from '@/service/contactsServiceApi';
import ContactsList from '@/components/ContactsList';
import ErrorMessage from '@/components/ErrorMessage';
import getCurrentUser from '@/utils/getCurrentUser';
import Header from '@/components/Header';
import Filter from '@/components/Filter';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Contacts',
  description: 'My contacts',
};

const ContactsPage = async () => {
  const error = await getCurrentUser();

  if (error) {
    return <ErrorMessage />;
  }

  const contacts = await contactsServiceApi.fetchContacts();

  if (!contacts) {
    notFound();
  }

  return (
    <div className='contacts'>
      <Header>
        <Filter />
      </Header>
      <ContactsList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;
