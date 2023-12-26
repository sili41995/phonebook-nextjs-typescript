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
    <div className='container contacts'>
      <UserProfile user={currentUser} />
      <ContactsContainer quantity={6} contacts={contacts} count={count} />
    </div>
  );
};

export default ContactsPage;
