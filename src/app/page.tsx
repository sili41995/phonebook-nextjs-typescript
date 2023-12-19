import ModalForm from '@/components/ModalForm';
import SharedLayout from '@/components/SharedLayout';
import SignInForm from '@/components/SignInForm';

const Home = () => {
  return (
    <SharedLayout>
      <ModalForm>
        <SignInForm />
      </ModalForm>
    </SharedLayout>
  );
};

export default Home;
