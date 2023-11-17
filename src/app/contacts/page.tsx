import { auth } from '../../../auth';

export const metadata = {
  title: 'Contacts',
  description: 'My contacts',
};

const ContactsPage = async () => {
  const session = await auth();
  console.log(session);

  return <div>Contacts</div>;
};

export default ContactsPage;
