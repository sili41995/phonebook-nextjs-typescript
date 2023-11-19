import contactsServiceApi from '@/service/contactsServiceApi';
import { auth, signOut } from '../../../auth';
import ContactsList from '@/components/ContactsList';

export const metadata = {
  title: 'Contacts',
  description: 'My contacts',
};

const ContactsPage = async () => {
  const logout = async () => {
    'use server';
    signOut();
  };

  const { user } = await auth();
  contactsServiceApi.token = user.token;
  const currentUser = await contactsServiceApi.refreshUser();

  if (currentUser.message) {
    return <p>упс, что-то пошло не так! перелогинся</p>;
  }

  const contacts = await contactsServiceApi.fetchContacts();

  return (
    <>
      <p>My contacts</p>
      <ContactsList contacts={contacts} />
    </>
  );
};

export default ContactsPage;
