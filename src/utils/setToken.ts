import { Session } from 'next-auth/types';
import { auth } from '../../auth';
import contactsServiceApi from '@/service/contactsServiceApi';

const setToken = async (): Promise<void> => {
  const { user } = (await auth()) as Session;
  contactsServiceApi.token = user.token;
};

export default setToken;
