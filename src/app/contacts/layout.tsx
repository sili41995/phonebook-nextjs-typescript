import ContactsContainer from '@/components/ContactsContainer';
import UserProfile from '@/components/UserProfile';
import contactsServiceApi from '@/service/contactsServiceApi';
import { auth } from '../../../auth';
import { ReactNode } from 'react';

const Layout = async ({ children }: { children: ReactNode }) => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const { contacts, count } = await contactsServiceApi.fetchContacts();
  const currentUser = await contactsServiceApi.refreshUser();

  return (
    <div className='container contacts'>
      <UserProfile user={currentUser} />
      <ContactsContainer quantity={6} contacts={contacts} count={count} />
      {children}
    </div>
  );
};

export default Layout;
