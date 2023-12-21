import ModalForm from '@/components/ModalForm';
import SignUpForm from '@/components/SignUpForm';
import { FormTypes } from '@/constants';

const SignUpPage = () => {
  return (
    <ModalForm formType={FormTypes.authForm}>
      <SignUpForm />
    </ModalForm>
  );
};

export default SignUpPage;
