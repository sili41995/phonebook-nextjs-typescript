import EditContactForm from '@/components/EditContactForm';
import GoBackLink from '@/components/GoBackLink';
import ModalForm from '@/components/ModalForm';
import { IParams } from '@/types/types';
import React from 'react';
import { auth } from '../../../../../auth';
import contactsServiceApi from '@/service/contactsServiceApi';

const EditPage = async ({ params }: IParams) => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const contact = await contactsServiceApi.fetchContactById(params.id);

  return <EditContactForm contact={contact} />;
};

export default EditPage;
