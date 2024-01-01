import { Session } from 'next-auth/types';
import { auth } from '../../auth';
import contactsServiceApi from '@/service/contactsServiceApi';

const setToken = async () => {
  const { user } = (await auth()) as Session;
  contactsServiceApi.token = user.token;
};

export default setToken;
