import { FC } from 'react';
import { Metadata } from 'next';
import AddContactForm from '@/components/AddContactForm';
import ModalForm from '@/components/ModalForm';

export const metadata: Metadata = {
  title: 'Add contact',
  description: 'Page for adding a new contact',
};

const AddContactPage: FC = () => (
  <ModalForm>
    <AddContactForm />
  </ModalForm>
);

export default AddContactPage;
