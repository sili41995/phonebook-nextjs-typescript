import { auth } from '@/../auth';
import UserProfile from '@/components/UserProfile';
import contactsServiceApi from '@/service/contactsServiceApi';

const ContactsPage = async () => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const currentUser = await contactsServiceApi.refreshUser();

  return (
    <>
      <UserProfile user={currentUser} />
    </>
  );
};

export default ContactsPage;
