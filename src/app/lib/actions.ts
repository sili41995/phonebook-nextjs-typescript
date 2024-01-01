'use server';

import contactsServiceApi from '@/service/contactsServiceApi';
import { signIn, signOut } from '@/../auth';
import {
  IAvatar,
  IContact,
  ICredentials,
  ICurrentUser,
  IFetchContactsRes,
  IUpdContactStatusProps,
  IUpdateContactProps,
} from '@/types/types';
import { revalidatePath } from 'next/cache';
import { PagePaths } from '@/constants';
import { setToken } from '@/utils';

export const authenticate = async (data: ICredentials): Promise<void> => {
  await signIn('credentials', data);
};

export const signUp = async (data: FormData): Promise<void> => {
  await contactsServiceApi.signUpUser(data);
};

export const signOutAccount = async (): Promise<void> => {
  await setToken();
  await contactsServiceApi.signOutUser();
  await signOut();
};

export const signOutApp = async () => {
  await signOut();
};

export const getCurrentUser = async (): Promise<ICurrentUser | null> => {
  await setToken();
  const response = await contactsServiceApi.refreshUser();

  return response;
};

export const updateUserAvatar = async (data: FormData): Promise<IAvatar> => {
  await setToken();
  const response = await contactsServiceApi.updateUserAvatar(data);

  return response;
};

export const getContacts = async (): Promise<IFetchContactsRes> => {
  await setToken();
  const response = await contactsServiceApi.fetchContacts();

  return response;
};

export const addContact = async (data: FormData): Promise<IContact> => {
  await setToken();
  const response = await contactsServiceApi.addContact(data);
  revalidatePath(`/${PagePaths.contactsPath}`);

  return response;
};

export const deleteContact = async (id: string): Promise<IContact> => {
  await setToken();
  const response = await contactsServiceApi.deleteContact(id);
  revalidatePath(`/${PagePaths.contactsPath}`);

  return response;
};

export const updateContactStatus = async (
  data: IUpdContactStatusProps
): Promise<IContact> => {
  await setToken();
  const response = await contactsServiceApi.updateContactStatus(data);
  revalidatePath(`/${PagePaths.contactsPath}`);

  return response;
};

export const updateContact = async (
  data: IUpdateContactProps
): Promise<IContact | undefined> => {
  await setToken();
  const response = await contactsServiceApi.updateContact(data);
  revalidatePath(`/${PagePaths.contactsPath}`);

  return response;
};

export const updateContactAvatar = async (
  id: string,
  data: FormData
): Promise<IAvatar> => {
  await setToken();
  const response = await contactsServiceApi.updateContactAvatar(id, data);
  revalidatePath(`/${PagePaths.contactsPath}`);

  return response;
};
