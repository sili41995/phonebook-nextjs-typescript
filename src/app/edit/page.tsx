import ErrorMessage from '@/components/ErrorMessage';
import getContact from '@/utils/getContact';
import getCurrentUser from '@/utils/getCurrentUser';
import React from 'react';

const page = async ({ params }: { params: { id: string } }) => {
  const error = await getCurrentUser();

  if (error) {
    return <ErrorMessage />;
  }

  const contact = await getContact(params.id);
};

export default page;
