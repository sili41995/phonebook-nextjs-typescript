'use server';

import contactsServiceApi from '@/service/contactsServiceApi';
import { auth, signIn } from '@/../auth';
import { IContact, ICredentials } from '@/types/types';

export const authenticate = async (data: ICredentials): Promise<void> => {
  await signIn('credentials', data);
};

export const signUp = async (data: FormData): Promise<void> => {
  await contactsServiceApi.signUpUser(data);
};

export const updateAvatar = async (data: FormData): Promise<void> => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  await contactsServiceApi.updateUserAvatar(data);
};

export const deleteContact = async (id: string): Promise<IContact> => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.deleteContact(id);

  return response;
};
