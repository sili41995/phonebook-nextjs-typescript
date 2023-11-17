import contactsServiceApi from '@/service/contactsServiceApi';
import { auth, signOut } from '../../../auth';

export const metadata = {
  title: 'Contacts',
  description: 'My contacts',
};

const ContactsPage = async () => {
  const { user } = await auth();
  contactsServiceApi.token = user.token;
  const currentUser = await contactsServiceApi.refreshUser();
  // if (currentUser.message) {
  //   ('use server');
  //   await signOut();
  // }

  const contacts = await contactsServiceApi.fetchContacts();

  return <div>Contacts</div>;
};

export default ContactsPage;
