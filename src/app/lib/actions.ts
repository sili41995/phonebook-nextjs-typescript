'use server';

import contactsServiceApi from '@/service/contactsServiceApi';
import { signIn } from '@/../auth';
import { ICredentials } from '@/types/types';

export const authenticate = async (data: ICredentials) => {
  console.log('перед await signIn');
  await signIn('credentials', data);
};

export const signUp = async (data: FormData) => {
  const response = await contactsServiceApi.signUpUser(data);
};
