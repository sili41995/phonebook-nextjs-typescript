import ModalForm from '@/components/ModalForm';
import SharedLayout from '@/components/SharedLayout';
import SignInForm from '@/components/SignInForm';
import { FormTypes } from '@/constants';

const Home = () => {
  return (
    <SharedLayout>
      <ModalForm formType={FormTypes.authForm}>
        <SignInForm />
      </ModalForm>
    </SharedLayout>
  );
};

export default Home;
