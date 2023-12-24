'use server';

import contactsServiceApi from '@/service/contactsServiceApi';
import { auth, signIn } from '@/../auth';
import { ICredentials } from '@/types/types';

export const authenticate = async (data: ICredentials) => {
  await signIn('credentials', data);
};

export const signUp = async (data: FormData) => {
  await contactsServiceApi.signUpUser(data);
};

export const updateAvatar = async (data: FormData): Promise<void> => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  await contactsServiceApi.updateUserAvatar(data);
};
