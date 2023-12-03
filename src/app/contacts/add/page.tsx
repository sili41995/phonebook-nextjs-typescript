import AddContactForm from '@/components/AddContactForm';
import AuthForm from '@/components/AuthForm';

export const metadata = {
  title: 'Add contact',
  description: 'Page for adding a new contact',
};

const AddContactPage = () => {
  return (
    <>
      <AuthForm>
        <AddContactForm />
      </AuthForm>
    </>
  );
};

export default AddContactPage;
