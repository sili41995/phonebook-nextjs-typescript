import { FC } from 'react';
import contactsServiceApi from '@/service/contactsServiceApi';
import { IParams } from '@/types/types';
import ContactDetails from '@/components/ContactDetails';
import { setToken } from '@/utils';

const ContactPage: FC<IParams> = async ({ params }) => {
  await setToken();
  const contact = await contactsServiceApi.fetchContactById(params.id);

  return <ContactDetails contact={contact} />;
};

export default ContactPage;
