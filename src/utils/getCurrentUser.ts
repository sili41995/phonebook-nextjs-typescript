import contactsServiceApi from '@/service/contactsServiceApi';
import { auth } from '../../auth';

const getCurrentUser = async () => {
  const { user } = await auth();
  contactsServiceApi.token = user.token;
  const currentUser = await contactsServiceApi.refreshUser();

  if (currentUser.message) {
    return currentUser.message;
  }
};

export default getCurrentUser;
