import contactsServiceApi from '@/service/contactsServiceApi';
import { IContact } from '@/types/types';

const getContact = async (id: string): Promise<IContact | undefined> => {
  const contacts = await contactsServiceApi.fetchContacts();
  return contacts.find((contact) => contact.id === id);
};

export default getContact;
