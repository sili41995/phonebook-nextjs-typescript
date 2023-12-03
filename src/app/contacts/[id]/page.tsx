import ContactDetails from '@/components/ContactDetails';
import ErrorMessage from '@/components/ErrorMessage';
import getCurrentUser from '@/utils/getCurrentUser';
import { IContact } from '@/types/types';
import getContact from '@/utils/getContact';
import { notFound } from 'next/navigation';

const ContactPage = async ({ params }: { params: { id: string } }) => {
  const error = await getCurrentUser();

  if (error) {
    return <ErrorMessage />;
  }

  const contact = await getContact(params.id);

  if (!contact) {
    notFound();
  }

  return <ContactDetails contact={contact as IContact} />;
};

export default ContactPage;
