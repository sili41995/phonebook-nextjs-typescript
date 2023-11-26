import AuthForm from '@/components/AuthForm';
import EditForm from '@/components/EditForm/EditForm';
import ErrorMessage from '@/components/ErrorMessage';
import { IContact } from '@/types/types';
import getContact from '@/utils/getContact';
import getCurrentUser from '@/utils/getCurrentUser';
import React from 'react';

const page = async ({ params }: { params: { id: string } }) => {
  const error = await getCurrentUser();

  if (error) {
    return <ErrorMessage />;
  }

  const contact = await getContact(params.id);

  return (
    <AuthForm>
      <EditForm contact={contact as IContact} />
    </AuthForm>
  );
};

export default page;
