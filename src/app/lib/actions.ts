'use server';

import contactsServiceApi from '@/service/contactsServiceApi';
import { auth, signIn } from '../../../auth';
import { revalidatePath } from 'next/cache';

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

export const createContact = async (prevState, formData) => {
  const { user } = await auth();
  contactsServiceApi.token = user.token;
  const name = formData.get('name');
  const number = formData.get('number');
  const contact = { name, number };
  await contactsServiceApi.addContact(contact);
  revalidatePath('/contacts');
};

export const deleteContact = async (id) => {
  const { user } = await auth();
  contactsServiceApi.token = user.token;
  await contactsServiceApi.deleteContact(id);
  console.log('contact delete success');
  revalidatePath('/contacts');
};

export const signUp = async (prevState, formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const user = { name, email, password };
  await contactsServiceApi.registerUser(user);
};
