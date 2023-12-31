'use server';

import contactsServiceApi from '@/service/contactsServiceApi';
import { auth, signIn, signOut } from '@/../auth';
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

export const signOutAccount = async (): Promise<void> => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  await contactsServiceApi.signOutUser();
  await signOut();
};

export const signOutApp = async (): Promise<void> => {
  await signOut();
};

export const getCurrentUser = async () => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.refreshUser();

  return response;
};

export const updateUserAvatar = async (data: FormData): Promise<IAvatar> => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.updateUserAvatar(data);

  return response;
};

export const getContacts = async () => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.fetchContacts();

  return response;
};

export const deleteContact = async (id: string): Promise<IContact> => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.deleteContact(id);
  revalidatePath(`/${PagePaths.contactsPath}`);

  return response;
};

export const updateContactStatus = async (
  data: IUpdContactStatusProps
): Promise<IContact> => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const response = await contactsServiceApi.updateContactStatus(data);
  revalidatePath(`/${PagePaths.contactsPath}`);

  return response;
};

export const updateContact = async (
  data: IUpdateContactProps
): Promise<IContact> => {
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
