import contactsServiceApi from '@/service/contactsServiceApi';
import { auth } from '../../../../auth';
import ContactDetails from '@/components/ContactDetails';

const ContactPage = async ({ params }) => {
  const { user } = await auth();
  contactsServiceApi.token = user.token;
  const { id } = params;
  const contacts = await contactsServiceApi.fetchContacts();
  const contact = contacts.find((contact) => contact.id === id);

  return <ContactDetails />;
};

export default ContactPage;
