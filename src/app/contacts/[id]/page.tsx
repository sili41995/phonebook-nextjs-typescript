import contactsServiceApi from '@/service/contactsServiceApi';
import { IParams } from '@/types/types';
import { auth } from '../../../../auth';
import ContactDetails from '@/components/ContactDetails';

const ContactPage = async ({ params }: IParams) => {
  const { user }: any = await auth();
  contactsServiceApi.token = user.token;
  const contact = await contactsServiceApi.fetchContactById(params.id);

  return <ContactDetails contact={contact} />;
};

export default ContactPage;
