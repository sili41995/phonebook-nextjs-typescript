import { FC } from 'react';
import ContactsContainer from '@/components/ContactsContainer';
import UserProfile from '@/components/UserProfile';
import AuthError from '@/components/AuthError';
import { getContacts, getCurrentUser } from '@/app/lib/actions';
import { ILayoutProps } from '@/types/types';

const Layout: FC<ILayoutProps> = async ({ children }) => {
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
