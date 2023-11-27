'use server';

import contactsServiceApi from '@/service/contactsServiceApi';
import { signIn } from '../../../auth';
import { revalidatePath } from 'next/cache';
import { IContact, ICredentials } from '@/types/types';
import getCurrentUser from '@/utils/getCurrentUser';

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
  await getCurrentUser();
  await contactsServiceApi.addContact(data);
  revalidatePath('/contacts');
};

export const deleteContact = async (id: string) => {
  await getCurrentUser();
  await contactsServiceApi.deleteContact(id);
  revalidatePath('/contacts');
};

export const updateContact = async (data: { data: IContact; id: string }) => {
  await getCurrentUser();
  await contactsServiceApi.updateContact(data);
  revalidatePath('/contacts');
};
