import ModalForm from '@/components/ModalForm';
import SignInForm from '@/components/SignInForm';
import { FormTypes } from '@/constants';

const HomePage = () => {
  return (
    <div className='container'>
      <ModalForm formType={FormTypes.authForm}>
        <SignInForm />
      </ModalForm>
    </div>
  );
};

export default HomePage;
