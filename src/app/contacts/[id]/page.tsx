import contactsServiceApi from '@/service/contactsServiceApi';
import { IParams } from '@/types/types';
import { auth } from '../../../../auth';
import ContactDetails from '@/components/ContactDetails';
import { Session } from 'next-auth/types';
import { setToken } from '@/utils';

const ContactPage = async ({ params }: IParams) => {
  await setToken();
  const contact = await contactsServiceApi.fetchContactById(params.id);

  return <ContactDetails contact={contact} />;
};

export default ContactPage;
