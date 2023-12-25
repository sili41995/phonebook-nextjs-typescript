import { auth } from '@/../auth';
import ContactsContainer from '@/components/ContactsContainer';
import UserProfile from '@/components/UserProfile';
import contactsServiceApi from '@/service/contactsServiceApi';

const ContactsPage = async () => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const currentUser = await contactsServiceApi.refreshUser();
  const { contacts, count } = await contactsServiceApi.fetchContacts();

  return (
    <>
      <UserProfile user={currentUser} />
      <ContactsContainer quantity={6} contacts={contacts} count={count} />
    </>
  );
};

export default ContactsPage;
