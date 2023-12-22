'use server';

import contactsServiceApi from '@/service/contactsServiceApi';

export const signUp = async (data: FormData) => {
  const response = await contactsServiceApi.signUpUser(data);
};
