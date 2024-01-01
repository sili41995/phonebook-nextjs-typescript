import ContactsContainer from '@/components/ContactsContainer';
import UserProfile from '@/components/UserProfile';
import contactsServiceApi from '@/service/contactsServiceApi';
import { auth } from '../../../auth';
import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { PagePaths } from '@/constants';
import { getContacts, getCurrentUser, signOutApp } from '../lib/actions';
import AuthError from '@/components/AuthError';

const Layout = async ({ children }: { children: ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <AuthError />;
  }

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
