import AddContactForm from '@/components/AddContactForm';
import AuthForm from '@/components/AuthForm';
import ContactModalForm from '@/components/ContactModalForm';
import contactsServiceApi from '@/service/contactsServiceApi';

const AddContactPage = () => {
  return (
    <AuthForm>
      <AddContactForm />
    </AuthForm>
  );
};

export default AddContactPage;
