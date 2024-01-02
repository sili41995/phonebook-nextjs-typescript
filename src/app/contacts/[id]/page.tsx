import { FC } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import contactsServiceApi from '@/service/contactsServiceApi';
import { IMetadataProps, IParams } from '@/types/types';
import ContactDetails from '@/components/ContactDetails';
import { setToken } from '@/utils';

export async function generateMetadata({
  params,
}: IMetadataProps): Promise<Metadata> {
  await setToken();
  const contact = await contactsServiceApi.fetchContactById(params.id);

  return {
    title: contact.name,
    description: 'Contact details page',
  };
}

const ContactPage: FC<IParams> = async ({ params }) => {
  await setToken();
  const contact = await contactsServiceApi.fetchContactById(params.id);

  return <ContactDetails contact={contact} />;
};

export default ContactPage;
