'use server';

import contactsServiceApi from '@/service/contactsServiceApi';
import { auth, signIn } from '../../../auth';
import { revalidatePath } from 'next/cache';
import { IContact, ICredentials } from '@/types/types';

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
};

export const createContact = async (formData: FormData) => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const name = formData.get('name') as string;
  const number = formData.get('number') as string;
  const contact: IContact = { name, number };
  await contactsServiceApi.addContact(contact);
  revalidatePath('/contacts');
};

export const deleteContact = async (id: string) => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  await contactsServiceApi.deleteContact(id);
  revalidatePath('/contacts');
};

export const signUp = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const user: ICredentials = { name, email, password };
  await contactsServiceApi.registerUser(user);
};
