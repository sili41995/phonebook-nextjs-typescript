import contactsServiceApi from '@/service/contactsServiceApi';
import { auth } from '../../auth';

const getCurrentUser = async () => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.refreshUser();

  if (response.message) {
    return response.message;
  }
};
export default getCurrentUser;
