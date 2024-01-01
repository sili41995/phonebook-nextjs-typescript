import { FC } from 'react';
import EditContactForm from '@/components/EditContactForm';
import { IParams } from '@/types/types';
import contactsServiceApi from '@/service/contactsServiceApi';
import { setToken } from '@/utils';

const EditPage: FC<IParams> = async ({ params }) => {
  await setToken();
  const contact = await contactsServiceApi.fetchContactById(params.id);

  return <EditContactForm contact={contact} />;
};

export default EditPage;
