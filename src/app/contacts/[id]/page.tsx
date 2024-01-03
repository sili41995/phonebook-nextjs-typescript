import { FC } from 'react';
import { Metadata } from 'next';
import contactsServiceApi from '@/service/contactsServiceApi';
import { IMetadataProps, IParams } from '@/types/types';
import ContactDetails from '@/components/ContactDetails';
import { getContactById } from '@/app/lib/actions';

export async function generateMetadata({
  params,
}: IMetadataProps): Promise<Metadata> {
  let title = 'Contact';

  try {
    const contact = await getContactById(params.id);
    title = contact.name;
  } catch (error) {
    console.log(error);
  }

  return {
    title,
    description: 'Contact details page',
  };
}

const ContactPage: FC<IParams> = async ({ params }) => {
  const contact = await getContactById(params.id);

  return <ContactDetails contact={contact} />;
};

export default ContactPage;
