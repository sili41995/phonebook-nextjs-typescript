import { FC } from 'react';
import AddContactForm from '@/components/AddContactForm';
import ModalForm from '@/components/ModalForm';
import { FormTypes } from '@/constants';

const AddContactPage: FC = () => (
  <div className='backdrop'>
    <ModalForm formType={FormTypes.withBackdrop}>
      <AddContactForm />
    </ModalForm>
  </div>
);

export default AddContactPage;
