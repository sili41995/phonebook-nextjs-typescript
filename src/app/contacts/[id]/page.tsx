import contactsServiceApi from '@/service/contactsServiceApi';
import { auth } from '../../../../auth';
import ContactDetails from '@/components/ContactDetails';
import ErrorMessage from '@/components/ErrorMessage';
import getCurrentUser from '@/utils/getCurrentUser';

const ContactPage = async ({ params }) => {
  const error = await getCurrentUser();

  if (error) {
    return <ErrorMessage />;
  }

  const { id } = params;

  const contacts = await contactsServiceApi.fetchContacts();
  const contact = contacts.find((contact) => contact.id === id);

  return <ContactDetails contact={contact} />;
};

export default ContactPage;
