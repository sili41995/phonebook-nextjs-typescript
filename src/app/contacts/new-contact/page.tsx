import { FC } from 'react';
import { Metadata } from 'next';
import AddContactForm from '@/components/AddContactForm';

export const metadata: Metadata = {
  title: 'Add contact',
  description: 'Page for adding a new contact',
};

const AddContactPage: FC = () => <AddContactForm />;

export default AddContactPage;
