import ModalForm from '@/components/ModalForm';
import SignInForm from '@/components/SignInForm';
import { FormTypes } from '@/constants';

const HomePage = () => {
  return (
    <ModalForm formType={FormTypes.authForm}>
      <SignInForm />
    </ModalForm>
  );
};

export default HomePage;
