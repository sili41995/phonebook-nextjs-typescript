import { FC } from 'react';
import EditContactForm from '@/components/EditContactForm';
import { IMetadataProps, IParams } from '@/types/types';
import contactsServiceApi from '@/service/contactsServiceApi';
import { setToken } from '@/utils';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: IMetadataProps): Promise<Metadata> {
  await setToken();
  const contact = await contactsServiceApi.fetchContactById(params.id);

  return {
    title: contact.name,
    description: 'Contact editing page',
  };
}

const EditPage: FC<IParams> = async ({ params }) => {
  await setToken();
  const contact = await contactsServiceApi.fetchContactById(params.id);

  return <EditContactForm contact={contact} />;
};

export default EditPage;
