import ModalForm from '@/components/ModalForm';
import SignUpForm from '@/components/SignUpForm';
import { FormTypes } from '@/constants';

const SignUpPage = () => {
  return (
    <div className='container'>
      <ModalForm formType={FormTypes.authForm}>
        <SignUpForm />
      </ModalForm>
    </div>
  );
};

export default SignUpPage;
