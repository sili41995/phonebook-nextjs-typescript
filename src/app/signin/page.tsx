import { FC } from 'react';
import ModalForm from '@/components/ModalForm';
import SignInForm from '@/components/SignInForm';
import { FormTypes } from '@/constants';

const SignInPage: FC = () => (
  <div className='container'>
    <ModalForm formType={FormTypes.authForm}>
      <SignInForm />
    </ModalForm>
  </div>
);

export default SignInPage;
