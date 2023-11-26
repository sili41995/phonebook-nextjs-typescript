'use server';

import contactsServiceApi from '@/service/contactsServiceApi';
import { auth, signIn } from '../../../auth';
import { revalidatePath } from 'next/cache';
import { IContact, ICredentials } from '@/types/types';

export const authenticate = async (data: ICredentials) => {
  await signIn('credentials', data);
};

export const signUp = async (data: ICredentials) => {
  const response = await contactsServiceApi.registerUser(data);
  if (response.keyValue) {
    throw new Error('This user is already registered');
  }
};

export const createContact = async (data: IContact) => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  await contactsServiceApi.addContact(data);
  revalidatePath('/contacts');
};

export const deleteContact = async (id: string) => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  await contactsServiceApi.deleteContact(id);
  revalidatePath('/contacts');
};
