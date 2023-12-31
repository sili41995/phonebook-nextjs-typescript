'use server';

import contactsServiceApi from '@/service/contactsServiceApi';
import { auth, signIn } from '@/../auth';
import {
  IAvatar,
  IContact,
  ICredentials,
  IUpdContactStatusProps,
  IUpdateContactProps,
} from '@/types/types';
import { revalidatePath } from 'next/cache';
import { PagePaths } from '@/constants';

export const authenticate = async (data: ICredentials): Promise<void> => {
  await signIn('credentials', data);
};

export const signUp = async (data: FormData): Promise<void> => {
  await contactsServiceApi.signUpUser(data);
};

export const updateUserAvatar = async (data: FormData): Promise<IAvatar> => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.updateUserAvatar(data);

  return response;
};

export const deleteContact = async (id: string): Promise<IContact> => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.deleteContact(id);
  revalidatePath(`/${PagePaths.contactsPath}`);

  return response;
};

export const updateContactStatus = async (data: IUpdContactStatusProps) => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.updateContactStatus(data);
  revalidatePath(`/${PagePaths.contactsPath}`);

  return response;
};

export const updateContact = async (data: IUpdateContactProps) => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.updateContact(data);
  revalidatePath(`/${PagePaths.contactsPath}`);

  return response;
};

export const updateContactAvatar = async (
  id: string,
  data: FormData
): Promise<IAvatar> => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.updateContactAvatar(id, data);
  revalidatePath(`/${PagePaths.contactsPath}`);

  return response;
};
