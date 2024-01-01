import ContactsContainer from '@/components/ContactsContainer';
import UserProfile from '@/components/UserProfile';
import contactsServiceApi from '@/service/contactsServiceApi';
import { auth } from '../../../auth';
import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { PagePaths } from '@/constants';
import { getContacts, getCurrentUser } from '../lib/actions';

const Layout = async ({ children }: { children: ReactNode }) => {
  const currentUser = await getCurrentUser();
  const { contacts, count } = await getContacts();

  return (
    <div className='container contacts'>
      <UserProfile user={currentUser} />
      <ContactsContainer quantity={6} contacts={contacts} count={count} />
      {children}
    </div>
  );
};

export default Layout;
