import contactsServiceApi from '@/service/contactsServiceApi';
import { auth } from '../../../auth';
import ContactsList from '@/components/ContactsList';
import ErrorMessage from '@/components/ErrorMessage';
import getCurrentUser from '@/utils/getCurrentUser';

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

  return (
    <>
      <ContactsList contacts={contacts} />
    </>
  );
};

export default ContactsPage;
