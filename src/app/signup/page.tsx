import ModalForm from '@/components/ModalForm';
import SignUpForm from '@/components/SignUpForm';
import { FormTypes } from '@/constants';
import { FC } from 'react';

const SignUpPage: FC = () => (
  <div className='container'>
    <ModalForm formType={FormTypes.authForm}>
      <SignUpForm />
    </ModalForm>
  </div>
);

export default SignUpPage;
